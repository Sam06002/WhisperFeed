import React, { useState, useEffect } from 'react';
import Post from '../components/Post';
import ComposePost from '../components/ComposePost';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API fetch with placeholder data
    setTimeout(() => {
      setPosts([
        {
          id: '1',
          title: 'Getting Started with WhisperFeed',
          content: 'Welcome to WhisperFeed! This platform allows you to share your thoughts and connect with others. Start posting today!',
          author: {
            id: '1',
            username: 'sarah_dev'
          },
          createdAt: new Date().toISOString(),
          likes: []
        },
        {
          id: '2',
          title: '',
          content: 'Just deployed a new feature on our platform. Check it out and let me know what you think! #coding #webdev',
          author: {
            id: '2',
            username: 'techguru'
          },
          createdAt: new Date(Date.now() - 3600000).toISOString(),
          likes: ['1', '3']
        },
        {
          id: '3',
          title: '',
          content: 'The weather is perfect today for some outdoor coding. Anyone else like working outside when it's nice?',
          author: {
            id: '3',
            username: 'codeoutdoors'
          },
          createdAt: new Date(Date.now() - 7200000).toISOString(),
          likes: ['1', '2', '4']
        },
        {
          id: '4',
          title: 'Weekly Tech Roundup',
          content: 'This week in tech: AI advancements, new JavaScript frameworks, and the continued rise of React. What tech news are you following?',
          author: {
            id: '4',
            username: 'tech_weekly'
          },
          createdAt: new Date(Date.now() - 86400000).toISOString(),
          likes: ['2']
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {/* Header */}
      <div className="sticky top-0 z-10 bg-black bg-opacity-70 backdrop-blur-sm p-4 border-b border-gray-800">
        <h1 className="text-xl font-bold">Home</h1>
      </div>
      
      {/* Compose Post */}
      <ComposePost />
      
      {/* Posts Feed */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#1DA1F2]"></div>
        </div>
      ) : (
        <div>
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
} 