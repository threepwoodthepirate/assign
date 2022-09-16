import { Props } from "./props";

const PageLayout: React.FC<Props> = ({ children }): JSX.Element => {
  return (
    <section className="min-h-screen h-full px-4 mx-auto mt-10 md:mt-20 md:px-8 max-w-screen-lg">
      {children}
    </section>
  );
};

export default PageLayout;
