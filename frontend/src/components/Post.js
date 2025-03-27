import React, { useState } from 'react';
import Link from 'next/link';

export default function Post({ post }) {
  const { id, title, content, author, createdAt, likes } = post;
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes.length);
  
  // Format date to be more Twitter-like
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHour = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHour / 24);
    
    if (diffSec < 60) return `${diffSec}s`;
    if (diffMin < 60) return `${diffMin}m`;
    if (diffHour < 24) return `${diffHour}h`;
    if (diffDay < 7) return `${diffDay}d`;
    
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
    }).format(date);
  };
  
  const handleLike = (e) => {
    e.preventDefault();
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <article className="border-b border-gray-800 p-4 hover:bg-gray-900/50 transition-colors cursor-pointer">
      <div className="flex space-x-3">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <Link href={`/profile/${author.username}`}>
            <div className="h-12 w-12 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold overflow-hidden">
              {author.username.charAt(0).toUpperCase()}
            </div>
          </Link>
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center text-sm">
            <Link href={`/profile/${author.username}`} className="font-bold text-white hover:underline">
              {author.username}
            </Link>
            <Link href={`/profile/${author.username}`} className="text-gray-500 ml-1 hover:underline">
              @{author.username}
            </Link>
            <span className="mx-1 text-gray-500">·</span>
            <Link href={`/posts/${id}`} className="text-gray-500 hover:underline">
              {formatDate(createdAt)}
            </Link>
          </div>
          
          {/* Title and Content */}
          <div className="mt-1 mb-2">
            {title && (
              <h3 className="text-base font-bold text-white mb-1">
                {title}
              </h3>
            )}
            <p className="text-white text-base whitespace-pre-wrap break-words">
              {content}
            </p>
          </div>
          
          {/* Actions */}
          <div className="mt-3 flex justify-between max-w-md">
            {/* Comment */}
            <button className="group flex items-center text-gray-500 hover:text-[#1DA1F2]">
              <div className="p-2 rounded-full group-hover:bg-blue-800/20 group-hover:text-[#1DA1F2] transition-colors">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21a9 9 0 1 0-9-9c0 1.488.36 2.891 1 4.127L3 21l4.873-1c1.236.64 2.64 1 4.127 1Z"></path>
                </svg>
              </div>
              <span className="text-xs ml-1 group-hover:text-[#1DA1F2]">
                {Math.floor(Math.random() * 20)}
              </span>
            </button>
            
            {/* Retweet */}
            <button className="group flex items-center text-gray-500 hover:text-green-500">
              <div className="p-2 rounded-full group-hover:bg-green-800/20 group-hover:text-green-500 transition-colors">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 17 L2 12 L7 7 M2 12 L16 12 M17 7 L22 12 L17 17"></path>
                </svg>
              </div>
              <span className="text-xs ml-1 group-hover:text-green-500">
                {Math.floor(Math.random() * 15)}
              </span>
            </button>
            
            {/* Like */}
            <button 
              className={`group flex items-center ${liked ? 'text-pink-600' : 'text-gray-500 hover:text-pink-600'}`}
              onClick={handleLike}
            >
              <div className={`p-2 rounded-full ${liked ? 'text-pink-600' : 'group-hover:bg-pink-800/20 group-hover:text-pink-600'} transition-colors`}>
                <svg 
                  viewBox="0 0 24 24" 
                  width="18" 
                  height="18" 
                  fill={liked ? "currentColor" : "none"} 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                </svg>
              </div>
              <span className="text-xs ml-1">
                {likeCount}
              </span>
            </button>
            
            {/* Share */}
            <button className="group flex items-center text-gray-500 hover:text-[#1DA1F2]">
              <div className="p-2 rounded-full group-hover:bg-blue-800/20 group-hover:text-[#1DA1F2] transition-colors">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
} 