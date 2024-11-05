import { Search, Menu, User, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const CATEGORIES = [
  { name: 'Quizzes', path: '/quizzes' },
  { name: 'TV & Movies', path: '/entertainment' },
  { name: 'Celebrity', path: '/celebrity' },
  { name: 'Food', path: '/food' },
  { name: 'Travel', path: '/travel' },
  { name: 'Love', path: '/love' },
  { name: 'Trending', path: '/trending' }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Bar */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button 
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </button>
              <Link to="/" className="flex items-center ml-2 lg:ml-0">
                <span className="text-3xl font-extrabold text-red-500">QuizFeed</span>
              </Link>
            </div>

            <div className="hidden lg:flex flex-1 justify-center px-6">
              <div className="w-full max-w-lg">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    placeholder="Search quizzes..."
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="hidden md:flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-gray-900">
                <span>More</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <button className="flex items-center text-sm font-medium text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full transition-colors">
                <User className="h-5 w-5 mr-2" />
                <span>Sign In</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Navigation */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <div className="hidden lg:flex items-center space-x-8">
              {CATEGORIES.map((category) => (
                <Link
                  key={category.path}
                  to={category.path}
                  className="text-sm font-medium text-gray-700 hover:text-red-500 transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </div>
            <div className="lg:hidden flex items-center justify-between w-full">
              <span className="text-sm font-medium text-gray-900">Popular</span>
              <button className="text-sm font-medium text-gray-500">
                More
                <ChevronDown className="h-4 w-4 inline ml-1" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {CATEGORIES.map((category) => (
              <Link
                key={category.path}
                to={category.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}