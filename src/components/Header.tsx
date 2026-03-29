'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10 px-6 py-4 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/Lematic_Logo.png" alt="LeMatic Logo" width={150} height={40} className="object-contain" />
      </Link>

      <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium">
        <Link href="#projects" className="hover:text-gray-400 transition-colors">Kunden</Link>
        <Link href="#bts" className="hover:text-gray-400 transition-colors">BTS</Link>
        <Link href="#contact" className="hover:text-gray-400 transition-colors">Kontakt</Link>
      </div>

      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-b border-white/10 flex flex-col items-center py-6 gap-6 md:hidden">
          <Link href="#projects" onClick={() => setIsOpen(false)} className="uppercase tracking-widest">Kunden</Link>
          <Link href="#bts" onClick={() => setIsOpen(false)} className="uppercase tracking-widest">BTS</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)} className="uppercase tracking-widest">Kontakt</Link>
        </div>
      )}
    </nav>
  );
}
