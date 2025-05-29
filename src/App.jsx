import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import SwipeSlides from './components/SwipeSlides';
import Navbar from './components/navbar';
import AboutUs from './components/about';
import ModernCards from './components/card';
import Footer from './components/footer';

// Home page component
function Home() {
  return (
    <>
      <SwipeSlides />
      <AboutUs />
      <ModernCards />
    </>
  );
}

// Post page component (placeholder)
function Post() {
  return (
    <div>
      <div> Hello</div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen w-full">
        <header>
          <Navbar />
        </header>
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<Post />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;