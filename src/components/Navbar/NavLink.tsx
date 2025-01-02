import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className="text-brand-white hover:text-brand-light px-3 py-2 text-sm font-medium transition-colors duration-200"
    >
      {children}
    </a>
  );
}