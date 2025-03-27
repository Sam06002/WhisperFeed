import React, { useState } from 'react';
import Link from 'next/link';

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const navItems = [
    { name: 'Home', path: '/posts', icon: '🏠' },
    { name: 'Explore', path: '/explore', icon: '🔍' },
    { name: 'Notifications', path: '/notifications', icon: '🔔' },
    { name: 'Messages', path: '/messages', icon: '✉️' },
    { name: 'Profile', path: '/profile', icon: '👤' },
    { name: 'Settings', path: '/settings', icon: '⚙️' }
  ];
  
  return (
    <div className="md:hidden">
      {/* Header Bar */}
      <div className="fixed top-0 left-0 right-0 h-14 bg-black border-b border-gray-800 flex items-center justify-between px-4 z-50">
        {/* Menu Button */}
        <button onClick={() => setMenuOpen(true)} className="p-2">
          <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold">
            U
          </div>
        </button>
        
        {/* Logo */}
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-[#1DA1F2] fill-current">
            <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
          </svg>
        </div>
        
        {/* Compose Button */}
        <button className="p-2 w-10 h-10 flex items-center justify-center rounded-full bg-[#1DA1F2]">
          <span className="text-xl">+</span>
        </button>
      </div>
      
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50" onClick={() => setMenuOpen(false)}>
          <div className="w-3/4 max-w-xs h-full bg-black border-r border-gray-800 p-4" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button className="mb-6" onClick={() => setMenuOpen(false)}>
              <span className="text-xl">✕</span>
            </button>
            
            {/* Navigation Links */}
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link href={item.path} className="flex items-center p-2 text-lg" onClick={() => setMenuOpen(false)}>
                    <span className="mr-4 text-xl">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            
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
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Bottom Tabs (Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 h-14 bg-black border-t border-gray-800 flex justify-around items-center z-40">
        {navItems.slice(0, 5).map((item) => (
          <Link href={item.path} key={item.path} className="flex-1 flex justify-center items-center h-full">
            <span className="text-xl">{item.icon}</span>
          </Link>
        ))}
      </div>
    </div>
  );
} 