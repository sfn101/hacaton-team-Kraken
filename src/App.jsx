import { useState } from 'react';
import './App.css';

// Components
import Navbar from './components/navbar';
import Footer from './components/footer';
import BlogPosts from './components/BlogPosts';
import HomePage from './pages/HomePage';

function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    if (page === 'blog') {
      return <BlogPosts />;
    }
    return <HomePage />;
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      <header>
        <Navbar currentPage={page} onNavigate={setPage} />
      </header>
      <main className="flex-grow w-full">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;