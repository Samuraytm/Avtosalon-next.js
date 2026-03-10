'use client';
import Hero from './components/Hero/Hero';
import Advantages from './components/Advantages/advantages';
import Carmodel from './components/Carmodel/carmodel';
import Contacts from './components/Contacts/contacts';
import Map from './components/Map/Map';
import Image from 'next/image';
import News from './components/News/NewsHome';
import { useTranslation } from 'react-i18next';

export default function Home() {
  // Массив для сетки брендов
  const brands = Array(25).fill({ name: 'Volkswagen', logo: '/Logo.svg' });

  return (
    <main className="min-h-screen bg-[#121212]">
      
      {/* 1. Главный экран */}
      <Hero />


      {/* 2.Выбор моделей */}
      <section>
      <Carmodel />
      </section>
    {/* 3. Преимущества */}
      <section id="advantages-section">
        <Advantages />
      </section>

      {/* 4. Сетка брендов (Volkswagen и другие) */}
      {/* --- Секция Брендов --- */}
<section className="py-24 bg-[#121212] border-t border-white/5">
  <div className="max-w-[1200px] mx-auto px-6">
    
    {/* Мы используем стиль 'grid', чтобы принудительно сделать 5 колонок */}
    <div 
      className="grid gap-y-12 gap-x-6" 
      style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(5, 1fr)', // 5 равных колонок как на макете
        width: '100%' 
      }}
    >
      {brands.map((brand, index) => (
        <div 
          key={index} 
          className="flex items-center gap-4 group opacity-40 hover:opacity-100 transition-all duration-300 cursor-pointer"
        >
          {/* Контейнер для логотипа (обязательно задаем размер) */}
          <div className="w-8 h-8 relative flex-shrink-0">
            <Image 
              src="/Logo.svg" // Файл из твоей папки public
              alt="Brand Logo"
              fill
              className="object-contain brightness-200 grayscale group-hover:grayscale-0 transition-all"
            />
          </div>
          
          {/* Текст: делаем его заглавным с отступами (tracking) */}
          <span className="text-white text-[13px] font-light tracking-[0.2em] uppercase whitespace-nowrap">
            {brand.name}
          </span>
        </div>
      ))}
    </div>

  </div>
</section>
{/* ---Новсти --- */}
<section>
<News/>
</section>

      {/* 5. Контакты */}
      <div id="contacts-section">
        <Contacts />
      </div>

      {/* 6. Карта */}
      <Map />
    </main>
  );
}
