import React from 'react';

const SignupPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Create Account</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input type="text" placeholder="Full Name" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input type="email" placeholder="you@example.com" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input type="password" placeholder="••••••••" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md">Sign Up</button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
