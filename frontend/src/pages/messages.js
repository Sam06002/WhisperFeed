import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';

export default function Messages() {
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messageInput, setMessageInput] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated data for demo purposes
    setTimeout(() => {
      setConversations([
        {
          id: '1',
          name: 'Anonymous User 1',
          lastMessage: 'I completely agree with your post about social media.',
          timestamp: new Date(Date.now() - 1000 * 60 * 10).toISOString(),
          messages: [
            { id: '1a', text: 'Hey, I saw your post about privacy tools.', sender: 'them', timestamp: new Date(Date.now() - 1000 * 60 * 60).toISOString() },
            { id: '1b', text: 'Could you share more details about it?', sender: 'them', timestamp: new Date(Date.now() - 1000 * 60 * 59).toISOString() },
            { id: '1c', text: 'Sure! It\'s called PrivacyShield. It masks your IP and browsing data.', sender: 'me', timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString() },
            { id: '1d', text: 'I completely agree with your post about social media.', sender: 'them', timestamp: new Date(Date.now() - 1000 * 60 * 10).toISOString() }
          ]
        },
        {
          id: '2',
          name: 'Anonymous User 2',
          lastMessage: 'That\'s a bold claim about crypto!',
          timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
          messages: [
            { id: '2a', text: 'That\'s a bold claim about crypto!', sender: 'them', timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString() }
          ]
        },
        {
          id: '3',
          name: 'Anonymous User 3',
          lastMessage: 'Thanks for the support on my post.',
          timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
          messages: [
            { id: '3a', text: 'I really appreciated your upvote on my post.', sender: 'them', timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString() },
            { id: '3b', text: 'It was my first time sharing something so personal.', sender: 'them', timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5.5).toISOString() },
            { id: '3c', text: 'Happy to support! It resonated with me.', sender: 'me', timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5.2).toISOString() },
            { id: '3d', text: 'Thanks for the support on my post.', sender: 'them', timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString() }
          ]
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    
    if (date.toDateString() === now.toDateString()) {
      return formatTime(dateString);
    }
    
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    }
    
    return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
  };

  const handleSendMessage = () => {
    if (!messageInput.trim() || !selectedConversation) return;
    
    const newMessage = {
      id: `new-${Date.now()}`,
      text: messageInput,
      sender: 'me',
      timestamp: new Date().toISOString()
    };
    
    const updatedConversations = conversations.map(conv => {
      if (conv.id === selectedConversation.id) {
        return {
          ...conv,
          messages: [...conv.messages, newMessage],
          lastMessage: messageInput
        };
      }
      return conv;
    });
    
    setConversations(updatedConversations);
    setMessageInput('');
    
    // Find and update the selectedConversation
    const updatedSelected = updatedConversations.find(c => c.id === selectedConversation.id);
    setSelectedConversation(updatedSelected);
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] flex">
      {/* Navigation sidebar */}
      <Navigation />
      
      {/* Main content */}
      <main className="ml-16 md:ml-64 flex-1 flex min-h-screen">
        {/* Conversation list */}
        <div className="w-full md:w-1/3 border-r border-[#555] bg-[#252526]">
          <div className="p-4 border-b border-[#555]">
            <h1 className="text-xl font-bold text-white">Messages</h1>
          </div>
          
          {loading ? (
            <div className="text-center py-10">
              <div className="inline-block w-8 h-8 border-4 border-[#1DA1F2] border-t-transparent rounded-full animate-spin"></div>
              <p className="text-white mt-2">Loading conversations...</p>
            </div>
          ) : (
            <div className="overflow-y-auto h-[calc(100vh-64px)]">
              {conversations.map(conversation => (
                <button
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation)}
                  className={`w-full p-4 border-b border-[#555] flex items-start hover:bg-[#333] transition ${
                    selectedConversation?.id === conversation.id ? 'bg-[#333]' : ''
                  }`}
                >
                  <div className="h-10 w-10 rounded-full bg-[#333] flex items-center justify-center text-white font-bold flex-shrink-0">
                    {conversation.name.charAt(0)}
                  </div>
                  <div className="ml-3 text-left">
                    <div className="flex justify-between">
                      <p className="font-medium text-white">{conversation.name}</p>
                      <p className="text-gray-400 text-xs">{formatDate(conversation.timestamp)}</p>
                    </div>
                    <p className="text-gray-400 text-sm truncate">{conversation.lastMessage}</p>
                  </div>
                </button>
              ))}
              
              {conversations.length === 0 && (
                <div className="text-center py-10">
                  <p className="text-white">No conversations yet.</p>
                </div>
              )}
            </div>
          )}
        </div>
        
        {/* Message display */}
        <div className="hidden md:flex flex-1 flex-col bg-[#1A1A1A]">
          {selectedConversation ? (
            <>
              <div className="p-4 border-b border-[#555] flex items-center">
                <div className="h-8 w-8 rounded-full bg-[#333] flex items-center justify-center text-white font-bold mr-3">
                  {selectedConversation.name.charAt(0)}
                </div>
                <h2 className="text-lg font-medium text-white">{selectedConversation.name}</h2>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4">
                {selectedConversation.messages.map(message => (
                  <div
                    key={message.id}
                    className={`mb-4 flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-lg p-3 ${
                        message.sender === 'me'
                          ? 'bg-[#1DA1F2] text-white'
                          : 'bg-[#333] text-white'
                      }`}
                    >
                      <p>{message.text}</p>
                      <p className={`text-xs mt-1 ${message.sender === 'me' ? 'text-blue-100' : 'text-gray-400'}`}>
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-4 border-t border-[#555]">
                <div className="flex">
                  <input
                    type="text"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 p-3 bg-[#333] text-white rounded-l-lg border border-[#555] focus:outline-none focus:border-[#1DA1F2]"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!messageInput.trim()}
                    className={`py-3 px-4 rounded-r-lg ${
                      messageInput.trim()
                        ? 'bg-[#1DA1F2] text-white hover:bg-[#1A91DA]'
                        : 'bg-[#1DA1F2]/50 text-gray-300 cursor-not-allowed'
                    } transition`}
                  >
                    Send
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-400 text-lg">Select a conversation to start messaging</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
} 