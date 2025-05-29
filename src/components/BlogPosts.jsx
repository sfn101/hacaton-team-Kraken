import React from 'react';

const posts = [
  {
    id: 1,
    title: 'Healthy Hydration Tips',
    description: 'Learn how to keep your family hydrated with clean and safe water every day.',
    image: '/images/ian-talmacs-YTmNAmmO5bA-unsplash.jpg'
  },
  {
    id: 2,
    title: 'Water Purification Basics',
    description: 'Discover simple methods to purify water at home and on the go.',
    image: '/images/alex-perez-wEgR12N01Tk-unsplash.jpg'
  },
  {
    id: 3,
    title: 'Eco–Friendly Bottles',
    description: 'Find out why choosing reusable bottles can help the environment.',
    image: '/images/trnsparnt-bottle.png'
  },
  {
    id: 4,
    title: 'Family Wellness Routines',
    description: 'Daily habits that promote health and well‑being for all ages.',
    image: '/images/family.png'
  },
  {
    id: 5,
    title: 'Kids and Hydration',
    description: 'Creative ways to encourage children to drink more water throughout the day.',
    image: '/images/kid.png'
  },
  {
    id: 6,
    title: 'Choosing the Right Filter',
    description: 'A quick guide to selecting a water filter that fits your needs.',
    image: '/images/mariano-nocetti-QF12ZFjf8HA-unsplash.jpg'
  }
];

const BlogPosts = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map(post => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">{post.title}</h3>
                <p className="text-gray-600 text-sm">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
