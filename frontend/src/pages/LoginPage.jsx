import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-10 rounded-xl shadow-md w-full max-w-sm flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold text-white text-center mb-6">
          Login to ReWear
        </h2>

        <form className="w-full flex flex-col space-y-4">
          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-300 mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="p-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-300 mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="p-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-center text-sm text-gray-400 mt-4">
          Don’t have an account?
          <Link to="/signup" className="text-blue-500 hover:underline ml-1">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
