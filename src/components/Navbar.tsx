'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md py-2 shadow-lg'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Rise of Trash Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="text-xl font-bold font-orbitron">RISE OF TRASH</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/mission" className="hover:text-primary-blue transition-colors">
            Mission
          </Link>
          <Link href="/token" className="hover:text-primary-blue transition-colors">
            $TRASH Token
          </Link>
          <Link href="/tokenomics" className="hover:text-primary-blue transition-colors">
            Tokenomics
          </Link>
          <Link href="/governance" className="hover:text-primary-blue transition-colors">
            DAO
          </Link>
          <Link href="/staking" className="hover:text-primary-blue transition-colors">
            Staking
          </Link>
          <Link href="/referral" className="hover:text-primary-blue transition-colors">
            Referral
          </Link>
          <Link href="/whitepaper" className="hover:text-primary-blue transition-colors">
            Whitepaper
          </Link>
          <Link 
            href="/join" 
            className="btn-primary ml-4"
          >
            Join Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              href="/mission" 
              className="py-2 hover:text-primary-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Mission
            </Link>
            <Link 
              href="/token" 
              className="py-2 hover:text-primary-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              $TRASH Token
            </Link>
            <Link 
              href="/tokenomics" 
              className="py-2 hover:text-primary-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tokenomics
            </Link>
            <Link 
              href="/governance" 
              className="py-2 hover:text-primary-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              DAO
            </Link>
            <Link 
              href="/staking" 
              className="py-2 hover:text-primary-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Staking
            </Link>
            <Link 
              href="/referral" 
              className="py-2 hover:text-primary-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Referral
            </Link>
            <Link 
              href="/whitepaper" 
              className="py-2 hover:text-primary-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Whitepaper
            </Link>
            <Link 
              href="/join" 
              className="btn-primary text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Join Now
            </Link>
          </div>
        </div>
      )}

      {/* Social Media Floating Buttons */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-40 hidden md:block">
        <a
          href="https://www.youtube.com/@RiseOfTrash"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black/50 hover:bg-primary-blue p-2 rounded-full transition-colors"
          aria-label="YouTube"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </a>
        <a
          href="https://x.com/riseoftrash"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black/50 hover:bg-primary-blue p-2 rounded-full transition-colors"
          aria-label="Twitter/X"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
        <a
          href="https://www.tiktok.com/@riseoftrash"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black/50 hover:bg-primary-blue p-2 rounded-full transition-colors"
          aria-label="TikTok"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
          </svg>
        </a>
        <a
          href="https://community.riseoftrash.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black/50 hover:bg-primary-blue p-2 rounded-full transition-colors"
          aria-label="Community"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm3.5 7c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm-7 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm3.501 10c-3.329 0-6.001-2.667-6.001-6h12c0 3.333-2.667 6-5.999 6z"/>
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
