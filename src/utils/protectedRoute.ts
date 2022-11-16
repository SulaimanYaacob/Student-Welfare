import { getSession, GetSessionParams } from "next-auth/react";

export default async function getServerSideProps(
  ctx: GetSessionParams | undefined
) {
  const session = await getSession(ctx);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
