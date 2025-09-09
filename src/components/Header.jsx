import {  NavLink } from 'react-router-dom'

import MobileNav from './MobileNav'
import { useState } from 'react'
import logo from "../assets/agurchu_white.png";


 const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/about', label: 'About' },
    { to: '/team', label: 'Team' },
    { to: '/booking', label: 'Booking' },
    { to: '/contact', label: 'Contact' },
  ];


export default function Header(){

const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

return (
 <header className="sticky top-0 z-50 bg-primary-1/95 backdrop-blur-sm border-b border-secondary-2/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        <img src={logo} alt="Agurchu Media Logo" className="h-9" />
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-accent hover:text-secondary-1 transition-colors ${
                  isActive ? 'text-secondary-1 font-semibold' : ''
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <button
          className="md:hidden text-accent"
          onClick={() => setIsMobileNavOpen(true)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <MobileNav isOpen={isMobileNavOpen} setIsOpen={setIsMobileNavOpen} navLinks={navLinks} />
    </header>
  );
}