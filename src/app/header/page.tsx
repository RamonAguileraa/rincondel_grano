"use client"

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Coffee, Menu as MenuIcon, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const menuItems = [
    { name: "Inicio", href: "#home" },
    { name: "Sobre Nosotros", href: "#about" },
    { name: "Menú", href: "/menu" },
    { name: "Reservas", href: "#reservations" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <header className="fixed w-full bg-[#36413E] text-[#FCFDAF] py-4 shadow-md z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Coffee className="h-8 w-8 text-[#d4a574]" />
          <span className="text-2xl font-bold">El Rincón del Grano</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.href} className="hover:text-[#d4a574] transition-colors relative group">
              <span>{item.name}</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#d4a574] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
            {isMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-[#36413E]/90 z-40 flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <nav className="flex flex-col items-center space-y-6">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-2xl text-[#FCFDAF] hover:text-[#d4a574] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
}
