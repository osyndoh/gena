import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Gena Initiative Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="text-xl font-semibold text-gray-900">
              Gena Initiative
            </span>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              href="/projects" 
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Projects
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Contact
            </Link>
            <Link 
              href="/donate" 
              className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Donate
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}