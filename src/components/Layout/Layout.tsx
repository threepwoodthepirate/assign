import Head from "next/head";

import { Props } from "./props";

export const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>1337 User</title>
        <meta name="description" content="1337 people" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-sans bg-lightTheme dark:bg-darkTheme transition-colors bg-white dark:bg-slate-800 px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        {children}
      </main>
    </>
  );
};
