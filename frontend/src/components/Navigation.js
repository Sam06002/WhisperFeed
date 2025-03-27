import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navigation() {
  const router = useRouter();
  
  const navItems = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'Messages', path: '/messages', icon: '✉️' }
  ];
  
  return (
    <nav className="fixed top-0 left-0 w-16 md:w-64 h-full bg-[#252526] border-r border-[#555] p-4 flex flex-col items-center md:items-start">
      {/* Logo */}
      <div className="text-2xl font-bold text-[#1DA1F2] mb-8">WF</div>
      
      {/* Navigation Links */}
      <ul className="space-y-6">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link href={item.path} className={`flex items-center p-2 text-white hover:bg-[#333] rounded-full transition-colors ${
              router.pathname === item.path ? 'font-bold' : 'font-normal'
            }`}>
              <span className="text-xl md:mr-3">{item.icon}</span>
              <span className="hidden md:block">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      
      {/* Post Button */}
      <div className="mt-8">
        <Link href="/">
          <button className="w-full bg-[#1DA1F2] hover:bg-[#1a91da] text-white rounded-full py-3 px-4 font-bold transition-colors">
            <span className="hidden md:inline">Post</span>
            <span className="inline md:hidden">+</span>
          </button>
        </Link>
      </div>
      
      {/* User Profile */}
      <div className="absolute bottom-4 w-full md:w-56 flex justify-center md:justify-start">
        <div className="flex items-center p-2 rounded-full hover:bg-[#333] cursor-pointer">
          <div className="h-8 w-8 rounded-full bg-[#333] flex items-center justify-center text-white font-bold mr-3">
            A
          </div>
          <div className="hidden md:block">
            <p className="font-medium text-white text-sm">Anonymous</p>
          </div>
        </div>
      </div>
    </nav>
  );
} 