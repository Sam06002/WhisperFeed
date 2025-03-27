import { useState } from 'react';

export default function PostCard({ post }) {
  const [upvotes, setUpvotes] = useState(post.upvotes || 0);
  const [downvotes, setDownvotes] = useState(post.downvotes || 0);
  const [comments, setComments] = useState(post.comments?.length || 0);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [commentText, setCommentText] = useState('');

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

  const handleUpvote = (e) => {
    e.preventDefault();
    setUpvotes(upvotes + 1);
    // Add API call to save upvote
  };

  const handleDownvote = (e) => {
    e.preventDefault();
    setDownvotes(downvotes + 1);
    // Add API call to save downvote
  };

  const handleCommentClick = () => {
    setShowCommentInput(!showCommentInput);
  };

  const submitComment = () => {
    if (commentText.trim()) {
      setComments(comments + 1);
      setCommentText('');
      setShowCommentInput(false);
      // Add API call to save comment
    }
  };

  return (
    <div className="p-4 bg-[#252526] rounded-lg shadow-lg hover:bg-[#2F2F2F] transition mb-4">
      <p className="text-white mb-3 break-words">{post.content}</p>
      
      <div className="flex justify-between text-gray-400 text-sm">
        <span>{formatDate(post.createdAt)}</span>
        <div className="flex space-x-6">
          {/* Upvote */}
          <button 
            onClick={handleUpvote}
            className="flex items-center hover:text-[#1DA1F2] transition"
          >
            <span className="mr-1">↑</span>
            <span>{upvotes}</span>
          </button>
          
          {/* Downvote */}
          <button 
            onClick={handleDownvote}
            className="flex items-center hover:text-[#1DA1F2] transition"
          >
            <span className="mr-1">↓</span>
            <span>{downvotes}</span>
          </button>
          
          {/* Comment */}
          <button 
            onClick={handleCommentClick}
            className="flex items-center hover:text-[#1DA1F2] transition"
          >
            <span className="mr-1">💬</span>
            <span>{comments}</span>
          </button>
        </div>
      </div>
      
      {/* Comment input */}
      {showCommentInput && (
        <div className="mt-3">
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Write a comment..."
            className="w-full p-2 bg-[#333] text-white rounded-lg border border-[#555] focus:outline-none focus:border-[#1DA1F2] resize-none h-20"
          />
          <div className="flex justify-end mt-2">
            <button
              onClick={() => setShowCommentInput(false)}
              className="py-1 px-3 mr-2 text-white rounded-full hover:bg-[#333] transition"
            >
              Cancel
            </button>
            <button
              onClick={submitComment}
              className="py-1 px-3 bg-[#1DA1F2] text-white rounded-full font-semibold hover:bg-[#1A91DA] transition"
            >
              Comment
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 