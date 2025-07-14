const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-95 text-gray-300 py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm md:text-base text-center md:text-left">
          &copy; {new Date().getFullYear()} CreatorVerse. All rights reserved. Made by Rodela
        </p>

        <nav aria-label="Footer Navigation" className="flex flex-wrap justify-center md:justify-end gap-6 text-red-600 font-semibold text-sm md:text-base">
          <a
            href="mailto:rg21@usf.edu"
            className="hover:text-red-400 transition-colors duration-300"
            aria-label="Send an email to CreatorVerse"
          >
            Email
          </a>
          <a
            href="https://github.com/Ro-netizen004"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400 transition-colors duration-300"
            aria-label="Visit CreatorVerse on GitHub"
          >
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

