<<<<<<< HEAD
import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo & Text */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-pink-400">Glowette</h2>
          <p className="text-sm mt-1">&copy; 2025 Tous droits réservés.</p>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-pink-400 transition">Accueil</a>
          <a href="#" className="hover:text-pink-400 transition">À propos</a>
          <a href="#" className="hover:text-pink-400 transition">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
          <a href="#" className="hover:text-pink-400 transition"><FaInstagram /></a>
          <a href="#" className="hover:text-pink-400 transition"><FaTiktok /></a>
          <a href="#" className="hover:text-pink-400 transition"><FaFacebook /></a>
=======
import React from 'react';
 <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      integrity="sha512-wM1hgmTb+x1xGvN0uPrIuJjxVCW+gQ9KxLJjYzD0uDcZgND3La8TT+qPZtuBp0XduCWzBa3s1phG9i3T1rIHzQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
const Footer = () => {
  return (
    <footer className=" w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300  overflow-hidden -bottom-1" style={{ backgroundColor: '#090E34' }}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      </div>
      
      <div className="relative">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                
                <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
                  Geeks institute
                </h2>
                <img src="/image.png" alt="Logo MonSite" className="mx-auto h-20 mb-4" />
                <p className="text-gray-400 leading-relaxed">
                  Votre partenaire de confiance pour des produits de qualité exceptionnelle et un service client incomparable.
                </p>
              </div>
              
              {/* Newsletter signup */}
              <div className="mt-6">
                <h4 className="text-white font-semibold mb-3">Newsletter</h4>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Votre email..."
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-blue-600 rounded-r-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
                 send
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 relative">
                Liens utiles
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-blue-500"></div>
              </h3>
              <ul className="space-y-3">
                {[
                  { name: 'Home', href: '#' },
                  { name: 'Posts', href: '#' },
                  { name: 'About Us', href: '#' }
                 
                ].map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block group"
                    >
                      <span className="group-hover:text-blue-400">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 relative">
                Support
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-blue-500"></div>
              </h3>
              <ul className="space-y-3">
                {[
                  { name: 'Centre d\'aide', href: '#' },
                  { name: 'Contact', href: '#' },
                  { name: 'FAQ', href: '#' },
                  { name: 'Politique de confidentialité', href: '#' },
                  { name: 'Conditions d\'utilisation', href: '#' },
                  { name: 'Remboursements', href: '#' }
                ].map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block group"
                    >
                      <span className="group-hover:text-blue-400">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 relative">
                Contact
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-blue-500"></div>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <span className="text-blue-500 text-lg mt-0.5 group-hover:scale-110 transition-transform">📍</span>
                  <div>
                    <p className="text-gray-400 leading-relaxed">
                      MH6V+RGJ,Mohammedia Maroc
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 group">
                  <span className="text-blue-500 text-lg group-hover:scale-110 transition-transform">📞</span>
                  <a href="tel:+212612345678" className="text-gray-400 hover:text-white transition-colors">
                    +212 6 12 34 56 78
                  </a>
                </div>
                
                <div className="flex items-center space-x-3 group">
                  <span className="text-blue-500 text-lg group-hover:scale-110 transition-transform">📧</span>
                  <a href="mailto:contact@monsite.com" className="text-gray-400 hover:text-white transition-colors">
                    contact@Geeksinstitute.com
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h4 className="text-white font-semibold mb-4">Suivez-nous</h4>
                <div className="flex space-x-4">
                {[
   
                    { 
                    icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"/></svg>', 
                    href: '#', 
                    label: 'Facebook' 
                    },
                    { 
                    icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M11.96 8.84l5.74-6.68h-1.36l-4.99 5.8-3.99-5.8H2.5l6.02 8.77L2.5 18h1.36l5.27-6.13L13.12 18H18L11.96 8.84zm-1.86 2.17l-.61-.87L4.16 3.5h2.08l3.93 5.62.61.87 5.09 7.26h-2.08l-4.17-5.95z"/></svg>', 
                    href: '#', 
                    label: 'Twitter' 
                    },
                    { 
                    icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M10 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.717-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zM10 0C7.284 0 6.944.012 5.877.06 2.246.227.227 2.242.061 5.877.01 6.944 0 7.284 0 10s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122C19.777 2.249 17.76.228 14.124.06 13.057.01 12.716 0 10 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"/></svg>', 
                    href: '#', 
                    label: 'Instagram' 
                    }
                ].map((social) => (
                    <a 
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 hover:scale-110 transition-all duration-200 group text-lg"
                    >
                    <span dangerouslySetInnerHTML={{ __html: social.icon }} />
                    </a>
                ))}
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Geeks institute. Tous droits réservés.
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Mentions légales
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Cookies
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Plan du site
                </a>
              </div>
            </div>
          </div>
>>>>>>> ff0fed5aa7813f09ef23409de1f0f9fb8e53f696
        </div>
      </div>
    </footer>
  );
<<<<<<< HEAD
}

export default Footer;
=======
};

export default Footer;
>>>>>>> ff0fed5aa7813f09ef23409de1f0f9fb8e53f696
