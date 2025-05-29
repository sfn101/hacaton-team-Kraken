//import { useState } from 'react'
import './App.css'

//components
import SwipeSlides from './components/SwipeSlides'

function App() {


  return (
    <div className="flex flex-col min-h-screen">
      {/* Constrained main content */}
      <div id="root" className="">
        <main>

          <SwipeSlides />
        </main>
      </div>
    </div>
  )
}

export default App;
