import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { Building2, Calendar, LayoutDashboard, FileText, Building, User, Mail } from 'lucide-react';

export default function CircleMuseums() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const museums = [
    {
      name: 'Archaeological Museum, Ratnagiri',
      location: 'Ratnagiri, Dist- Jajpur, Odisha',
      description: [
        "The ancient site Ratnagiri (Lat. 20° 39’ N; Long. 86° 20’ E) is located in district: Jajpur, Taluk/Tehsil: Bari. The site is situated on an isolated hill surrounded by the rivers like Brahmani, Birupa and Kimiria. Excavation at the Ratnagiri hill from 1958 to 1961 yielded remains of prosperous Mahayana-Vajrayana Buddhist centre comprising a big stupa with votive stupas around two monasteries. Monastery No.1 has an elaborate plan and a highly ornate sanctum gateway made of chlorite. The sanctum enshrines an image of Buddha in Bhumisparsamudra. A large number of sculptures have been found during the excavation. On the basis of the style of art and architecture, monastery No.1 is earlier to monastery No.2. The excavation established the chronology of the site from 6th to 16th century A.D. The most remarkable piece of architectural specimen is the elaborate gateway of monastery No.1 which bears the Gupta art idiom and influence.",
        "The Archaeological Museum, Ratnagiri was opened to public on 15th August 1998. The Museum houses the antiquities which were retrieved from the excavations (1958-62) of famous Buddhist site, Ratnagiri. The selected antiquities are kept on display in 04 nos. of galleries, corridor, back side verandah and either side of main entrance. The important exhibits include the stone sculptures of Buddha in various hand postures, Avalokitesvara, Tara, Jambhala, Vasudhara, Lokesvara, Vajrapani, Manjusri, Aparajita, Votive stupas depicting Buddhist images in the niches, terracotta sealings, copper plate inscriptions, bronze image of Buddha and Bodhisattva, iron objects etc. The museum exhibits the antiquities carved out of stone, Bronze, Copper, Iron, Terracotta representing the rich cultural heritage Odisha during 9th-13th Century CE."
      ],
      openingYear: '1998',
      antiquities: '252 displayed / 3288 reserve',
      material: 'Stone, Terracotta and Metal objects',
      area: '4782 Sq.m.',
      galleryArea: '1520.26 Sq. m.',
      nmma: null,
      condition: null,
      icName: 'Dr P.P Pradhan, ASA',
      icContact: 'asamratnagiri@gmail.com'
    },
    {
      name: 'Archaeological Museum, Lalitagiri',
      location: 'Naltigiri (Lalitagiri), Dist-Cuttack, Odisha',
      description: [
        "The ancient site Naltigiri (Lalitagiri) (Lat. 20° 34’ N; Long. 86° 16’ E) is located in district: Cuttack Taluk/Tehsil: Mahanga. Lalitagiri, is one of the earliest Buddhist sites in Orissa. Large scale Excavations conducted from 1985 to 1991 revealed a stupa on the hill-top, four monasteries, an apsidal chaitya-griha, numerous sculptures of Buddha and other Mahayana divinities, myriads of votive stupas, inscriptions, antiquities and other precious art objects. Lalitagiri is the only site in Orissa where relic casket was first reported in the year 1985. The excavation results show that the cultural sequence of Lalitagiri ranged from the post-Mauryan to the medieval times in an unbroken sequence.",
        "The Archaeological Museum, Lalitgiri is enriched with the objects recovered from the scientific excavations conducted by the ASI, Bhubaneswar Circle at the Buddhist Site, Lalitgiri. After appropriate furnishing of museum building and effective display of the objects the Archaeological Museum, Lalitgiri was declared open to public in the hands of Shri Narendra Modi, Hon’ble Prime Minister of India through Video Conferencing on 24th December 2018. The important collection of the museum include the Relic Caskets, stone sculptures include Buddha in different attributes, Maitreya, Tara, Manjusri, Head of Buddha, Kshitigarbha, Samantabhadra, Jambhala, Hariti etc. ranging in date from 5nd-12th Century CE. These Sculptures are displayed in an aesthetic manner inside the galleries, courtyard, verandah and relic casket gallery which is the key gallery of the museum."
      ],
      openingYear: '2018',
      antiquities: 'Displayed-50 / reserve-325',
      material: 'Stone objects',
      area: '4750.91 Sq.m',
      galleryArea: '1309.82 Sq.m',
      nmma: '180',
      condition: null,
      icName: 'Dr P.P Pradhan, ASA',
      icContact: 'asamratnagiri@gmail.com'
    },
    {
      name: 'Archaeological Museum, Konark',
      location: 'Konark, Dist-Puri, Odisha',
      description: [
        "Konarak a small village (Lat.19.53N Long 86:.06E) is in puri district within 3 km. of the Bay of Bengal. It can be reached either from puri (35 kms.) or from Bhubaneswar (66 kms.). Konarak owes its singular distinction to the magnificent sun temple built by monarch Narasimhadeva 1 (1238-64) of the illustrious Ganga dynasty. The site museum of Konarak is the product of the grand monument of sun temple.",
        "Archaeological museum at Konarak is a site museum located at a couple of hundred meters away from the main temple in the north direction. In order to preserve and protect them not only from sun and rain but also from human vandalism, the fallen architectural and sculptural superb specimens of the Sun temple earlier preserved in the complex then shifted to the present museum building in 1968. In a way these collections in the museum imparts the educational activities and convey the message of the aesthetic and cultural grandeur of the past glory to the people. The Sun temple at Konarak being the only World heritage Monument in the whole of eastern India the site museum as an integral associate of the grand edifice also assumes special importance.",
        "The foundation of the building was laid by Humayun Kabir, the then Hon’ble Minister of Scientific Research of the union of India in 1960 and the museum with originally with three galleries was declared open by then Hon’ble Minister of education Dr. Triguna Sen in 1968. But one more gallery has been organized and opened during the financial year 2003-04. The site museum is a veritable store house of antiquities displayed in the most scientific and systematic manner. For the benefit of the tourists/visitors to the museum a software information kiosk has been installed recently. The museum has four galleries for housing and displaying 260 nos. of various antiquities retrieved from the clearance work of Sun temple. Besides, it is rich in reserve collection of having 456 nos. of antiquities."
      ],
      openingYear: '1968',
      antiquities: 'Displayed: 262, Reserve: 455, Sun Temple complex: 5',
      material: 'Stones',
      area: '41250.29 Sqmt. (10.193 Ac.)',
      galleryArea: '1339.45 Sqmt. (0.3756 Ac.)',
      nmma: '722',
      condition: 'Good',
      icName: 'Dr Tikam Tenwar, ASA',
      icContact: 'asamkonark@gmail.com'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full min-h-screen bg-transparent text-[#E6D8B8] relative overflow-hidden pb-20"
    >
      <SEO title="Circle Museums - ASI Puri Circle" />
      
      {/* Background Glows for depth */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-orange-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-amber-500/15 blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-block p-3 rounded-full bg-[var(--color-glass-surface)] border border-[var(--color-glass-border)] shadow-sm mb-2">
            <LayoutDashboard className="w-8 h-8 text-[var(--color-saffron)]" />
          </div>
          <h1 className="font-serif text-[2.5rem] md:text-[3.5rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-indigo)] via-[#A8451A] to-[var(--color-saffron)] leading-tight drop-shadow-[0_4px_12px_rgba(226,122,63,0.2)]">
            Archaeological Museums
          </h1>
          <p className="font-sans text-sm sm:text-base text-[var(--color-dark-stone)] opacity-80">
            Discover the rich cultural heritage of Odisha preserved within the three archaeological museums under the Puri Circle.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-indigo)] to-[var(--color-saffron)] mx-auto rounded-full" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {museums.map((museum, idx) => (
            <motion.div key={idx} variants={itemVariants} className="relative group perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-saffron)] to-transparent rounded-[28px] blur-md opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative bg-[var(--color-glass-surface)] backdrop-blur-xl border border-[var(--color-glass-border)] rounded-[28px] p-6 md:p-10 shadow-[0_20px_40px_rgba(74,28,10,0.05)] flex flex-col md:flex-row gap-8">
                
                <div className="flex-1 space-y-6">
                  <div>
                    <h2 className="font-serif text-[2rem] font-bold text-[var(--color-indigo)] tracking-tight">
                      {museum.name}
                    </h2>
                    <p className="text-[var(--color-saffron)] font-bold uppercase tracking-widest text-sm mt-2">
                      {museum.location}
                    </p>
                  </div>
                  
                  <div className="text-[var(--color-dark-stone)] opacity-90 text-lg leading-relaxed text-justify space-y-4">
                    {museum.description.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                <div className="md:w-80 bg-white/50 rounded-2xl p-6 border border-[var(--color-glass-border)] h-fit shadow-sm">
                  <h3 className="text-[var(--color-indigo)] font-bold uppercase tracking-widest text-sm border-b border-[var(--color-glass-border)] pb-3 mb-4">
                    Quick Facts
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-[var(--color-saffron)] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[var(--color-dark-stone)] opacity-60 uppercase text-[10px] tracking-wider font-bold">Opened</p>
                        <p className="text-[var(--color-dark-stone)] font-medium">{museum.openingYear}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Building2 className="w-5 h-5 text-[var(--color-saffron)] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[var(--color-dark-stone)] opacity-60 uppercase text-[10px] tracking-wider font-bold">Antiquities</p>
                        <p className="text-[var(--color-dark-stone)] font-medium">{museum.antiquities}</p>
                        <p className="text-[var(--color-dark-stone)] opacity-70 text-xs mt-1">{museum.material}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <LayoutDashboard className="w-5 h-5 text-[var(--color-saffron)] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[var(--color-dark-stone)] opacity-60 uppercase text-[10px] tracking-wider font-bold">Area</p>
                        <p className="text-[var(--color-dark-stone)] font-medium text-xs leading-relaxed">
                          Premises: {museum.area} <br/>
                          Galleries: {museum.galleryArea}
                        </p>
                      </div>
                    </div>
                    
                    {museum.nmma && (
                      <div className="flex items-start gap-3">
                        <FileText className="w-5 h-5 text-[var(--color-saffron)] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[var(--color-dark-stone)] opacity-60 uppercase text-[10px] tracking-wider font-bold">NMMA format Documented</p>
                          <p className="text-[var(--color-dark-stone)] font-medium">{museum.nmma}</p>
                        </div>
                      </div>
                    )}
                    
                    {museum.condition && (
                      <div className="flex items-start gap-3">
                        <Building className="w-5 h-5 text-[var(--color-saffron)] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[var(--color-dark-stone)] opacity-60 uppercase text-[10px] tracking-wider font-bold">Condition of Building</p>
                          <p className="text-[var(--color-dark-stone)] font-medium">{museum.condition}</p>
                        </div>
                      </div>
                    )}
                    
                    {museum.icName && (
                      <div className="flex items-start gap-3">
                        <User className="w-5 h-5 text-[var(--color-saffron)] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[var(--color-dark-stone)] opacity-60 uppercase text-[10px] tracking-wider font-bold">Name of I/C</p>
                          <p className="text-[var(--color-dark-stone)] font-medium">{museum.icName}</p>
                        </div>
                      </div>
                    )}
                    
                    {museum.icContact && (
                      <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-[var(--color-saffron)] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[var(--color-dark-stone)] opacity-60 uppercase text-[10px] tracking-wider font-bold">Contact</p>
                          <a href={`mailto:${museum.icContact}`} className="text-[var(--color-dark-stone)] font-medium hover:text-[var(--color-saffron)] transition-colors">{museum.icContact}</a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
