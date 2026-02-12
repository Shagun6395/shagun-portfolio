import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, Database, BarChart3, Code2, ExternalLink, Menu, X, GraduationCap, MapPin, Copy, Check } from 'lucide-react';

// --- COMPONENT: SECTION HEADER (Fixes "Missing Headings" issue) ---
const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-12 md:mb-16 text-center">
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-cyan-400 font-bold tracking-widest uppercase text-sm"
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-3xl md:text-5xl font-bold text-white mt-3"
    >
      {title}
    </motion.h2>
    <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mt-4 rounded-full"></div>
  </div>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // --- YOUR DATA ---
  const personalInfo = {
    name: "Shagun Sharma",
    role: "Data Analyst",
    bio: "Specialized in SQL, Python, and Power BI.",
    email: "shagun07092005@gmail.com",
    linkedin: "https://www.linkedin.com/in/shagun-sharma-318324306", 
    github: "https://github.com/Shagun6395",
    resume: "shagun_sharma_da.pdf", // Kept exactly as you requested
    location: "Ghaziabad, India"
  };

  const skills = [
    { 
      category: "Core Analytics", 
      icon: <Database className="w-8 h-8 text-cyan-400" />,
      items: ["Advanced SQL", "EDA", "Statistical Analysis", "KPI Design"] 
    },
    { 
      category: "Visual Storytelling", 
      icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
      items: ["Power BI", "Tableau", "Drill-through Dashboards"] 
    },
    { 
      category: "Code & Tools", 
      icon: <Code2 className="w-8 h-8 text-pink-400" />,
      items: ["Python ", "Excel (Power Query)", "PostgreSQL", "Git"] 
    },
  ];

  const projects = [
    {
      title: "Sales & Profitability Engine",
      tech: ["Power BI", "PostgreSQL", "DAX"],
      desc: "Designed an end-to-end analytics solution. Engineered complex DAX measures to track revenue and profit leakage.",
      type: "Featured",
      github: "https://github.com/Shagun6395/Sales-Information-and-Profitability-Analysis-Dashboard-"
    },
    {
      title: "Farmer Market Intelligence",
      tech: ["Power BI", "Excel", "ETL"],
      desc: "Performed extensive ETL and EDA on market datasets. Built dashboards analyzing seasonality and demand.",
      type: "Dashboard",
      github: "https://github.com/Shagun6395/FARMERS-MARKET-DASHBOARD"
    },
    {
      title: "Spotify User Trends (SQL)",
      tech: ["Advanced SQL", "Optimization"],
      desc: "Designed a normalized database schema. Wrote optimized queries using Window Functions and CTEs.",
      type: "Database",
      github: "https://github.com/Shagun6395/Spotify-Advanced-SQL-Project"
    }
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold tracking-tighter text-white">
            SHAGUN<span className="text-cyan-400"> </span>SHARMA
          </span>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300 items-center">
            {['Skills', 'Projects', 'Education', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">
                {item}
              </a>
            ))}
          </div>
          
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-white/10 p-4 flex flex-col space-y-4">
             {['Skills', 'Projects', 'Education', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)}>{item}</a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 z-10 flex items-center min-h-screen md:min-h-0">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            
            {/* Left: Text */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
              className="md:w-3/5 text-center md:text-left"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                Turning Data into <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  Decisions.
                </span>
              </h1>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                Hi, I'm <strong className="text-white">{personalInfo.name}</strong>. {personalInfo.bio}
              </p>
              
              {/* LINKS */}
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-6 py-4 bg-[#0077b5] hover:bg-[#005582] text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-500/20 hover:-translate-y-1">
                  <Linkedin size={24} /> LinkedIn
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-6 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition-all border border-slate-600 hover:border-white hover:-translate-y-1">
                  <Github size={24} /> GitHub
                </a>
                <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-6 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-purple-500/20 hover:-translate-y-1">
                  <Mail size={24} /> Email Me
                </a>
              </div>
            </motion.div>

            {/* Right: Photo */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
              className="md:w-2/5 flex justify-center"
            >
              <div className="relative w-72 h-72 md:w-96 md:h-96 group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <img 
                  src="shagun_sharma.png" 
                  alt="shagun_sharma.png" 
                  className="relative w-full h-full object-cover rounded-full border-[6px] border-slate-900 shadow-2xl z-10"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative z-10 bg-slate-950">
        <div className="container mx-auto px-6">
          <SectionHeader title="Skills" />
          
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -8 }}
                className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-cyan-500/30 hover:bg-slate-900/80 transition-all duration-300 shadow-xl"
              >
                <div className="mb-6">{skill.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 text-sm font-medium bg-slate-950 text-slate-300 rounded-lg border border-slate-800">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative z-10 bg-slate-900/50">
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionHeader title="Featured Projects" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative bg-slate-900 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-colors duration-300 flex flex-col h-full hover:shadow-2xl hover:shadow-cyan-500/10">
                
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="p-8 relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-3 py-1 text-xs font-bold text-cyan-400 bg-cyan-900/30 rounded border border-cyan-800 uppercase tracking-wider">
                      {project.type}
                    </span>
                    <div className="flex gap-4">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" title="View Code">
                          <Github size={20} />
                        </a>
                      )}
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors" title="Live Demo">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                    {project.desc}
                  </p>

                  <div className="pt-6 border-t border-white/5 flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs font-mono text-slate-500">#{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 relative z-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionHeader title="Education"  />
          
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-32 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none"></div>
            
            <div className="space-y-10 relative z-10">
              <div className="flex gap-4 md:gap-8 items-start">
                <div className="mt-1 bg-purple-500/20 p-3 rounded-xl text-purple-400 hidden md:block">
                  <GraduationCap size={32} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white">Bachelor of Technology (CSE)</h4>
                  <p className="text-lg text-slate-400 mt-1">R.D. Engineering College, Ghaziabad</p>
                  <p className="text-cyan-400 text-sm font-bold mt-2 uppercase tracking-wide">2022 - 2026</p>
                </div>
              </div>

              <div className="w-full h-px bg-white/10"></div>

              <div className="flex gap-4 md:gap-8 items-start">
                <div className="mt-1 bg-slate-700/20 p-3 rounded-xl text-slate-400 hidden md:block">
                  <FileText size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Higher Secondary (12th)</h4>
                  <p className="text-lg text-slate-400 mt-1">Shiksha International School</p>
                  <p className="text-slate-500 text-sm font-bold mt-2 uppercase tracking-wide">2021 - 2022</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 text-center md:text-left">
              <a href={personalInfo.resume} download className="inline-flex justify-center items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl hover:bg-cyan-50 transition shadow-xl shadow-white/5">
                <FileText size={20}/> Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-20 border-t border-white/10 bg-slate-950 relative z-10">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <SectionHeader title="Let's Connect" />
          
          <div className="mb-8 flex flex-col items-center">
            <p className="text-slate-400 mb-4 text-lg">Ready to turn data into decisions? Email me at:</p>
            <div className="flex items-center gap-4 bg-white/5 px-8 py-4 rounded-full border border-white/10 hover:border-cyan-500/50 transition-all">
              <span className="text-xl font-bold text-cyan-400">{personalInfo.email}</span>
              <button onClick={copyToClipboard} className="text-slate-400 hover:text-white transition-colors" title="Copy Email">
                {copied ? <Check size={20} className="text-green-400"/> : <Copy size={20}/>}
              </button>
            </div>
            {copied && <p className="text-green-400 text-sm mt-3 animate-pulse">Copied to clipboard!</p>}
          </div>

          <div className="flex justify-center gap-6 mb-10">
            <a href={personalInfo.linkedin} target="_blank" className="p-4 bg-slate-900 border border-white/10 rounded-full hover:bg-[#0077b5] hover:text-white transition-all text-slate-400">
              <Linkedin size={24}/>
            </a>
            <a href={personalInfo.github} target="_blank" className="p-4 bg-slate-900 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all text-slate-400">
              <Github size={24}/>
            </a>
          </div>
          <div className="flex justify-center items-center gap-2 text-slate-500 text-sm">
            <MapPin size={16}/> {personalInfo.location}
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;