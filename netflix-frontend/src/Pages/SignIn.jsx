
import React from 'react';
import { motion } from 'framer-motion';

const SignIn = ({ onClose, onSwitchToSignUp }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md relative"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-400 hover:text-red-600 text-xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold mb-6 text-center text-red-600">Sign In</h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 text-black"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 text-black"
          />
          <button className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-all duration-300">
            Sign In
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <button onClick={onSwitchToSignUp} className="text-red-500 hover:underline font-medium">
            Sign Up
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default SignIn;