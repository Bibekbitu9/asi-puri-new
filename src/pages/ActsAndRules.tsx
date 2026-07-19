import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ActsAndRules() {
  const documents = [
    { title: "Right To Information Act", href: "https://www.asiaurangabadcircle.com/assets/files/ACT-1958.pdf" },
    { title: "The Gazette of India", href: "https://www.asiaurangabadcircle.com/assets/files/AMASR_Act2010_Gazette_Notification_new.pdf" },
    { title: "National Monument Authority Rules by PMO 2010", href: "https://www.asiaurangabadcircle.com/assets/files/NMA_Rules_Final_by_PMO_24.12.2010.pdf" },
    { title: "National Monument Authority Rules 2011", href: "https://www.asiaurangabadcircle.com/assets/files/National-Monument-Authority-Rules-20111.pdf" },
    { title: "Ancient Monuments and Archaeological Sites and Remains Act 1958", href: "https://www.asiaurangabadcircle.com/assets/files/AMAASAR-ACT-1958.pdf" },
    { title: "Guidelines on RTI - (i)", href: "https://www.asiaurangabadcircle.com/assets/files/Rule-1959.pdf" },
    { title: "Guidelines on RTI - (ii)", href: "https://www.asiaurangabadcircle.com/assets/files/Rule-2010.pdf" }
  ];

  return (
    <div className="bg-[var(--color-surface)] text-[var(--color-dark-stone)] min-h-screen py-16">
      <Helmet>
        <title>Acts & Rules - ASI</title>
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="font-serif text-[2.5rem] md:text-[3.5rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-indigo)] via-[#A8451A] to-[var(--color-saffron)] leading-tight drop-shadow-[0_4px_12px_rgba(226,122,63,0.2)] pb-4">
            Acts & Rules
          </h1>
        </div>
        <ul className="space-y-4">
          {documents.map((doc, idx) => (
            <li key={idx}>
              <a
                href={doc.href}
                target="_blank"
                rel="noreferrer"
                className="block p-4 bg-[var(--color-glass-surface)] rounded-xl border border-[var(--color-glass-border)] text-[var(--color-dark-stone)] hover:text-[var(--color-saffron)] hover:bg-[var(--color-glass-border)] transition-all font-semibold shadow-sm"
              >
                <span className="mr-3">📄</span>
                {doc.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
