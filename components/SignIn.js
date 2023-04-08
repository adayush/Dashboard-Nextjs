import Image from "next/image";
import { signIn } from "next-auth/react";

export function SignIn() {

  return (
    <div className="grid gap-5 p-4 m-auto max-w-md">
      <div>
        <h2 className="text-4xl font-bold">Sign In</h2>
        <p>Sign in to your account</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <button onClick={() => signIn("google", { callbackUrl: '/' })} className="px-4 py-1 bg-white rounded-lg">
          <Image
            src="/google.png"
            alt="Google logo"
            width="15"
            height="15"
            className="inline mr-2"
          />
          <p className="inline text-gray-500 hover:text-black text-sm">Sign in with Google</p>
        </button>
        <button disabled className="px-4 py-1 bg-white rounded-lg">
          <Image
            src="/apple.png"
            alt="Apple logo"
            width="15"
            height="15"
            className="inline mr-2"
          />
          <p className="inline text-gray-500 text-sm">Sign in with Apple</p>
        </button>
      </div>
      <div>
        <form className="flex flex-col gap-4 justify-center bg-white rounded-lg p-6 [&>div>*]:block [&>div>*]:w-full">
          <div>
            <label htmlFor="email">Email address</label>
            <input
              className="rounded-lg my-1 p-2 bg-[var(--bg-color)]"
              id="email"
              type="email"
            ></input>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              className="rounded-lg my-1 p-2 bg-[var(--bg-color)]"
              id="password"
              type="password"
            ></input>
          </div>
          <a className="text-blue-500">Forgot password?</a>
          <button
            type="submit"
            className="w-full bg-black text-white rounded-lg py-2 font-sans font-medium"
          >
            Sign In
          </button>
        </form>
      </div>
      <div>
        <p className="opacity-70 text-center text-gray">
          Don&apos;t have an account? <a className="text-blue-500">Register here</a>
        </p>
      </div>
    </div>
  );
}
