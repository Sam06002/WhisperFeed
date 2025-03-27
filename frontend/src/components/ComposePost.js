import { useState } from 'react';

export default function ComposePost() {
  const [content, setContent] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(true);
  
  const handlePost = async () => {
    if (!content.trim()) return;
    
    try {
      // Add API call to create post
      console.log('Posting:', { content, isAnonymous });
      
      // Reset form after successful post
      setContent('');
    } catch (error) {
      console.error('Error posting:', error);
    }
  };
  
  return (
    <div className="p-4 bg-[#252526] rounded-lg shadow-lg">
      <div className="flex items-start">
        <div className="mr-3">
          <div className="h-10 w-10 rounded-full bg-[#333] flex items-center justify-center text-white font-bold">
            A
          </div>
        </div>
        <div className="flex-grow">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's happening?"
            className="w-full p-3 bg-transparent text-white placeholder-gray-500 resize-none border-none focus:outline-none text-xl"
            rows="3"
          />
          
          <div className="border-t border-[#555] pt-3 mt-2 flex items-center justify-between">
            <label className="flex items-center text-[#1DA1F2] cursor-pointer">
              <input
                type="checkbox"
                checked={isAnonymous}
                onChange={() => setIsAnonymous(!isAnonymous)}
                className="sr-only"
              />
              <div className={`w-10 h-5 ${isAnonymous ? 'bg-[#1DA1F2]' : 'bg-[#555]'} rounded-full mr-2 transition-colors relative`}>
                <div className={`absolute w-4 h-4 rounded-full bg-white transition-transform top-0.5 ${isAnonymous ? 'translate-x-5' : 'translate-x-0.5'}`}></div>
              </div>
              <span className="text-sm">Anonymous</span>
            </label>
            
            <button
              onClick={handlePost}
              disabled={!content.trim()}
              className={`py-2 px-4 rounded-full font-semibold ${
                content.trim()
                  ? 'bg-[#1DA1F2] text-white hover:bg-[#1A91DA]'
                  : 'bg-[#1DA1F2]/50 text-gray-300 cursor-not-allowed'
              } transition`}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 