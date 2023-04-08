import Head from "next/head";
import { useSession } from 'next-auth/react'
import { useRouter } from "next/router";

import { SignIn } from "@/components";


export default function LoginPage() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    // redirect to /
    router.push("/")
    return
  }
  return (
    <>
      <Head>
        <title>Login to Board</title>
        <meta name="description" content="Login page" />
      </Head>
      <main className="flex flex-col md:flex-row h-[100vh]">
        <div className="flex w-full md:w-1/3 bg-black">
          <h1 className="m-auto text-5xl py-4 font-semibold text-white">Board.</h1>
        </div>
        <div className="m-auto md:flex w-[90%] md:w-2/3">
          <SignIn />
        </div>
      </main>
    </>
  );
}
