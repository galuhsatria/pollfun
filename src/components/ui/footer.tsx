import { Github } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 border-t">
      <div className="layout flex items-center justify-between">
        <p className="text-sm text-zinc-400">© {currentYear} Galuh Satria - All Right Reserved.</p>
        <Link href="/">
          <Github className='hover:bg-black hover:text-white rounded-full p-0.5 transition-all duration-200'/>
        </Link>
      </div>
    </footer>
  );
}
