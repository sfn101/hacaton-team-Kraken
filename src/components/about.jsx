import React from 'react';

const AboutUs = () => {
  const stats = [
    { number: "5000+", label: "Clients Satisfaits", icon: "👥" },
    { number: "10+", label: "Années d'Expérience", icon: "⏰" },
    { number: "24/7", label: "Support Client", icon: "🔧" },
    { number: "99%", label: "Taux de Satisfaction", icon: "⭐" }
  ];

  const values = [
    {
      title: "Excellence",
      description: "Nous visons l'excellence dans tout ce que nous faisons, de la qualité de nos produits au service client.",
      icon: "🏆"
    },
    {
      title: "Innovation",
      description: "Nous investissons dans les dernières technologies pour offrir des solutions modernes et efficaces.",
      icon: "💡"
    },
    {
      title: "Confiance",
      description: "La confiance de nos clients est notre priorité absolue. Nous respectons nos engagements.",
      icon: "🤝"
    },
    {
      title: "Proximité",
      description: "Nous cultivons des relations durables avec nos clients en étant à leur écoute.",
      icon: "❤️"
    }
  ];

  const team = [
    {
      name: "Ahmed Bennani",
      role: "Directeur Général",
      description: "Visionnaire de l'entreprise avec 15+ ans d'expérience",
      avatar: "👨‍💼"
    },
    {
      name: "Fatima El Alami", 
      role: "Responsable Qualité",
      description: "Garante de l'excellence de nos produits et services",
      avatar: "👩‍🔬"
    },
    {
      name: "Youssef Tazi",
      role: "Chef des Ventes",
      description: "Expert en relations clients et développement commercial",
      avatar: "👨‍💻"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              À propos de <span className="text-yellow-300">MonSite</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Votre partenaire de confiance depuis plus de 10 ans au Maroc. 
              Nous transformons vos idées en réalité avec passion et expertise.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Notre Mission
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Depuis notre création en 2014 à Casablanca, MonSite s'est donné pour mission 
                  de révolutionner l'expérience client en proposant des produits et services 
                  d'exception.
                </p>
                <p>
                  Nous croyons fermement que chaque client mérite le meilleur. C'est pourquoi 
                  nous mettons un point d'honneur à dépasser vos attentes à chaque interaction.
                </p>
                <p>
                  Notre approche personnalisée et notre engagement envers l'innovation font 
                  de nous le partenaire idéal pour vos projets les plus ambitieux.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-12 text-center shadow-lg">
                <div className="text-8xl mb-6">🌟</div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Excellence</h3>
                <p className="text-gray-600 text-lg">
                  Notre engagement quotidien envers la qualité et l'innovation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              MonSite en Chiffres
            </h2>
            <p className="text-xl text-gray-600">
              Des résultats qui témoignent de notre engagement
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes fondamentaux qui guident nos actions et nos décisions au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Notre Équipe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des professionnels passionnés qui mettent leur expertise à votre service
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 text-center group">
                <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {member.avatar}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <div className="text-blue-600 font-semibold text-lg mb-4">
                  {member.role}
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-3xl p-12 lg:p-16 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative">
              <div className="text-6xl mb-6">🚀</div>
              <h2 className="text-4xl font-bold mb-6">
                Prêt à Démarrer Votre Projet ?
              </h2>
              <p className="text-xl mb-10 text-blue-100 max-w-2xl mx-auto">
                Rejoignez les milliers de clients qui nous font confiance. 
                Découvrez comment nous pouvons transformer vos idées en succès.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
                  Découvrir Nos Services
                </button>
                <button className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105">
                  Nous Contacter
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Spacing for Fixed Footer */}
      <div className="pb-96"></div>
    </div>
  );
};

export default AboutUs;