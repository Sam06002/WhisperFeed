import React from 'react';

export default function Comment({ comment }) {
  const { content, author, createdAt, likes } = comment;
  const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
      <div className="flex justify-between items-start">
        <div className="flex items-center">
          <div className="text-sm font-medium text-gray-900">
            {author.username}
          </div>
          <div className="text-sm text-gray-500 ml-2">
            {formattedDate}
          </div>
        </div>
        <div className="text-sm text-gray-500">
          {likes.length} likes
        </div>
      </div>
      <div className="mt-2 text-sm text-gray-700">
        {content}
      </div>
      <div className="mt-4 flex space-x-4">
        <button className="text-sm text-gray-500 hover:text-gray-700">
          Like
        </button>
        <button className="text-sm text-gray-500 hover:text-gray-700">
          Reply
        </button>
      </div>
    </div>
  );
} 