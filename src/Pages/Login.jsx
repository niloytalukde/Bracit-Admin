import logo from "../assets/logo.svg";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={logo}
            alt="BRAC Logo"
            className="w-20 h-20 mb-2"
          />
          <h1 className="text-lg font-semibold text-gray-700">BracU Central Login</h1>
        </div>

        {/* Form */}
        <h2 className="text-xl font-bold mb-4 text-gray-800">Sign in to your account</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Username or email</label>
            <input
              type="text"
              placeholder="Enter username or email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring focus:ring-blue-300"
              />
              <button
                type="button"
                className="absolute right-3 top-2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* reCAPTCHA Placeholder */}
          <div className="border p-4 rounded-md flex items-center justify-between">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              <span>I'm not a robot</span>
            </label>
            <img
              src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
              alt="captcha"
              className="w-6 h-6"
            />
          </div>

          <div className="text-right">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-400 text-white font-semibold py-2 rounded-md hover:bg-blue-500 transition"
          >
            Sign In
          </button>

          <div className="text-center text-gray-500">Or sign in with</div>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Sign in with Google
          </button>
        </form>
      </div>
    </div>
  );
}
