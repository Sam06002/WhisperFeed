import { useState } from 'react';
import Link from 'next/link';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // Add signup logic here (e.g., API call)
    console.log({ username, password });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#1A1A1A]">
      <div className="p-6 bg-[#252526] rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-6">
          <div className="inline-block">
            <span className="text-2xl font-bold text-[#1DA1F2]">WF</span>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-white mb-6 text-center">Create your account</h1>
        
        {/* Google Sign Up Button */}
        <button className="w-full flex justify-center items-center py-2.5 px-4 border border-[#555] rounded-full shadow-sm text-base font-medium text-white bg-[#252526] hover:bg-[#333] mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 24 24">
            <path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"/>
            <path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z"/>
            <path fill="#4A90E2" d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z"/>
            <path fill="#FBBC05" d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z"/>
          </svg>
          Sign up with Google
        </button>
        
        {/* Apple Sign Up Button */}
        <button className="w-full flex justify-center items-center py-2.5 px-4 border border-[#555] rounded-full shadow-sm text-base font-medium text-white bg-[#252526] hover:bg-[#333] mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 384 512">
            <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
          </svg>
          Sign up with Apple
        </button>
        
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#555]"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-[#252526] text-gray-400">or</span>
          </div>
        </div>
        
        <form onSubmit={handleSignup}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="w-full p-3 mb-4 bg-[#333] text-white rounded-lg border border-[#555] focus:outline-none focus:border-[#1DA1F2] placeholder-gray-500"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-3 mb-4 bg-[#333] text-white rounded-lg border border-[#555] focus:outline-none focus:border-[#1DA1F2] placeholder-gray-500"
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm password"
            className="w-full p-3 mb-4 bg-[#333] text-white rounded-lg border border-[#555] focus:outline-none focus:border-[#1DA1F2] placeholder-gray-500"
          />
          
          <p className="text-gray-400 text-xs mb-4">
            By signing up, you agree to our <a href="#" className="text-[#1DA1F2]">Terms</a>, 
            <a href="#" className="text-[#1DA1F2]"> Privacy Policy</a>, and 
            <a href="#" className="text-[#1DA1F2]"> Cookie Use</a>.
          </p>
          
          <button
            type="submit"
            className="w-full py-3 bg-[#1DA1F2] text-white rounded-full font-semibold hover:bg-[#1A91DA] transition"
          >
            Sign Up
          </button>
        </form>
        
        <p className="text-gray-400 text-sm mt-6 text-center">
          Already have an account?{' '}
          <Link href="/login" className="text-[#1DA1F2] hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
} 