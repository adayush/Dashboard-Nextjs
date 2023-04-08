import Head from "next/head";
import { signOut, useSession } from "next-auth/react";

import { Nav, Dashboard } from "@/components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home({ data, stats }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (status === "unathenticated") {
      router.push("/login");
    } else if (status === "authenticated") {
      setLoggedIn(true);
    }
  }, [status]);

  if (loggedIn)
    return (
      <>
        <Head>
          <title>Board</title>
          <meta name="description" content="Dashboard" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex flex-col md:flex-row h-[100vh] p-6 gap-6 max-w-[1300px] m-auto">
          <Nav signOut={() => signOut({ callbackUrl: "/login" })} />
          <Dashboard data={data} stats={stats} />
        </main>
      </>
    );
}

export async function getStaticProps() {
  let res = await fetch(`${process.env.API_URL}/data`);
  const data = await res.json();

  res = await fetch(`${process.env.API_URL}/stats`);
  const stats = await res.json();

  return {
    props: {
      data,
      stats
    },
    revalidate: 10,
  };
}
