import AppLayout from "@/components/layouts/dashboard_layout";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

type NextPageWithLayout = AppProps["Component"] & {
  getLayout?: (page: React.ReactNode) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout =
    (Component as NextPageWithLayout).getLayout ||
    ((page) => <AppLayout>{page}</AppLayout>);

  return (
    <SessionProvider refetchOnWindowFocus={false} session={session}>
      {getLayout(<Component {...pageProps} />)}
    </SessionProvider>
  );
}
