import Head from "next/head";
import { useState } from "react";

import { useLogin } from "../hooks/useLogin";

// import { useRouter } from "next/router";
import Link from "next/link";
import { useAuthContext } from "../hooks/useAuthContext";
import Layout from "../components/Layout";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  const { user, authIsReady } = useAuthContext();
  // const router = useRouter();
  // user && router.push("/");

  return (
    <Layout>
      <div className="flex flex-col items-center mt-8">
        {/* <h1 className="text-xl text-gray font-bold tracking-wide select-none cursor-pointer pb-[2px] mr-4">
          Eshop<span className="text-yellow-300"> </span>
        </h1> */}

        <form
          className="flex-none h-[23rem] max-w-sm w-80 my-10 bg-whie mx-auto p-5 border shadow rounded text-slate-600"
          onSubmit={submitHandler}
        >
          <h2 className="text-xl font-semibold ">Login</h2>

          <label className="block my-8 mx-auto">
            <input
              className="py-2 px-1 text-md h-8 border-gray-300  border min-w-full rounded focus:border-gray-500  outline-none"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </label>

          <label className="block my-8 mx-auto">
            <input
              className="py-2 px-1 text-md h-8 border-gray-300  border min-w-full rounded focus:border-gray-500  outline-none"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </label>

          {isPending && (
            <button className="btn w-full" disabled>
              Loading ...
            </button>
          )}
          {!isPending && <button className="btn w-full ">Login</button>}
          {error && <p>{error}</p>}
          <div className="pt-2 font-semibold text-sm hover:text-yellow-500 ">
            <Link href="/signup">Sign up for Eshop</Link>
          </div>
        </form>
      </div>
    </Layout>
  );
}
