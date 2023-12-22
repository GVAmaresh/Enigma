"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Login() {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (login) {
      if (!user.email || !user.password)
        return alert("Please fill in both username and password fields.");
    }
  }, [login]);

  return (
    <>
      <div className="shapes-container h-100 w-75">
        <div className="container pt-25 h-55 bg-slate-700 text-center w-4/5 rounded-xl">
          <div className="login-box p-8">
            <p className="mb-10 text-neutral-50 font-bold font-sans text-heading1-bold">
              Welcome Back!
            </p>
            <form className="flex flex-col">
              <div className="mb-10">
                <input
                  type="text"
                  className="w-2/5 m-3 p-2 bg-gray-300 rounded"
                  id="username"
                  placeholder="Username"
                  onChange={(e) =>
                    setUser((user) => ({ ...user, email: e.target.value }))
                  }
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  id="password"
                  className="w-2/5 p-2 bg-gray-300 rounded"
                  placeholder="Password"
                  onChange={(e) =>
                    setUser((user) => ({ ...user, password: e.target.value }))
                  }
                />
              </div>
              <div className="">
                <button
                  type="button"
                  id="loginButton"
                  onClick={() => setLogin(true)}
                  className="p-2 mb-5 mt-2 bg-teal-700 text-white font-bold cursor-pointer transition duration-300 ease-in-out hover:bg-teal-900 text-heading3-bold rounded-md"
                >
                  Login
                </button>
              </div>
            </form>
            <p className="create-account mt-5 text-white">
              Don't have an account?{" "}
              <Link href={"/signup"} key={"login"}>
                <span className="text-teal-600 hover:underline">
                  Create New Account
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
