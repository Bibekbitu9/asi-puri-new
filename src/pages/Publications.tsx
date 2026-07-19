import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Publications() {
  const startYear = 1953;
  const endYear = 2013;
  const publications = [];
  
  for (let y = startYear; y <= endYear; y++) {
    publications.push({
      title: `${y}-${y + 1}`,
      href: `https://www.asiaurangabadcircle.com/admin/uploads/${y}-${y + 1}.pdf`
    });
  }

  return (
    <div className="bg-[var(--color-surface)] text-[var(--color-dark-stone)] min-h-screen py-16">
      <Helmet>
        <title>Publications - ASI</title>
      </Helmet>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="font-serif text-[2.5rem] md:text-[3.5rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-indigo)] via-[#A8451A] to-[var(--color-saffron)] leading-tight drop-shadow-[0_4px_12px_rgba(226,122,63,0.2)] pb-4">
            Publications
          </h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {publications.map((pub, idx) => (
            <div key={idx} className="bg-[var(--color-glass-surface)] border border-[var(--color-glass-border)] rounded-xl p-4 flex flex-col items-center justify-center gap-3 shadow-sm">
              <span className="text-[var(--color-indigo)] font-semibold text-lg">{pub.title}</span>
              <a
                href={pub.href}
                target="_blank"
                rel="noreferrer"
                className="bg-[var(--color-saffron)] hover:bg-[var(--color-indigo)] text-white px-6 py-2 rounded-full text-sm font-bold shadow-md transition-all w-full text-center"
              >
                View
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
