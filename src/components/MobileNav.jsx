import { NavLink } from 'react-router-dom';
import useScrollLock from '../hooks/useScrollLock';

export default function MobileNav({ isOpen, setIsOpen, navLinks  }){
useScrollLock(isOpen);

  return (
    <div
      className={`fixed inset-0 bg-primary-1 z-50 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 md:hidden`}
    >
      <div className="flex justify-end p-4">
        <button onClick={() => setIsOpen(false)} className="text-accent">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav className="flex flex-col items-center space-y-6 mt-10">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `text-2xl text-accent hover:text-secondary-1 ${
                isActive ? 'text-secondary-1 font-semibold' : ''
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}