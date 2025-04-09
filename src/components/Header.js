import { FiSearch, FiMoon, FiSun } from 'react-icons/fi';

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className={`p-2 rounded-full ${darkMode ? 'bg-blue-600' : 'bg-blue-500'}`}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <span className="text-xl font-bold">The Cloud Quest</span>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="hover:text-blue-500">Home</a>
            <a href="/articles" className="hover:text-blue-500">Articles</a>
            <a href="/videos" className="hover:text-blue-500">Videos</a>
            <a href="/resources" className="hover:text-blue-500">Resources</a>
            <a href="/contact" className="hover:text-blue-500">Contact</a>
          </nav>

          {/* Search and Dark Mode Toggle */}
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <FiSearch className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {darkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
            </button>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Hidden by default */}
        <nav className="md:hidden mt-4 hidden">
          <div className="flex flex-col space-y-2">
            <a href="/" className="block py-2 hover:text-blue-500">Home</a>
            <a href="/articles" className="block py-2 hover:text-blue-500">Articles</a>
            <a href="/videos" className="block py-2 hover:text-blue-500">Videos</a>
            <a href="/resources" className="block py-2 hover:text-blue-500">Resources</a>
            <a href="/contact" className="block py-2 hover:text-blue-500">Contact</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
