import React from 'react';

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <svg width="18" height="18" viewBox="0 0 63 67" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M31.624 7.02024V33.5L24.9343 30.0515C13.0565 23.8934 5.68414 12.4393 5.68414 0H0.769226V30.2978C0.769226 40.1507 7.0494 49.2647 17.0158 53.5754L31.7606 59.9798V33.5L38.4503 36.9485C50.3281 43.1066 57.7005 54.5607 57.7005 67H62.6154V36.7022C62.6154 26.8493 56.3352 17.7353 46.3688 13.4246L31.624 7.02024Z" fill="url(#paint0_linear_202_7)"/>
        <defs>
          <linearGradient id="paint0_linear_202_7" x1="0.769226" y1="4.65209" x2="62.6154" y2="62.3479" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3A1C72"/>
            <stop offset="0.5" stopColor="#D56D76"/>
            <stop offset="1" stopColor="#FDB07C"/>
          </linearGradient>
        </defs>
      </svg>
      <span className="text-brand-white text-xl font-semibold">SmartNoteMate</span>
    </div>
  );
}