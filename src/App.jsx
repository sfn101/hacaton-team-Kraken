
//import { useState } from 'react'
import './App.css'
import Footer from './components/footer.jsx'
import About from './components/about.jsx'



//components
import SwipeSlides from './components/SwipeSlides'

function App() {


  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* Constrained main content */}
        <div id="root" className="">
          <main>
            <About />
            <SwipeSlides />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
