import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <div className="h-screen flex flex-col lg:flex-row">
        {/* Left Section - X Logo */}
        <div className="flex-1 lg:flex items-center justify-center hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 1000 1000" className="text-white">
            <path fill="currentColor" d="M591.529 115.63H734.393L480.701 406.952L783.352 884.37H566.725L380.857 591.897L167.352 884.37H24.441L297.165 568.383L10 115.63H232.631L398.492 380.212L591.529 115.63ZM602.663 797.351H667.133L195.315 198.332H125.759L602.663 797.351Z"/>
          </svg>
        </div>

        {/* Right Section - Content and Actions */}
        <div className="flex-1 flex flex-col justify-center p-8 lg:p-12">
          <div className="lg:max-w-md">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-12 w-12 text-[#1DA1F2] fill-current mb-8 lg:hidden">
              <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
            </svg>
            
            <h1 className="text-5xl font-bold text-white mb-6">
              Happening now
            </h1>
            <h2 className="text-3xl font-bold text-white mb-8">
              Join WhisperFeed today.
            </h2>
            
            <div className="space-y-3">
              {/* Google Sign Up Button */}
              <button className="w-full flex justify-center items-center py-2.5 px-4 border border-gray-700 rounded-full shadow-sm text-base font-medium text-white bg-black hover:bg-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"/>
                  <path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z"/>
                  <path fill="#4A90E2" d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z"/>
                  <path fill="#FBBC05" d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z"/>
                </svg>
                Sign up with Google
              </button>
              
              {/* Apple Sign Up Button */}
              <button className="w-full flex justify-center items-center py-2.5 px-4 border border-gray-700 rounded-full shadow-sm text-base font-medium text-white bg-black hover:bg-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 384 512">
                  <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
                Sign up with Apple
              </button>
              
              <div className="relative my-3">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-black text-gray-400">or</span>
                </div>
              </div>
              
              <Link href="/register">
                <button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-[#1DA1F2] hover:bg-[#1a91da] focus:outline-none">
                  Create account
                </button>
              </Link>
              
              <p className="text-xs text-gray-500 mt-2">
                By signing up, you agree to the <a href="#" className="text-[#1DA1F2]">Terms of Service</a> and <a href="#" className="text-[#1DA1F2]">Privacy Policy</a>, including <a href="#" className="text-[#1DA1F2]">Cookie Use</a>.
              </p>
              
              <div className="mt-8">
                <h3 className="text-gray-300 font-bold mb-4">Already have an account?</h3>
                <Link href="/login">
                  <button className="w-full flex justify-center py-3 px-4 border border-gray-700 rounded-full shadow-sm text-base font-medium text-[#1DA1F2] bg-transparent hover:bg-gray-900">
                    Sign in
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 