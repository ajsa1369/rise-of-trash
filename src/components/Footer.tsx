'use client';

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black/80 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex flex-col items-center md:items-start">
              <Image
                src="/logo.svg"
                alt="Rise of Trash Logo"
                width={60}
                height={60}
                className="mb-4"
              />
              <h3 className="text-xl font-bold font-orbitron mb-4">RISE OF TRASH</h3>
            </Link>
            <p className="text-gray-400 mb-4 text-center md:text-left">
              Turning Scams Into Justice, Empowering Web3 Victims
            </p>
            <p className="text-primary-blue text-sm text-center md:text-left">
              Governed by UAE-Registered Rise of Trash DAO DAE
            </p>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4 text-center md:text-left">Navigation</h4>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/mission" className="text-gray-400 hover:text-primary-blue transition-colors">
                  Mission & Vision
                </Link>
              </li>
              <li>
                <Link href="/token" className="text-gray-400 hover:text-primary-blue transition-colors">
                  $TRASH Token
                </Link>
              </li>
              <li>
                <Link href="/tokenomics" className="text-gray-400 hover:text-primary-blue transition-colors">
                  Tokenomics
                </Link>
              </li>
              <li>
                <Link href="/governance" className="text-gray-400 hover:text-primary-blue transition-colors">
                  DAO Governance
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4 text-center md:text-left">Resources</h4>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <Link href="/staking" className="text-gray-400 hover:text-primary-blue transition-colors">
                  Staking
                </Link>
              </li>
              <li>
                <Link href="/referral" className="text-gray-400 hover:text-primary-blue transition-colors">
                  Referral System
                </Link>
              </li>
              <li>
                <Link href="/wall" className="text-gray-400 hover:text-primary-blue transition-colors">
                  Trash Wall
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="text-gray-400 hover:text-primary-blue transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="/whitepaper" className="text-gray-400 hover:text-primary-blue transition-colors">
                  Whitepaper
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4 text-center md:text-left">Connect</h4>
            <div className="flex justify-center md:justify-start space-x-4 mb-6">
              <a
                href="https://www.youtube.com/@RiseOfTrash"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-blue transition-colors"
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
                className="text-gray-400 hover:text-primary-blue transition-colors"
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
                className="text-gray-400 hover:text-primary-blue transition-colors"
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
                className="text-gray-400 hover:text-primary-blue transition-colors"
                aria-label="Community"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm3.5 7c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm-7 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm3.501 10c-3.329 0-6.001-2.667-6.001-6h12c0 3.333-2.667 6-5.999 6z"/>
                </svg>
              </a>
            </div>
            <div className="text-center md:text-left">
              <a
                href="https://nowpayments.io/donation/riseoftrash"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Donate
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Rise of Trash. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/disclaimer" className="text-gray-500 text-sm hover:text-primary-blue transition-colors">
                Disclaimer
              </Link>
              <Link href="/privacy" className="text-gray-500 text-sm hover:text-primary-blue transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 text-sm hover:text-primary-blue transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
