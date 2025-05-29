import { useState } from 'react';
import './App.css';

// Components
import SwipeSlides from './components/SwipeSlides';

function App() {

  return (
    <div className="flex flex-col min-h-screen w-full">
      <main className="flex-grow w-full">
        <SwipeSlides />
      </main>
    </div>
  );
}

export default App;
