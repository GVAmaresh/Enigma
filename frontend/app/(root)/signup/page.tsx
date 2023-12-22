"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

// Signup component
export default function Signup() {
  const [signup, setSignup] = useState(false);
  const [signupUser, setSignupUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    role: "", // Added role field
  });

  useEffect(() => {
    if (signup) {
      const { email, password, confirmPassword, role } = signupUser;
      if (!email || !password || !confirmPassword || !role) {
        return alert("Please fill in all fields.");
      }
      if (password !== confirmPassword) {
        return alert("Passwords do not match.");
      }
    }
  }, [signup, signupUser]);

  return (
    <>
      <div className="shapes-container h-100 w-75">
        <div className="container pt-25 h-55 bg-slate-700 text-center w-4/5 rounded-xl">
          <div className="login-box p-8">
            <p className="mb-10 text-neutral-50 font-bold font-sans text-heading1-bold">
              Create an Account
            </p>
            <form className="flex flex-col">
              <div className="mb-5">
                <input
                  type="text"
                  className="w-2/5 p-2 bg-gray-300 rounded"
                  id="email"
                  placeholder="Email"
                  onChange={(e) =>
                    setSignupUser((user) => ({
                      ...user,
                      email: e.target.value,
                    }))
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
                    setSignupUser((user) => ({
                      ...user,
                      password: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  id="confirmPassword"
                  className="w-2/5 p-2 bg-gray-300 rounded"
                  placeholder="Confirm Password"
                  onChange={(e) =>
                    setSignupUser((user) => ({
                      ...user,
                      confirmPassword: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="mb-5 flex flex-row items-center text-center ml-44 text-heading4-medium">
                <div className="">
                  <label className="text-white mr-3 ">Role:</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="teacher"
                    name="role"
                    value="teacher"
                    onChange={(e) =>
                      setSignupUser((user) => ({
                        ...user,
                        role: e.target.value,
                      }))
                    }
                    className="mr-2"
                  />
                  <label htmlFor="teacher" className="text-white mr-4">
                    Teacher
                  </label>
                  <input
                    type="radio"
                    id="student"
                    name="role"
                    value="student"
                    onChange={(e) =>
                      setSignupUser((user) => ({
                        ...user,
                        role: e.target.value,
                      }))
                    }
                    className="mr-2"
                  />
                  <label htmlFor="student" className="text-white">
                    Student
                  </label>
                </div>
              </div>
              <div className="">
                <button
                  type="button"
                  id="signupButton"
                  onClick={() => setSignup(true)}
                  className="p-2 mb-5 mt-2 bg-teal-700 text-white font-bold cursor-pointer transition duration-300 ease-in-out hover:bg-teal-900 text-heading3-bold rounded-md"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <p className="create-account mt-5 text-white">
              Already have an account?{" "}
              <Link href={"/login"} key={"login"}>
                <span className="text-teal-600 hover:underline">Login</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
