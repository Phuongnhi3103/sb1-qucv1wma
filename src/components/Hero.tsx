import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-brand-black pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-brand-white sm:text-6xl">
            Effortless Notes, Better Grades!
          </h1>
          <p className="mt-6 text-lg leading-8 text-brand-light">
            Summarize, organize, and simplify your study materials in seconds.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="rounded-full bg-gradient-to-r from-[#3A1C72] via-[#D56D76] to-[#FDB07C] px-8 py-3.5 text-sm font-semibold text-brand-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-light transition-all duration-200 flex items-center gap-2">
              Start for Free <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="mt-16 rounded-lg overflow-hidden shadow-xl bg-brand-dark">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
            alt="Students collaborating"
            className="w-full object-cover opacity-75 hover:opacity-100 transition-opacity duration-200"
          />
        </div>
      </div>
    </div>
  );
}