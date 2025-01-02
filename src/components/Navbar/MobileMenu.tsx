import React from 'react';
import { X } from 'lucide-react';
import { NavLink } from './NavLink';
import { Logo } from '../Logo/Logo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-brand-black bg-opacity-75" onClick={onClose} />
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-brand-dark p-6 shadow-xl">
        <div className="flex items-center justify-between mb-8">
          <Logo />
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-brand-light hover:text-brand-white"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col space-y-4">
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#how-it-works">How It Works</NavLink>
          <NavLink href="#testimonials">Testimonials</NavLink>
          <NavLink href="#contact">Contact Us</NavLink>
          <button className="w-full mt-4 rounded-full bg-brand-white px-4 py-2 text-sm font-semibold text-brand-dark shadow-sm hover:bg-brand-light transition-colors duration-200">
            Sign Up for Free
          </button>
        </nav>
      </div>
    </div>
  );
}