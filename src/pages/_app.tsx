import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { trpc } from "../utils/trpc";
import "../styles/globals.css";
import MantineProvider from "../components/providers/MantineStyleProvider";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <MantineProvider>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </MantineProvider>
  );
};

export default trpc.withTRPC(MyApp);
