import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navigation() {
  const router = useRouter();
  
  const navItems = [
    { name: 'Home', path: '/posts', icon: '🏠' },
    { name: 'Explore', path: '/explore', icon: '🔍' },
    { name: 'Notifications', path: '/notifications', icon: '🔔' },
    { name: 'Messages', path: '/messages', icon: '✉️' },
    { name: 'Profile', path: '/profile', icon: '👤' },
    { name: 'Settings', path: '/settings', icon: '⚙️' }
  ];
  
  return (
    <nav className="fixed h-full w-72 p-4 bg-black border-r border-gray-800 hidden md:block">
      {/* Logo */}
      <div className="mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8 text-[#1DA1F2] fill-current">
          <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
        </svg>
      </div>
      
      {/* Navigation Links */}
      <ul className="space-y-1">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link href={item.path} className={`flex items-center p-3 text-xl rounded-full hover:bg-gray-800 transition-colors ${
              router.pathname === item.path ? 'font-bold' : 'font-normal'
            }`}>
              <span className="mr-4 text-xl">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      
      {/* Post Button */}
      <div className="mt-8">
        <button className="w-full bg-[#1DA1F2] hover:bg-[#1a91da] text-white rounded-full py-3 px-4 font-bold transition-colors">
          Post
        </button>
      </div>
      
      {/* User Profile */}
      <div className="absolute bottom-4 w-64">
        <div className="flex items-center p-3 rounded-full hover:bg-gray-800 cursor-pointer">
          <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold mr-3">
            U
          </div>
          <div className="flex-1">
            <p className="font-bold text-white">Username</p>
            <p className="text-gray-500 text-sm">@username</p>
          </div>
          <div className="text-gray-500">•••</div>
        </div>
      </div>
    </nav>
  );
} 