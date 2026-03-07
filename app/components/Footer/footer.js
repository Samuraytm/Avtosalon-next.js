// app/components/Footer.js
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#121212] py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Логотип по центру */}
        <div className="mb-8">
          <Image src="/logo.svg" alt="HADID" width={120} height={40} />
        </div>

        {/* Навигация */}
        <nav className="flex flex-wrap justify-center gap-8 text-sm text-gray-400 uppercase tracking-widest">
          <Link href="/" className="hover:text-white transition-colors">Модели</Link>
          <Link href="/news" className="hover:text-white transition-colors">Блог</Link>
          <Link href="/about" className="hover:text-white transition-colors">О нас</Link>
          <Link href="/service" className="hover:text-white transition-colors">Сервис</Link>
          <Link href="/contacts" className="hover:text-white transition-colors">Связаться с нами</Link>
        </nav>
        
        <div className="mt-8 text-[10px] text-gray-600 uppercase">
          © 2026 HADID. All rights reserved.
        </div>
      </div>
    </footer>
  );
}