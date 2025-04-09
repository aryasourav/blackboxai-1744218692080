import { FaTwitter, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function Footer({ darkMode }) {
  return (
    <footer className={`py-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="https://twitter.com" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-white">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="https://github.com" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-white">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-white">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="https://youtube.com" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-white">
              <FaYoutube className="w-5 h-5" />
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0">
            <a href="/" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-white">Home</a>
            <a href="/articles" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-white">Articles</a>
            <a href="/videos" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-white">Videos</a>
            <a href="/contact" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-white">Contact</a>
          </div>

          {/* Copyright */}
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            &copy; {new Date().getFullYear()} The Cloud Quest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
