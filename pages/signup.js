import Link from "next/link";
import { useState } from "react";
import Layout from "../components/Layout";
import { useSignup } from "../hooks/useSignup";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { signup, isPending, error } = useSignup();

  const submitHandler = (e) => {
    e.preventDefault();
    signup(email, password, displayName);
  };

  return (
    <Layout>
      <div className="flex items-center justify-center mt-6  ">
        <form
          className=" h-[27rem] max-w-sm w-80  p-5 border shadow rounded text-slate-600"
          onSubmit={submitHandler}
        >
          <h2 className="text-xl font-semibold ">Signup</h2>

          <label className="block my-2 mx-auto">
            <span className="block mb-1 text-sm"> Email:</span>
            <input
              className=" mb-2 py-2 px-1 text-md h-8 border-gray-300  border min-w-full rounded focus:border-gray-500  outline-none"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="block mx-auto">
            <span className="block mb-1 text-sm"> Password</span>
            <input
              className=" mb-2 py-2 px-1 text-md h-8 border-gray-300  border min-w-full rounded focus:border-gray-500  outline-none"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <label className="block my-2 mx-auto">
            <span className="block mb-1 text-sm"> Display name</span>
            <input
              className=" mb-2 py-2 px-1 text-md h-8 border-gray-300  border min-w-full rounded focus:border-gray-500  outline-none"
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              required
            />
          </label>

          {!isPending && <button className="btn">sign up</button>}
          {isPending && (
            <button className="btn" disabled>
              loading
            </button>
          )}
          {error && <p>{error}</p>}
          <div className="pt-2 font-semibold text-sm hover:text-emerald-700/50 text-[#b2bc83]  inline-block mt-8">
            <Link href="/login">Already have an account?</Link>
          </div>
        </form>
      </div>
    </Layout>
  );
}
