import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

export default function Forms() {
  const forms = [
    {
      formNumber: "Form I",
      title: "Form I - Application for Permission for Construction / Mining in Protected Area",
      href: "/forms/form-1-permission-construction-mining.docx",
      filename: "Form-I-Permission-Construction-Mining.docx"
    },
    {
      formNumber: "Form II",
      title: "Form II - Licence to Excavate in a Protected Area",
      href: "/forms/form-2-licence-excavate.docx",
      filename: "Form-II-Licence-Excavate.docx"
    },
    {
      formNumber: "Form IV",
      title: "Form IV - Report on Antiquities in a Protected Area",
      href: "/forms/form-4-report-antiquities-protected-area.docx",
      filename: "Form-IV-Report-Antiquities.docx"
    },
    {
      formNumber: "Form V",
      title: "Form V - Report on Antiquities by an Archaeological Officer",
      href: "/forms/form-5-report-antiquities-archaeological-officer.docx",
      filename: "Form-V-Report-Antiquities-Officer.docx"
    },
    {
      formNumber: "Form VI",
      title: "Form VI - Application for Moving of Antiquities",
      href: "/forms/form-6-application-moving-antiquities.docx",
      filename: "Form-VI-Application-Moving-Antiquities.docx"
    },
    {
      formNumber: "Form VII",
      title: "Form VII - Application for Licence for Mining / Construction within a Regulated Area",
      href: "/forms/form-7-licence-mining-construction-regulated-area.docx",
      filename: "Form-VII-Licence-Mining-Construction.docx"
    },
    {
      formNumber: "Form IX",
      title: "Form IX - Application for Licence of Filming Operation at Protected Monument",
      href: "/forms/form-9-licence-filming-operation.docx",
      filename: "Form-IX-Licence-Filming-Operation.docx"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full min-h-screen bg-transparent text-[#E6D8B8] relative overflow-hidden pb-20"
    >
      <Helmet>
        <title>Forms - ASI Puri Circle</title>
        <meta 
          name="description" 
          content="Download official statutory forms and application formats for permissions and licences from the Archaeological Survey of India, Puri Circle." 
        />
      </Helmet>

      {/* Background Glows for depth */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-orange-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-amber-500/15 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-block p-3 rounded-full bg-[var(--color-glass-surface)] border border-[var(--color-glass-border)] shadow-sm mb-2">
            <FileText className="w-8 h-8 text-[var(--color-saffron)]" />
          </div>
          <h1 className="font-serif text-[2.5rem] md:text-[3.5rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-indigo)] via-[#A8451A] to-[var(--color-saffron)] leading-tight drop-shadow-[0_4px_12px_rgba(226,122,63,0.2)]">
            Forms
          </h1>
          <p className="font-sans text-sm sm:text-base text-[var(--color-dark-stone)] opacity-80">
            Download official application formats and statutory documentation required for permissions, excavations, and operations.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-indigo)] to-[var(--color-saffron)] mx-auto rounded-full" />
        </motion.div>

        <motion.ul 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
          aria-label="Official Forms list"
        >
          {forms.map((form, idx) => (
            <motion.li key={idx} variants={itemVariants}>
              <a
                href={form.href}
                download={form.filename}
                target="_blank"
                rel="noreferrer"
                aria-label={`Download ${form.title} in DOCX format`}
                className="group flex items-center p-5 bg-[var(--color-glass-surface)] backdrop-blur-xl rounded-2xl border border-[var(--color-glass-border)] text-[var(--color-dark-stone)] hover:border-[var(--color-saffron)] hover:bg-white/50 transition-all duration-300 shadow-sm focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--color-saffron)]"
              >
                <div className="p-3 rounded-full bg-white shadow-inner group-hover:bg-[var(--color-saffron)]/10 transition-colors mr-5 shrink-0">
                  <FileText className="w-6 h-6 text-[var(--color-saffron)]" />
                </div>
                <span className="font-semibold text-base sm:text-lg group-hover:text-[var(--color-indigo)] transition-colors flex-grow pr-4">
                  {form.title}
                </span>

                <div className="flex items-center gap-3 shrink-0 ml-auto">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-saffron)] bg-[var(--color-saffron)]/10 px-2.5 py-1 rounded-full">
                    DOCX
                  </span>
                  <div className="flex items-center gap-1.5 text-[var(--color-saffron)] font-bold text-sm opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                    <span className="hidden sm:inline text-xs font-semibold">Download</span>
                    <Download className="w-5 h-5" />
                  </div>
                </div>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
}
