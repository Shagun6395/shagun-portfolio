import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, Database, BarChart3, Code2, ExternalLink, Menu, X, GraduationCap, MapPin, Copy, Check } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // --- DATA ---
  const personalInfo = {
    name: "Shagun Sharma",
    role: "Data Analyst",
    bio: "Specialized in SQL, Python, and Power BI.",
    email: "shagun07092005@gmail.com",
    linkedin: "https://www.linkedin.com/in/shagun-sharma-318324306 ", 
    github: "https://github.com/Shagun6395",
    resume: "/shagun_sharma_da.pdf",
    location: "Ghaziabad, India"
  };

  const skills = [
    { category: "Core Analytics", items: ["Advanced SQL", "EDA", "Statistical Analysis", "KPI Design"] },
    { category: "Visual Storytelling", items: ["Power BI", "Tableau", "Drill-through Dashboards"] },
    { category: "Code & Tools", items: ["Python (Pandas/NumPy)", "Excel (Power Query)", "PostgreSQL", "Git"] },
  ];

  const projects = [
    {
      title: "Sales & Profitability Engine",
      tech: ["Power BI", "PostgreSQL", "DAX"],
      desc: "Designed an end-to-end analytics solution. Engineered complex DAX measures to track revenue and profit leakage, directly improving business visibility.",
      type: "Featured"
    },
    {
      title: "Farmer Market Intelligence",
      tech: ["Power BI", "Excel", "ETL"],
      desc: "Performed extensive ETL and EDA on market datasets. Built dashboards analyzing seasonality and demand, enabling leadership to identify cost-optimization opportunities.",
      type: "Dashboard"
    },
    {
      title: "Spotify User Trends (SQL)",
      tech: ["Advanced SQL", "Optimization"],
      desc: "Designed a normalized database schema. Wrote optimized queries using Window Functions and CTEs to analyze listening patterns on millions of rows.",
      type: "Database"
    }
  ];

  // Function to copy email to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white overflow-hidden relative">
      
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
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
            {['Skills', 'Projects', 'Education', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">
                {item}
              </a>
            ))}
          </div>
          <a href={personalInfo.resume} target="_blank" className="hidden md:flex items-center gap-2 px-5 py-2 text-sm font-semibold text-slate-900 bg-cyan-400 rounded-full hover:bg-cyan-300 transition shadow-lg shadow-cyan-500/20">
            <FileText size={16}/> Resume
          </a>
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-6 py-4 bg-[#0077b5] hover:bg-[#005582] text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-500/20 hover:-translate-y-1">
                  <Linkedin size={24} /> LinkedIn
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-6 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition-all border border-slate-600 hover:border-white hover:-translate-y-1">
                  <Github size={24} /> GitHub
                </a>
                {/* NEW GMAIL BUTTON: Opens Gmail directly */}
                <a 
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-purple-500/20 hover:-translate-y-1"
                >
                  <Mail size={24} /> Email Me
                </a>
              </div>
            </motion.div>

            {/* Right: Photo */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
              className="md:w-2/5 flex justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-md opacity-70 animate-pulse"></div>
                <img 
                  src="/shagun_sharma.png" 
                  alt="Shagun Sharma" 
                  className="relative w-full h-full object-cover rounded-full border-4 border-slate-900 shadow-2xl z-10"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  {idx === 0 ? <Database className="text-cyan-400"/> : idx === 1 ? <BarChart3 className="text-purple-400"/> : <Code2 className="text-pink-400"/>}
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium bg-slate-800 text-slate-300 rounded-full border border-slate-700">
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
      <section id="projects" className="py-20 relative z-10 bg-slate-900/50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-white mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative bg-slate-900 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="p-8 relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-3 py-1 text-xs font-bold text-cyan-400 bg-cyan-900/30 rounded border border-cyan-800 uppercase tracking-wider">
                      {project.type}
                    </span>
                    <ExternalLink size={20} className="text-slate-500 group-hover:text-white transition-colors"/>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.desc}
                  </p>
                  <div className="pt-6 border-t border-white/5 flex flex-wrap gap-2">
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
      <section id="education" className="py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-32 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none"></div>
            
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3 relative z-10">
              <GraduationCap className="text-purple-400"/> Education
            </h2>

            <div className="space-y-8 relative z-10">
              <div className="pl-6 border-l-2 border-purple-500">
                <h4 className="text-xl font-bold text-white">Bachelor of Technology (CSE)</h4>
                <p className="text-slate-400">R.D. Engineering College, Ghaziabad</p>
                <p className="text-cyan-400 text-sm font-semibold mt-1">2022 - 2026</p>
              </div>

              <div className="pl-6 border-l-2 border-slate-700">
                <h4 className="text-lg font-bold text-white">Higher Secondary (12th)</h4>
                <p className="text-slate-500">Shiksha International School</p>
                <p className="text-slate-600 text-sm mt-1">2021 - 2022</p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
                        <a 
            href={personalInfo.resume} 
            download="Shagun_Resume.pdf" 
            className="w-full md:w-auto inline-flex justify-center items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl hover:bg-cyan-50 transition shadow-xl shadow-white/5"
          >
            <FileText size={20}/> Download Resume
          </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 border-t border-white/10 bg-slate-950 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Let's analyze something together.</h2>
          
          {/* DISPLAY EMAIL WITH COPY BUTTON */}
          <div className="mb-8 flex flex-col items-center">
            <p className="text-slate-400 mb-2">Drop me an email at:</p>
            <div className="flex items-center gap-4 bg-white/5 px-6 py-3 rounded-full border border-white/10">
              <span className="text-xl font-bold text-cyan-400">{personalInfo.email}</span>
              <button 
                onClick={copyToClipboard}
                className="text-slate-400 hover:text-white transition-colors"
                title="Copy Email"
              >
                {copied ? <Check size={20} className="text-green-400"/> : <Copy size={20}/>}
              </button>
            </div>
            {copied && <p className="text-green-400 text-sm mt-2">Email copied to clipboard!</p>}
          </div>

          <div className="flex justify-center gap-6 mb-8">
            <a href={personalInfo.linkedin} target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-blue-600 hover:text-white transition-all text-slate-400">
              <Linkedin size={24}/>
            </a>
            <a href={personalInfo.github} target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-slate-700 hover:text-white transition-all text-slate-400">
              <Github size={24}/>
            </a>
          </div>
          <div className="flex justify-center items-center gap-2 text-slate-500 text-sm">
            <MapPin size={14}/> {personalInfo.location}
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;