import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">
           <span className="text-blue-400">&lt;VISHVA PORTFOLIO &gt;</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
          {portfolioData.sections.map((section) => (
            <a 
              key={section.id}
              href={`#${section.id}`}
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base"
            >
              {section.name}
            </a>
          ))}
        </div>
        
        <div className="border-t border-gray-700 pt-6 sm:pt-8">
          <p className="text-gray-400 text-xs sm:text-sm">
            © 2024 {portfolioData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;