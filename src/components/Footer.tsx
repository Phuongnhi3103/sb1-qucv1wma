import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a href="#" className="text-brand-gray hover:text-brand-dark">
            <Github className="h-6 w-6" />
          </a>
          <a href="#" className="text-brand-gray hover:text-brand-dark">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="#" className="text-brand-gray hover:text-brand-dark">
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-brand-gray">
            &copy; 2024 SmartNoteMate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}