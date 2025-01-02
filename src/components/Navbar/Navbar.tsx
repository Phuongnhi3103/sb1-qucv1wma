import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { NavLink } from './NavLink';
import { MobileMenu } from './MobileMenu';
import { Logo } from '../Logo/Logo';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-200 ${
          isScrolled ? 'bg-brand-black/90 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <a href="#" className="flex items-center space-x-2">
                <Logo />
              </a>
            </div>
            
            <nav className="hidden lg:flex lg:items-center lg:space-x-4">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#how-it-works">How It Works</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
              <NavLink href="#contact">Contact Us</NavLink>
              <button className="ml-8 rounded-full bg-brand-dark px-4 py-2 text-sm font-semibold text-brand-white shadow-sm hover:bg-brand-gray transition-colors duration-200">
                Sign Up for Free
              </button>
            </nav>

            <button
              className="lg:hidden rounded-lg p-1.5 text-brand-light hover:bg-brand-white/10"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}