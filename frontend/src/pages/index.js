import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import ComposePost from '../components/ComposePost';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated data for demo purposes
    setTimeout(() => {
      setPosts([
        {
          id: 1,
          content: "Just discovered a new privacy tool that completely hides your digital footprint. Game changer for anonymous browsing!",
          createdAt: new Date(Date.now() - 1000 * 60 * 5).toISOString(), // 5 minutes ago
          upvotes: 24,
          downvotes: 3,
          comments: [{ id: 1 }, { id: 2 }]
        },
        {
          id: 2,
          content: "Anyone else notice how social media makes you feel more isolated the more you use it? The irony is not lost on me.",
          createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 minutes ago
          upvotes: 56,
          downvotes: 2,
          comments: [{ id: 3 }, { id: 4 }, { id: 5 }]
        },
        {
          id: 3,
          content: "Working on a side project that I'm really excited about, but can't tell anyone in my real life. Feels good to at least share it here anonymously.",
          createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
          upvotes: 129,
          downvotes: 0,
          comments: []
        },
        {
          id: 4,
          content: "Hot take: most crypto projects are just Ponzi schemes with extra steps.",
          createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
          upvotes: 87,
          downvotes: 32,
          comments: [{ id: 6 }, { id: 7 }]
        },
        {
          id: 5,
          content: "I finally stood up to my toxic boss today. My hands are still shaking but it felt amazing!",
          createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(), // 12 hours ago
          upvotes: 215,
          downvotes: 1,
          comments: [{ id: 8 }, { id: 9 }, { id: 10 }]
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-[#1A1A1A] flex">
      {/* Navigation sidebar */}
      <Navigation />
      
      {/* Main content */}
      <main className="ml-16 md:ml-64 flex-1 min-h-screen">
        <div className="max-w-[600px] mx-auto py-4 px-4">
          <h1 className="text-xl font-bold text-white mb-4">Home</h1>
          
          <ComposePost />
          
          {loading ? (
            <div className="text-center py-10">
              <div className="inline-block w-8 h-8 border-4 border-[#1DA1F2] border-t-transparent rounded-full animate-spin"></div>
              <p className="text-white mt-2">Loading posts...</p>
            </div>
          ) : (
            <div className="mt-4 space-y-4">
              {posts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
              
              {posts.length === 0 && (
                <div className="text-center py-10">
                  <p className="text-white">No posts yet. Be the first to share something!</p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
} 