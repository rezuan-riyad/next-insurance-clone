"use client"

import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string|null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems = {
    Coverage: ['Auto Insurance', 'Home Insurance', 'Life Insurance', 'Business Insurance'],
    Resources: ['Blog', 'Guides', 'FAQ', 'Knowledge Base'],
    'Partner with us': ['Become an Agent', 'Affiliate Program', 'Business Partnerships'],
    'About us': ['Our Story', 'Team', 'Careers', 'Press'],
    Support: ['Contact Us', 'Help Center', 'Claims', 'Emergency Service']
  };

  const handleClick = (title:string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm px-8 py-4 flex justify-between items-center">
      <div className="flex items-center gap-8">
        <div className="text-xl font-bold">Logo</div>
        <div className="flex gap-6" ref={dropdownRef}>
          {Object.entries(navItems).map(([title, items]) => (
            <div
              key={title}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(title)}
              // onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => handleClick(title)}
                className="flex items-center gap-1 hover:text-gray-600">
                {title}
                <ChevronDown size={16} className={`transition-transform duration-200 ${
                  activeDropdown === title ? 'rotate-180' : ''
                }`} />
              </button>
              
              {activeDropdown === title && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                  {items.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex gap-4">
        <button className="px-4 py-2 text-gray-600 hover:text-gray-800">
          Login
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Get a Quote
        </button>
      </div>
    </nav>
  );
}

export default Navbar;