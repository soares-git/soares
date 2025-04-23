"use client";

import { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { Transition, Menu } from "@headlessui/react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const menuItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Company", href: "#company" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* PC */}
      <header className={`fixed w-full top-0 z-40 transition-colors duration-300 ${scrolled ? 'bg-black bg-opacity-80' : 'bg-transparent'} md:block hidden`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex-1 flex justify-center md:justify-start">
              <Link href="/" className="text-white hover:opacity-80 transition-opacity duration-300">
                <Image 
                  src="/logo_w.png" 
                  alt="Soares Logo" 
                  width={120} 
                  height={40} 
                  className="object-contain"
                />
              </Link>
            </div>
            
            <nav className="flex space-x-8">
              {menuItems.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href} 
                  className="text-white hover:text-blue-200 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* スマホ用ヘッダー */}
      <header className={`fixed w-full top-0 z-40 transition-colors duration-300 ${scrolled ? 'bg-black bg-opacity-80' : 'bg-transparent'} md:hidden`}>
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-start items-center">
            <Link href="/" className="text-white hover:opacity-80 transition-opacity duration-300">
              <Image 
                src="/logo_w.png" 
                alt="Soares Logo" 
                width={100} 
                height={33} 
                className="object-contain"
              />
            </Link>
          </div>
        </div>
      </header>

      {/* スマホ用ハンバーガーメニュー */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <Menu as="div" className="relative">
          {({ open }) => (
            <>
              <Menu.Button 
                className="text-white hover:text-blue-200 transition-colors duration-300 focus:outline-none w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-lg"
                aria-label="メニューを開く"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {open ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right bg-gray-100 divide-y divide-gray-300 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                  <div className="py-1">
                    {menuItems.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <Link
                            href={item.href}
                            className={`${active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'} block px-4 py-2 text-sm`}
                          >
                            {item.name}
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    </>
  );
}
