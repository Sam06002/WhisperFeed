import React, { useState } from 'react';

export default function ComposePost() {
  const [content, setContent] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleFocus = () => {
    setIsExpanded(true);
  };
  
  const handleSubmit = () => {
    if (content.trim()) {
      console.log('Post submitted:', content);
      setContent('');
      setIsExpanded(false);
    }
  };
  
  return (
    <div className="border-b border-gray-800 p-4">
      <div className="flex">
        {/* User Avatar */}
        <div className="mr-4">
          <div className="h-12 w-12 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold">
            U
          </div>
        </div>
        
        {/* Compose Area */}
        <div className="flex-1">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onFocus={handleFocus}
            placeholder="What's happening?"
            className="w-full bg-transparent text-white text-xl placeholder-gray-500 border-none focus:outline-none resize-none"
            rows={isExpanded ? 4 : 2}
          />
          
          {isExpanded && (
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-800">
              {/* Media Icons */}
              <div className="flex space-x-4 text-[#1DA1F2]">
                <button className="hover:bg-blue-900/20 p-2 rounded-full">
                  📷
                </button>
                <button className="hover:bg-blue-900/20 p-2 rounded-full">
                  📊
                </button>
                <button className="hover:bg-blue-900/20 p-2 rounded-full">
                  😀
                </button>
                <button className="hover:bg-blue-900/20 p-2 rounded-full">
                  📅
                </button>
                <button className="hover:bg-blue-900/20 p-2 rounded-full">
                  📍
                </button>
              </div>
              
              {/* Post Button */}
              <button
                onClick={handleSubmit}
                disabled={!content.trim()}
                className={`px-4 py-1.5 rounded-full font-bold text-white ${
                  content.trim() 
                    ? 'bg-[#1DA1F2] hover:bg-[#1a91da]' 
                    : 'bg-[#1DA1F2]/50 cursor-not-allowed'
                }`}
              >
                Post
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 