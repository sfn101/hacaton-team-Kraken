import { useState } from 'react';
import './App.css';

// Components
import SwipeSlides from './components/SwipeSlides';
import Navbar from "./components/navbar";
import SkeletonCards from './components/card';

function App() {

  return (
    <div className="flex flex-col min-h-screen w-full">
      <main className="flex-grow w-full">
        <Navbar />
        <SwipeSlides />
        <SkeletonCards />
      </main>
    </div>
  );
}

export default App;
