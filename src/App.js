import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ContentCards from './components/ContentCards';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <ContentCards darkMode={darkMode} />
        <Newsletter darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
