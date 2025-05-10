import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { signUp } from '../State/Authentication/Action';
import { useNavigate } from 'react-router';

const SignUp = ({ onClose, onSwitchToSignIn }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    mobileNo: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(signUp(formData, navigate));
    setFormData({ fullName: '', email: '', password: '', mobileNo: '' }); // optional reset
    onClose(); // close modal on success
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md relative"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-400 hover:text-red-600 text-xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold mb-6 text-center text-red-600">Create Your Account</h2>
        
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            name="fullName"
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 text-black"
            value={formData.fullName}
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 text-black"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 text-black"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            name="mobileNo"
            type="tel"
            placeholder="Mobile Number"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 text-black"
            value={formData.mobileNo}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-all duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <button onClick={onSwitchToSignIn} className="text-red-500 hover:underline font-medium">
            Sign In
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default SignUp;