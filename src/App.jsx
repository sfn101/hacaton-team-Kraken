//import { useState } from 'react'
import './App.css'

//components
import SwipeSlides from './components/SwipeSlides'

function App() {
  const [count, setCount] = useState(0)

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
