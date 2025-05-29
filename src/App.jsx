//import { useState } from 'react';
import './App.css';

// Components
import SwipeSlides from './components/SwipeSlides';
import Navbar from './components/navbar';
import AboutUs from './components/about';
import ModernCards from './components/card';
import Footer from './components/footer';
import BlogApp from './components/BlogApp'

function App() {

  return (
    <div className="flex flex-col min-h-screen w-full">
      <header>
        <Navbar />
      </header>
      <main className="flex-grow w-full">
        <SwipeSlides />
        <AboutUs />
        <ModernCards />
        <BlogApp />
        <Footer />
      </main>
    </div>
  );
}

export default App;