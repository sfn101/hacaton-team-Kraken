import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//components
import Navbar from "./components/navbar";
import SkeletonCards from './components/card';


function App() {
  return (
    <>
      <div>
        <div className="pt-16">

          <Navbar />
        </div>
        <div className="min-h-screen bg-gray-100">
          <SkeletonCards />
        </div>

      </div>

    </>
  )
}

export default App;
