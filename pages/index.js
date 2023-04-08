import Head from "next/head";
import { signOut, useSession } from "next-auth/react";

import { Nav, Dashboard } from "@/components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home({ data, stats }) {
  const { data: session } = useSession();
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (!session) {
      router.push("/login");
    } else {
      setLoggedIn(true);
    }
  }, [session]);

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
  let res = await fetch("https://6430098ec26d69edc8895f8e.mockapi.io/data");
  const data = await res.json();

  res = await fetch("https://6430098ec26d69edc8895f8e.mockapi.io/stats");
  const stats = await res.json();

  return {
    props: {
      data,
      stats
    },
    revalidate: 10,
  };
}
