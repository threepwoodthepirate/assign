import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { server } from "@/mocks/server";
import { userGetHandler, userHandlerEmpty } from "@/mocks/handlers/users";
import Home from "../../../../pages/index";

import { User } from "@/types/user";
import { fetchUsers } from "@/lib/fetchUsers";

describe("Home", () => {
  beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders a heading", async () => {
    // const { result } = renderHook(() => useInView(null, true));

    server.use(userGetHandler);
    const data: User[] = await fetchUsers();
    const { container } = render(<Home userList={data} />);

    const heading = screen.getByRole("heading", {
      name: /Welcome to the fellowship of 1337/i,
    });

    expect(heading).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it("should fail and show that something went wrong", async () => {
    server.use(userHandlerEmpty);
    const data: User[] = await fetchUsers();
    const { container } = render(<Home userList={data ?? []} />);
    const heading = screen.getByRole("heading", {
      name: /Something unexpected happened../i,
    });
    expect(heading).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("renders a list of users", async () => {
    server.use(userGetHandler);
    const data: User[] = await fetchUsers();
    const { container } = render(<Home userList={data} />);

    const matches = container.querySelectorAll("li");
    expect(matches).toHaveLength(9);
  });

  it("should render one post when user searches for nic", async () => {
    server.use(userGetHandler);
    const data: User[] = await fetchUsers();
    const { container } = render(<Home userList={data} />);

    const textbox = screen.getByRole(/textbox/i);
    await userEvent.type(textbox, "nic");

    const matches = container.querySelectorAll("li");
    expect(matches.length).toEqual(1);
  });
});
function renderHook(arg0: () => any): { result: any } {
  throw new Error("Function not implemented.");
}
