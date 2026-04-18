'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-surface/95 border-b border-surface-container-high backdrop-blur-lg shadow-[0px_24px_48px_rgba(0,0,0,0.4)]">
        <div className="flex justify-between items-center w-full px-4 md:px-12 py-4 md:py-6 max-w-[1920px] mx-auto">
          <Link href="/" className="flex items-center gap-2 md:gap-4" onClick={closeMobileMenu}>
            <Image
              src="/logo1.png"
              alt="Larenj International Logo"
              width={50}
              height={50}
              className="rounded md:w-[70px] md:h-[70px]"
            />
            <span className="text-base md:text-2xl font-headline font-bold text-primary tracking-tighter">
              Larenj International
            </span>
          </Link>
          <div className="flex flex-1 flex-wrap justify-end gap-4 items-center">
            <Link className="text-white font-medium hover:text-primary transition-all duration-300" href="/consulting">
              Consulting
            </Link>
            <Link className="text-white font-medium hover:text-primary transition-all duration-300" href="/immigration">
              Immigration
            </Link>
            <Link className="text-white font-medium hover:text-primary transition-all duration-300" href="/employment">
              Employment
            </Link>
            <Link className="text-white font-medium hover:text-primary transition-all duration-300" href="/careers">
              Careers
            </Link>
            <Link className="text-white font-medium hover:text-primary transition-all duration-300" href="/publications">
              Publications
            </Link>
            <Link className="text-white font-medium hover:text-primary transition-all duration-300" href="/about">
              About
            </Link>
            <Link className="text-white font-medium hover:text-primary transition-all duration-300" href="/contact">
              Contact
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white p-2 hover:text-primary transition-colors"
              aria-label="Toggle mobile menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu Panel */}
      <div className={`fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-surface z-50 transform transition-transform duration-300 ease-in-out md:hidden shadow-2xl ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full pt-24 pb-8 px-6">
          <div className="flex flex-col gap-6">
            <Link
              className="text-on-surface font-medium hover:text-primary transition-all duration-300 py-3 border-b border-outline-variant/20"
              href="/consulting"
              onClick={closeMobileMenu}
            >
              Consulting
            </Link>
            <Link
              className="text-on-surface font-medium hover:text-primary transition-all duration-300 py-3 border-b border-outline-variant/20"
              href="/immigration"
              onClick={closeMobileMenu}
            >
              Immigration
            </Link>
            <Link
              className="text-on-surface font-medium hover:text-primary transition-all duration-300 py-3 border-b border-outline-variant/20"
              href="/employment"
              onClick={closeMobileMenu}
            >
              Employment
            </Link>
            <Link
              className="text-on-surface font-medium hover:text-primary transition-all duration-300 py-3 border-b border-outline-variant/20"
              href="/careers"
              onClick={closeMobileMenu}
            >
              Careers
            </Link>
            <Link
              className="text-on-surface font-medium hover:text-primary transition-all duration-300 py-3 border-b border-outline-variant/20"
              href="/publications"
              onClick={closeMobileMenu}
            >
              Publications
            </Link>
            <Link
              className="text-on-surface font-medium hover:text-primary transition-all duration-300 py-3 border-b border-outline-variant/20"
              href="/about"
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <Link
              className="text-on-surface font-medium hover:text-primary transition-all duration-300 py-3 border-b border-outline-variant/20"
              href="/contact"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </div>

          {/* Mobile CTA */}
          <div className="mt-auto">
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="block w-full bg-primary text-on-primary text-center py-4 rounded-md font-bold hover:bg-primary/90 transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}