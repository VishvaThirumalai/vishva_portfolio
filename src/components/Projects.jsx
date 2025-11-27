const Projects = () => {
  const projects = [
    
    
    {
      id: 1,
      title: "MITH Hostels - Outpass System",
      subtitle: "Role-based hostel outpass management system with SpringBoot backend",
      category: "Management System",
      image: "/project2.jpg",
      tags: ["SpringBoot", "React", "Role-based", "Java"],
      progress: 100,
      status: "Completed",
      links: [
        { name: "Live Demo", url: "https://outpass-frontend.onrender.com/" },
        { name: "GitHub Frontend", url: "https://github.com/VishvaThirumalai/outpass-frontendv2.git" },
        { name: "GitHub Backend", url: "https://github.com/VishvaThirumalai/outpass-backendv1.git" }
      ],
      team: [
        { role: "Full Stack Developer", name: "Vishva " }
      ]
    },
    {
  id: 2,
  title: "Hotel Booking System",
  subtitle: "Full-stack hotel reservation platform with booking management and user authentication",
  category: "Booking System", // Changed from "E-Commerce"
  image: "/project7.jpg",
  tags: ["React", "Java", "SpringBoot", "Booking System"],
  progress: 100,
  status: "Completed",
  links: [
    { name: "View Project", url: "https://hotelbooking-frontendv1.onrender.com" },
    { name: "GitHub Frontend", url: "https://github.com/VishvaThirumalai/hotelbooking_frontendv1.git" },
    { name: "GitHub Backend", url: "https://github.com/VishvaThirumalai/hotelbooking_backendv1.git" }
  ],
  team: [
    { role: "Backend Developer", name: "Ashok Kumar & Vishva" },
    { role: "Frontend Developer", name: "Kamesh " }
  ]
},
    {
      id: 3,
      title: "Text Analyzer - AI Summarization",
      subtitle: "LLM-powered text analysis with tone-based summarization using OpenAI API",
      category: "AI & NLP",
      image: "/project3.jpg",
      tags: ["OpenAI", "Python", "React", "NLP"],
      progress: 100,
      status: "Completed",
      links: [
        { name: "Live Demo", url: "https://text-analyser-frontend-v1.onrender.com/" },
        { name: "GitHub Frontend", url: "https://github.com/VishvaThirumalai/text-analyser-frontend-v1.git" },
        { name: "GitHub Backend", url: "https://github.com/VishvaThirumalai/VishvaThirumalai-text_analyzer_backend-v0.git" }
      ],
      team: [
        { role: "AI Developer", name: "Vishva " }
      ]
    },
    {
      id: 4,
      title: "FreshMart - Grocery Shopping",
      subtitle: "Complete React grocery shopping platform with cart and ordering system",
      category: "E-Commerce",
      image: "/project1.jpg",
      tags: ["React", "Node.js", "E-commerce", "Shopping"],
      progress: 100,
      status: "Completed",
      links: [
        { name: "Live Demo", url: "https://f-mart-frontend.onrender.com/" },
        { name: "GitHub", url: "https://github.com/VishvaThirumalai/fmart-frontend-v1" }
      ],
      team: [
        { role: "Full Stack Developer", name: "Vishva " }
      ]
    },
     {
      id: 5,
      title: "Intelligent Adult Income Prediction",
      subtitle: "ML system predicting income levels using census data with 87.5% accuracy",
      category: "Machine Learning",
      image: "/project5.jpg",
      tags: ["Python", "ML", "Scikit-learn", "Data Analysis"],
      progress: 90,
      status: "Completed",
      links: [
        { name: "Case Study", url: "/casestudy.pdf" },
        { name: "GitHub", url: "#" }
      ],
      team: [
        { role: "ML Engineer|Data Scientist", name: "Vishva " },
      ]
    },
    {
      id: 6,
      title: "Rock Paper Scissors AI",
      subtitle: "Interactive RPS game with bot AI opponent",
      category: "Game Development",
      image: "/project4.jpg",
      tags: ["HTML", "CSS", "JavaScript", "Game AI"],
      progress: 100,
      status: "Completed",
      links: [
        { name: "Play Game", url: "https://rps-online-virid.vercel.app/" },
        { name: "GitHub", url: "https://github.com/VishvaThirumalai/RPS_online.git" }
      ],
      team: [
        { role: "Game Developer", name: "Vishva " }
      ]
    },
   
    
    {
      id: 7,
      title: "Bank Management System",
      subtitle: "Comprehensive banking simulator with loan and employee management",
      category: "System Development",
      image: "/project6.jpg",
      tags: ["C Programming", "Banking", "Management", "Finance"],
      progress: 100,
      status: "Completed",
      links: [
        { name: "GitHub", url: "https://github.com/VishvaThirumalai/Banking-System-Simulator.git" },
        { name: "Documentation", url: "#" }
      ],
      team: [
        { role: "System Developer", name: "Vishva " }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-black-900 px-4 sm:px-6 py-16 sm:py-20 relative overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-black-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-black-500/5 rounded-full blur-3xl"></div>
      
        {/* Moving Gradient Orbs */}
        <div className="absolute top-1/4 -left-20 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl animate-orb-float"></div>
        <div className="absolute bottom-1/3 -right-20 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-orb-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-orb-float" style={{animationDelay: '6s'}}></div>

        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-emerald-400/30 to-cyan-400/30 animate-particle-float"
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
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Enhanced Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="relative inline-block">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 animate-text-gradient bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Projects & Research
            </h2>
            <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-pulse"></div>
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mt-6 sm:mt-8 animate-fade-in-up px-4" style={{animationDelay: '0.2s'}}>
            Full-stack development, AI/ML solutions, and innovative software engineering projects
          </p>
        </div>
        
        {/* Enhanced Projects Grid - 2 per row on mobile, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group relative animate-card-enter"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'both'
              }}
            >
              {/* Card Container */}
              <div className="relative bg-gray-900/60 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-gray-700/30 overflow-hidden backdrop-blur-xl transition-all duration-700 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-emerald-500/20">
                
                {/* Animated Border Glow */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Progress Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gray-700/50 z-20">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-1000 ease-out"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>

                {/* Project Image with Parallax Effect */}
                <div className="h-48 sm:h-56 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 z-0"></div>
                  <div 
                    className="w-full h-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  ></div>
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"></div>
                  
                  {/* Category and Status */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex flex-col space-y-1 sm:space-y-2">
                    <span className="bg-black/60 backdrop-blur-sm text-emerald-300 text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-medium border border-emerald-500/30">
                      {project.category}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium backdrop-blur-sm ${
                      project.status === 'Completed' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
                      project.status === 'In Progress' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                      project.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' :
                      'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Progress Percentage */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-black/60 backdrop-blur-sm text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full border border-white/10">
                    {project.progress}%
                  </div>

                  {/* Hover Action Buttons */}
                  <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex space-x-1 sm:space-x-2">
                      {project.links.slice(0, 2).map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/10 backdrop-blur-sm text-white p-1.5 sm:p-2 rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 transform hover:scale-110"
                        >
                          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 sm:p-6 lg:p-7 relative">
                  {/* Title and Subtitle */}
                  <div className="mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2 group-hover:text-emerald-300 transition-colors duration-500 transform group-hover:translate-x-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed transform group-hover:translate-x-1 transition-transform duration-500">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="text-xs bg-gray-800/60 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/20 transform group-hover:scale-105 transition-all duration-300"
                        style={{transitionDelay: `${tagIndex * 100}ms`}}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Team Members */}
                  <div className="space-y-2 sm:space-y-3">
                    {project.team.map((member, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center space-x-2 sm:space-x-3 transform group-hover:translate-x-2 transition-transform duration-500"
                        style={{transitionDelay: `${idx * 100 + 200}ms`}}
                      >
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white truncate">{member.name}</p>
                          <p className="text-xs text-cyan-400 truncate">{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-gray-700/50">
                    {project.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[100px] sm:min-w-[120px] text-center bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 text-emerald-300 hover:text-white py-2 px-2 sm:px-3 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 border border-emerald-500/20 hover:border-emerald-500/40 hover:from-emerald-500/20 hover:to-cyan-500/20 transform hover:scale-105"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
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
      `}</style>
    </div>
  );
};

export default Projects;
