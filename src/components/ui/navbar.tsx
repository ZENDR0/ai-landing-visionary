
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/50 border-b border-white/10 dark:bg-black/50 dark:border-white/10 light-theme:bg-white/70 light-theme:border-black/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-white light-theme:text-gray-900 flex items-center gap-2">
              <span className="text-spektr-cyan-50">AI</span>Vision
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm text-white hover:text-spektr-cyan-50 transition-colors duration-200 light-theme:text-gray-800 light-theme:hover:text-spektr-cyan-50"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Theme Toggle */}
          <div className="hidden md:flex">
            <ThemeToggle />
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="text-white light-theme:text-gray-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-black/90 backdrop-blur-lg light-theme:bg-white/90"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-white hover:text-spektr-cyan-50 py-2 transition-colors duration-200 light-theme:text-gray-800 light-theme:hover:text-spektr-cyan-50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export { Navbar };
