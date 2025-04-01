import axios from "axios";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import {
  IoEyeOffOutline,
  IoEyeOutline,
  IoRocketOutline,
} from "react-icons/io5";
import { MdLockOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [data, setData] = useState({ identify: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [accessDenied, setAccessDenied] = useState(false);
  const passInp = useRef(null);

  const handleInp = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const loginUser = (e) => {
    e.preventDefault();
   if (data.identify === "") {
    return toast.warn("Enter your username or email.");
  } else if (data.password === "") {
      return toast.warn("Enter your password.");
  }

    axios
      .post("http://localhost:3000/api/auth/login", data)
      .then((res) => {
        toast.success(res.data.message);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("uid", res.data.user.id);
        setLoginSuccess(true);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
        if (err.response.data.message === "Incorrect password.") {
          setAccessDenied(true);
        }
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoginSuccess(true);
    }
  }, []);

  return (
    <>
      <ToastContainer position="top-right" />

      <div className="relative flex min-h-screen items-center justify-center overflow-hidden p-4">
        {/* Background base */}
        <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>

        {/* Animated gradient overlay */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-60"></div>

        {/* Glowing orbs */}
        <div className="fixed left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]"></div>
        <div className="fixed bottom-1/4 right-1/4 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-primary/30 blur-[120px]"></div>

        {/* Subtle grid pattern */}
        <div className="fixed inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-[0.02]"></div>
        {/* Content */}
        <div className="relative z-10">
          {loginSuccess ? (
            <div className="relative mx-auto w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl">
              {/* Background with gradient */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-primary/20 to-slate-900">
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl"></div>

              {/* Card border with gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/50 via-primary/20 to-primary/50 p-[1px]"></div>

              {/* Card content */}
              <div className="relative z-10 p-8">
                <div className="flex items-center gap-x-4">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary p-2">
                    <img
                      src="/logo.png"
                      width={40}
                      height={40}
                      alt="Logo"
                      className="h-8 w-8 rounded-full object-contain"
                    />
                    <div className="absolute inset-0 -z-10 rounded-xl bg-primary/40 blur-md"></div>
                  </div>
                  <h1 className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-2xl font-bold text-transparent">
                    FlyHigh
                  </h1>
                </div>

                <div className="mt-3">
                  <p className="text-slate-400">
                    Welcome to FlyHigh – Where Shahbaz Ansari’s Dreams Take
                    Flight.
                  </p>
                </div>

                {/* Welcome section with card effect */}
                <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-primary/20 blur-md"></div>
                      <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary/80 to-primary/60">
                        <IoRocketOutline className="h-7 w-7 text-white" />
                      </div>
                    </div>
                    <div>
                      <h1 className="text-xl font-semibold text-white">
                        Welcome Back, Shahbaz Ansari!
                      </h1>
                      <p className="mt-1 text-slate-400">
                        Enjoy your journey and keep going! 🚀
                      </p>
                    </div>
                  </div>
                </div>

                {/* Button without rotation */}
                <Link to="/dashboard">
                  <button className="group relative mt-6 w-full overflow-hidden rounded-xl bg-gradient-to-r from-primary via-primary/80 to-primary p-px font-medium text-white shadow-lg transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary transition-all duration-300 group-hover:opacity-0"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary to-primary/80 opacity-0 transition-all duration-300 group-hover:opacity-100"></div>
                    <div className="relative flex items-center justify-center gap-2 rounded-xl bg-slate-900/50 px-4 py-3 backdrop-blur-sm transition-all duration-300 group-hover:bg-slate-800/30">
                      <span>Go to Dashboard</span>
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          ) : accessDenied ? (
            <div className="relative mx-auto w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl">
              {/* Background with gradient */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-primary/20 to-slate-900">
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl"></div>

              {/* Card border with gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/50 via-primary/20 to-primary/50 p-[1px]"></div>

              {/* Card content */}
              <div className="relative z-10 p-8">
                <div className="flex items-center gap-x-4">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary p-2">
                    <img
                      src="/logo.png"
                      width={40}
                      height={40}
                      alt="Logo"
                      className="h-8 w-8 rounded-full object-contain"
                    />
                    <div className="absolute inset-0 -z-10 rounded-xl bg-primary/40 blur-md"></div>
                  </div>
                  <h1 className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-2xl font-bold text-transparent">
                    FlyHigh
                  </h1>
                </div>

                <div className="mt-3">
                  <p className="text-slate-400">
                    Welcome to FlyHigh – Where Shahbaz Ansari’s Dreams Take
                    Flight.
                  </p>
                </div>

                {/* Welcome section with card effect */}
                <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-primary/20 blur-md"></div>
                      <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-red-600/80 to-red-600/60">
                        <MdLockOutline className="h-7 w-7 text-white" />
                      </div>
                    </div>
                    <div>
                      <h1 className="text-xl font-semibold text-white">
                        Access Denied
                      </h1>
                      <p className="mt-1 text-slate-400">
                        Only Shahbaz Ansari can access this.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Button without rotation */}
                <button
                  onClick={() => window.close()}
                  className="group relative mt-6 w-full overflow-hidden rounded-xl bg-gradient-to-r from-primary via-primary/80 to-primary p-px font-medium text-white shadow-lg transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary transition-all duration-300 group-hover:opacity-0"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary to-primary/80 opacity-0 transition-all duration-300 group-hover:opacity-100"></div>
                  <div className="relative flex items-center justify-center gap-2 rounded-xl bg-slate-900/50 px-4 py-3 backdrop-blur-sm transition-all duration-300 group-hover:bg-slate-800/30">
                    <span>Close & Exit</span>
                  </div>
                </button>
              </div>
            </div>
          ) : (
            <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl shadow-2xl">
              {/* Background with gradient */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-primary/20 to-slate-900">
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl"></div>

              {/* Card border with gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/50 via-primary/20 to-primary/50 p-[1px]"></div>

              {/* Card content */}
              <div className="relative z-10 p-8">
                {/* Logo Section */}
                <div className="flex items-center gap-x-4">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary p-2">
                    <img
                      src="/logo.png"
                      width={40}
                      height={40}
                      alt="Logo"
                      className="h-8 w-8 rounded-full object-contain"
                    />
                    <div className="absolute inset-0 -z-10 rounded-xl bg-primary/40 blur-md"></div>
                  </div>
                  <h1 className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-2xl font-bold text-transparent">
                    FlyHigh
                  </h1>
                </div>

                <div className="mt-3">
                  <p className="text-slate-400">
                    Welcome to FlyHigh – Where Shahbaz Ansari’s Dreams Take
                    Flight.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={loginUser} className="mt-6 space-y-5">
                  <div className="space-y-1.5">
                    <label
                      className="block text-sm font-medium text-slate-300"
                      htmlFor="username"
                    >
                      Email or username
                    </label>
                    <div className="relative">
                      <input
                        className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white outline-none transition-all placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary"
                        type="text"
                        name="identify"
                        value={data.identify}
                        onChange={handleInp}
                        placeholder="Enter your email or username"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-transparent"></div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      className="block text-sm font-medium text-slate-300"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        ref={passInp}
                        className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white outline-none transition-all placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary"
                        type={showPass ? "text" : "password"}
                        name="password"
                        value={data.password}
                        onChange={handleInp}
                        placeholder="Enter your password"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-transparent"></div>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        {showPass ? (
                          <IoEyeOutline
                            onClick={() => setShowPass((prev) => !prev)}
                            className="h-5 w-5 cursor-pointer text-slate-400 transition-colors hover:text-primary"
                          />
                        ) : (
                          <IoEyeOffOutline
                            onClick={() => setShowPass((prev) => !prev)}
                            className="h-5 w-5 cursor-pointer text-slate-400 transition-colors hover:text-primary"
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <Link
                      href="#"
                      className="text-sm text-primary transition-colors hover:text-primary/80 hover:underline"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <button
                    className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-primary via-primary/80 to-primary p-px font-medium text-white shadow-lg transition-all duration-300"
                    type="submit"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary transition-all duration-300 group-hover:opacity-0"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary to-primary/80 opacity-0 transition-all duration-300 group-hover:opacity-100"></div>
                    <div className="relative flex items-center justify-center gap-2 rounded-xl bg-slate-900/50 px-4 py-3 backdrop-blur-sm transition-all duration-300 group-hover:bg-slate-800/30">
                      Login
                    </div>
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
