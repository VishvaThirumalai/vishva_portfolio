const Certificates = () => {
  const certificatesData = [
    {
      id: 1,
      name: "Python for Data Science",
      issuer: "NPTEL",
      date: "2024",
      credentialId: "NPTEL-PYDS-2024",
      category: "Data Science",
      skills: ["Python", "Data Analysis", "Pandas", "NumPy", "Data Visualization"],
      verificationLink: "/certificate1.pdf",
      image: "/certificate1.jpg",
      icon: "python"
    },
    {
      id: 2,
      name: "Data Base Management System",
      issuer: "NPTEL",
      date: "2025",
      credentialId: "NPTEL-DBMS-2025",
      category: "Database Systems",
      skills: ["SQL", "Database Design", "Normalization", "Transactions", "NoSQL"],
      verificationLink: "/certificate2.pdf",
      image: "/certificate2.jpg",
      icon: "database"
    },
    {
      id: 3,
      name: "Data Structures and Algorithms Design",
      issuer: "NPTEL",
      date: "2025",
      credentialId: "NPTEL-DSA-2025",
      category: "Computer Science",
      skills: ["Algorithms", "Data Structures", "Complexity Analysis", "Problem Solving"],
      verificationLink: "/certificate3.pdf",
      image: "/certificate3.jpg",
      icon: "algorithms"
    },
    {
      id: 4,
      name: "Mobile App Development Hackathon",
      issuer: "Naan Mudhalvan Program",
      date: "2025",
      credentialId: "NMP-HACK-2025",
      category: "Mobile Development",
      skills: ["Android Studio", "Java", "Mobile UI/UX", "App Development"],
      verificationLink: "/certificate4.pdf",
      image: "/certificate4.jpg",
      icon: "mobile"
    }
  ];

  const getIcon = (iconName) => {
    switch(iconName) {
      case 'python':
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5v-7l6 3.5-6 3.5z"/>
          </svg>
        );
      case 'database':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/>
          </svg>
        );
      case 'algorithms':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
        );
      case 'mobile':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
          </svg>
        );
      default:
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
          </svg>
        );
    }
  };

  const getCategoryColor = (category) => {
    switch(category) {
      case 'Data Science': return 'from-green-500 to-emerald-500';
      case 'Database Systems': return 'from-blue-500 to-cyan-500';
      case 'Computer Science': return 'from-purple-500 to-pink-500';
      case 'Mobile Development': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen  relative overflow-hidden ">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-10 h-10 sm:w-52 sm:h-52  rounded-full blur-3xl"></div>
      
        {/* Moving Gradient Orbs */}

        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30 animate-particle-float"
              style={{
                width: `${Math.random * 3 + 1}px`,
                height: `${Math.random * 3 + 1}px`,
                top: `${Math.random * 100}%`,
                left: `${Math.random * 100}%`,
                animationDelay: `${Math.random * 20}s`,
                animationDuration: `${Math.random * 30 + 20}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container  px-2 sm:px-4">
        {/* Enhanced Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="relative inline-block">
            <h2 className="text-2xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 animate-text-gradient bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Certifications
            </h2>
            <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mt-6 sm:mt-8 animate-fade-in-up px-4" style={{animationDelay: '0.2s'}}>
            Industry-recognized certifications and specialized training programs
          </p>
        </div>

        

        {/* Certificates Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8">
            {certificatesData.map((cert, index) => (
              <div 
                key={cert.id}
                className="group relative animate-card-enter"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'both'
                }}
              >
                {/* Certificate Card */}
                <div className="relative bg-gray-900/60 rounded-xl sm:rounded-2xl shadow-lg border border-gray-700/30 overflow-hidden backdrop-blur-xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-blue-500/20">
                  
                  {/* Animated Border Glow */}
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Category Gradient Bar */}
                  <div className={`h-1.5 bg-gradient-to-r ${getCategoryColor(cert.category)}`}></div>

                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row gap-6">
                      {/* Certificate Image */}
                      <div className="flex-shrink-0">
                        <div className="w-32 h-40 sm:w-40 sm:h-48 rounded-lg overflow-hidden border-2 border-gray-600/50 group-hover:border-blue-500/50 transition-all duration-300 shadow-lg">
                          <img 
                            src={cert.image} 
                            alt={cert.name}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>

                      {/* Certificate Details */}
                      <div className="flex-1 min-w-0">
                        {/* Header with Icon and Category */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="text-blue-400 transform group-hover:scale-110 transition-transform duration-300">
                            {getIcon(cert.icon)}
                          </div>
                          <span className="text-xs font-medium text-gray-300 bg-gray-800/80 px-3 py-1.5 rounded-full border border-gray-600/50">
                            {cert.category}
                          </span>
                        </div>

                        {/* Certificate Name */}
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                          {cert.name}
                        </h3>

                        {/* Issuer and Details */}
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-sm sm:text-base text-gray-300">
                            <span className="font-semibold text-gray-400">Issuer:</span>
                            <span className="ml-2 text-blue-300">{cert.issuer}</span>
                          </div>
                          <div className="flex items-center text-sm sm:text-base text-gray-300">
                            <span className="font-semibold text-gray-400">Date:</span>
                            <span className="ml-2 text-green-300">{cert.date}</span>
                          </div>
                          <div className="flex items-center text-sm sm:text-base text-gray-300">
                            <span className="font-semibold text-gray-400">Credential ID:</span>
                            <span className="ml-2 text-purple-300 font-mono text-sm truncate">{cert.credentialId}</span>
                          </div>
                        </div>

                        {/* Skills */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-400 mb-2">Skills Validated:</h4>
                          <div className="flex flex-wrap gap-2">
                            {cert.skills.map((skill, idx) => (
                              <span 
                                key={idx}
                                className="bg-gray-800/80 text-cyan-300 text-xs px-3 py-1.5 rounded-full border border-cyan-500/20 transform group-hover:scale-105 transition-all duration-300"
                                style={{transitionDelay: `${idx * 100}ms`}}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 pt-4 border-t border-gray-700/50">
                          <a
                            href={cert.verificationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-center font-semibold flex items-center justify-center"
                          >
                            <span>View PDF</span>
                            <svg className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                          <button className="bg-gray-800/80 hover:bg-gray-700/80 text-gray-300 py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 border border-gray-600/50 hover:border-gray-500/50 flex items-center justify-center">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                            Share
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Header Card */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12 py-8">
          <div className="bg-gray-900/60 rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-700/50 backdrop-blur-xl text-center hover:border-blue-500/30 transition-all duration-500">
            <p className="text-gray-300 text-base sm:text-lg mb-4 sm:mb-6">
              Professional development through continuous learning and industry validation from prestigious programs.
            </p>
            <div className="w-20 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>
        </div>
        </div>

        
      </div>

      <style jsx>{`
        @keyframes text-gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes orb-float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        @keyframes particle-float {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          33% { transform: translateY(-20px) rotate(120deg) scale(1.1); }
          66% { transform: translateY(10px) rotate(240deg) scale(0.9); }
        }
        @keyframes card-enter {
          from {
            opacity: 0;
            transform: translateY(40px) rotateX(-5deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-text-gradient {
          background-size: 200% 200%;
          animation: text-gradient 3s ease-in-out infinite;
        }
        .animate-orb-float {
          animation: orb-float 8s ease-in-out infinite;
        }
        .animate-particle-float {
          animation: particle-float linear infinite;
        }
        .animate-card-enter {
          animation: card-enter 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Certificates;
