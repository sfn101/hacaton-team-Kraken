import { useState } from 'react'

const navigation = [
  { name: 'Home', href: '#home', current: true },
  { name: 'About', href: '#about', current: false },
  { name: 'Features', href: '#features', current: false },
]

export default function ImprovedNavbar() {
  const [currentPage, setCurrentPage] = useState('Home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNavClick = (itemName, e) => {
    e.preventDefault()
    setCurrentPage(itemName)
    setIsMobileMenuOpen(false) // Close mobile menu when navigating
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 shadow-lg backdrop-blur-sm z-50 border-b border-blue-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggleMobileMenu}
              className="group relative inline-flex items-center justify-center rounded-lg p-2 text-gray-400 hover:bg-gray-700/50 hover:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200 ease-in-out"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>

          {/* Logo and Navigation */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            {/* Logo */}
            <div className="flex flex-shrink-0 items-center group cursor-pointer">
              <div className="relative">
                <div className="w-10 h-10 rounded-lg overflow-hidden shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 transform group-hover:scale-105">
                  <img
                    src="/image/images-removebg-preview.png"
                    alt="Geeks Institute Logo"
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>
              <span className="ml-3 text-white font-semibold text-lg hidden sm:block">Geeks Institute</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:ml-8 sm:block">
              <div className="flex space-x-1">
                {navigation.map((item) => {
                  const isActive = currentPage === item.name
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(item.name, e)}
                      className={`group relative flex items-center rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ease-in-out hover:scale-105 ${isActive
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                        }`}
                    >
                      <svg className="h-4 w-4 mr-2 flex-shrink-0 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        {item.name === 'Home' && <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />}
                        {item.name === 'About' && <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />}
                        {item.name === 'Features' && <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />}
                      </svg>
                      {item.name}
                      {isActive && (
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-blue-400 rounded-full"></div>
                      )}
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right side - Sign In and Sign Up */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-3">
            {/* Sign In Button */}
            <button
              type="button"
              onClick={() => console.log('Sign In clicked')}
              className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-all duration-200 ease-in-out hover:bg-gray-700/50 rounded-lg"
            >
              Sign In
            </button>

            {/* Sign Up Button */}
            <button
              type="button"
              onClick={() => console.log('Sign Up clicked')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-gray-800/95 backdrop-blur-sm border-t border-gray-700 transform transition-all duration-300 ease-in-out">
          <div className="space-y-1 px-4 pt-2 pb-3">
            {navigation.map((item) => {
              const isActive = currentPage === item.name
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.name, e)}
                  className={`group flex items-center rounded-lg px-3 py-2 text-base font-medium transition-all duration-200 ${isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                    }`}
                >
                  <svg className="h-5 w-5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    {item.name === 'Home' && <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />}
                    {item.name === 'About' && <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />}
                    {item.name === 'Features' && <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />}
                  </svg>
                  {item.name}
                </a>
              )
            })}
          </div>
        </div>
      )}


    </nav>
  )
} import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">Logo</div>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li><a href="#" className="hover:text-blue-500">Accueil</a></li>
          <li><a href="#" className="hover:text-blue-500">Produits</a></li>
          <li><a href="#" className="hover:text-blue-500">À propos</a></li>
          <li><a href="#" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
