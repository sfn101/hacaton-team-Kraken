import React from 'react';

const ModernCards = () => {
  const cardData = [
    {
      id: 1,
      title: "50+ Best creative website themes & templates",
      description: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-700",
      image: "💻",
      buttonStyle: "bg-white text-gray-700 border border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600"
    },
    {
      id: 2,
      title: "The ultimate UX and UI guide to card design",
      description: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.",
      gradient: "bg-gradient-to-br from-orange-400 via-yellow-400 to-blue-900",
      image: "🎨",
      buttonStyle: "bg-white text-gray-700 border border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600"
    },
    {
      id: 3,
      title: "Creative Card Component designsgraphic elements",
      description: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.",
      gradient: "bg-gradient-to-br from-blue-400 to-purple-600",
      image: "🔺",
      buttonStyle: "bg-white text-gray-700 border border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image Section */}
              <div className={`h-48 ${card.gradient} relative flex items-center justify-center`}>
                <div className="text-6xl opacity-80 group-hover:scale-110 transition-transform duration-300">
                  {card.image}
                </div>
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"></div>
                <div className="absolute bottom-6 left-6 w-12 h-12 bg-white/10 rounded-lg backdrop-blur-sm"></div>
              </div>
              
              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {card.description}
                </p>
                
                {/* Button */}
                <button
                  className={`w-full py-3 px-6 rounded-full font-medium transition-all duration-200 ${card.buttonStyle}`}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModernCards;