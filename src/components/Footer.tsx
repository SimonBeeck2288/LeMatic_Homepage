'use client';
import { Mail, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="py-20 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-md">
          <h2 className="text-4xl font-bold uppercase tracking-tighter mb-6">LeMatic</h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            Wir bringen eure Events und Festivals auf den Bildschirm. Hochwertige Videoproduktion mit Leidenschaft für den Moment.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube /></a>
            <a href="mailto:info@lematic.de" className="text-gray-400 hover:text-white transition-colors"><Mail /></a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-16 uppercase tracking-widest text-xs font-bold">
          <div className="flex flex-col gap-4">
            <span className="text-gray-600">Kontakt</span>
            <a href="mailto:info@lematic.de" className="hover:text-gray-400 transition-colors">info@lematic.de</a>
            <span>Berlin, DE</span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-gray-600">Rechtliches</span>
            <a href="#" className="hover:text-gray-400 transition-colors">Impressum</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-gray-700 font-bold">
        <span>© 2024 LeMatic Videoproduction</span>
        <span>Built by Opencode</span>
      </div>
    </footer>
  );
}
