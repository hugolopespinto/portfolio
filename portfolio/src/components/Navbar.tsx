
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/context/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const { t, language, changeLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Navigation items
  const navItems = [
    { name: t('home'), href: '#home' },
    { name: t('about'), href: '#about' },
    { name: t('skills'), href: '#skills' },
    { name: t('projects'), href: '#projects' },
    { name: t('contact'), href: '#contact' },
  ];
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleLanguage = () => {
    changeLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-background/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-primary animated-underline">
          Portfolio
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors animated-underline"
              onClick={closeMenu}
            >
              {item.name}
            </a>
          ))}
          
          {/* Language Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className="rounded-full hover:bg-primary/20"
            aria-label="Toggle Language"
          >
            <Globe className="h-5 w-5" />
            <span className="ml-1">{language.toUpperCase()}</span>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground hover:text-primary"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md shadow-md animate-fade-in">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={closeMenu}
              >
                {item.name}
              </a>
            ))}
            
            {/* Mobile Language Toggle Button */}
            <Button
              variant="ghost"
              className="justify-start px-0 hover:bg-transparent"
              onClick={toggleLanguage}
            >
              <Globe className="h-5 w-5 mr-2" />
              {language === 'en' ? 'English' : 'Français'}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
