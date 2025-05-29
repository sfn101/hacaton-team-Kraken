import React, { useState } from 'react';

const BlogApp = () => {
  // Sample data based on your schema
  const [users] = useState([
    { id: 1, username: 'john_doe', email: 'john@email.com' },
    { id: 2, username: 'jane_smith', email: 'jane@email.com' },
    { id: 3, username: 'mike_wilson', email: 'mike@email.com' }
  ]);

  const [posts] = useState([
    {
      id: 1,
      title: 'Getting Started with React Development',
      desc: 'Learn the fundamentals of React and how to build modern web applications with components, hooks, and state management.',
      photo: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop',
      userId: 1,
      createdAt: '2024-05-15'
    },
    {
      id: 2,
      title: 'Advanced JavaScript Techniques',
      desc: 'Explore advanced JavaScript concepts including closures, promises, async/await, and modern ES6+ features that every developer should know.',
      photo: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop',
      userId: 2,
      createdAt: '2024-05-20'
    },
    {
      id: 3,
      title: 'Building Responsive Web Designs',
      desc: 'Master the art of creating responsive websites that work perfectly across all devices using CSS Grid, Flexbox, and media queries.',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
      userId: 3,
      createdAt: '2024-05-25'
    },
    {
      id: 4,
      title: 'Database Design Best Practices',
      desc: 'Learn how to design efficient and scalable databases with proper normalization, indexing strategies, and performance optimization techniques.',
      photo: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=250&fit=crop',
      userId: 1,
      createdAt: '2024-05-28'
    }
  ]);

  const [currentView, setCurrentView] = useState('posts');
  const [selectedPost, setSelectedPost] = useState(null);

  const getUserById = (userId) => {
    return users.find(user => user.id === userId);
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setCurrentView('details');
  };

  const handleBackToPosts = () => {
    setCurrentView('posts');
    setSelectedPost(null);
  };

  const PostCard = ({ post }) => {
    const author = getUserById(post.userId);
    
    return (
      <div 
        className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl w-full"
        onClick={() => handlePostClick(post)}
      >
        <div className="relative">
          <img 
            src={post.photo} 
            alt={post.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
            <span>👁</span>
            <span>Read More</span>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3 truncate">
            {post.title}
          </h3>
          
          <p className="text-gray-600 mb-4 h-16 overflow-hidden">
            {post.desc}
          </p>
          
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span>👤</span>
              <span className="font-medium">{author?.username}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span>📅</span>
              <span>{new Date(post.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const PostDetail = ({ post }) => {
    const author = getUserById(post.userId);
    
    return (
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={handleBackToPosts}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 transition-colors duration-200"
        >
          <span>←</span>
          <span className="font-medium">Back to Posts</span>
        </button>
        
        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative">
            <img 
              src={post.photo} 
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-4 text-white/90">
                <div className="flex items-center gap-2">
                  <span>👤</span>
                  <span className="font-medium">{author?.username}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span>📅</span>
                  <span>{new Date(post.createdAt).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                {post.desc}
              </p>
              
              {/* Extended content for demo */}
              <div className="space-y-4 text-gray-600">
                <p>
                  This comprehensive guide covers everything you need to know about the topic. 
                  Whether you're a beginner just starting out or an experienced developer looking 
                  to expand your knowledge, this post will provide valuable insights and practical 
                  examples.
                </p>
                
                <p>
                  We'll explore various concepts, best practices, and real-world applications 
                  that will help you master the subject matter. Each section builds upon the 
                  previous one, creating a structured learning path that's easy to follow.
                </p>
                
                <p>
                  By the end of this article, you'll have a solid understanding of the core 
                  principles and be ready to apply them in your own projects. Don't forget to 
                  practice what you learn and experiment with different approaches.
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {author?.username?.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{author?.username}</h3>
                  <p className="text-gray-600">{author?.email}</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 w-full">
        {currentView === 'posts' ? (
          <>
            <div className="text-center mb-12 ">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 mt-8">
  Our Blog
</h1>
<p className="text-xl text-gray-600 max-w-2xl mx-auto">
  Discover the latest insights, tutorials, and tips from our community of developers and designers.
</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
              {posts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </>
        ) : (
          <PostDetail post={selectedPost} />
        )}
      </div>
    </div>
  );
};

export default BlogApp;