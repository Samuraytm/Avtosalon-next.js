'use client';
import { FaChevronDown } from 'react-icons/fa';
import Button from '../UI/Button';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const scrollToContent = () => {
    const nextSection = document.getElementById('advantages-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToModels = () => {
    const element = document.getElementById('models');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  const { t } = useTranslation();

  return (

    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Фоновое изображение из папки public */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
        style={{ backgroundImage: "url('/Car1.png')" }} 
      >
        {/* Затемнение для читаемости текста */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#121212]"></div>
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
        {/* Главный заголовок */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tight max-w-5xl leading-tight mb-4">
          Современные <br /> 
          <span className="text-gray-300">электрокары из китая</span>
        </h1>
        
        {/* Компонент кнопки */}
        <button 
        onClick={scrollToModels} 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
      >
        <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center">
          <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
            <path d="M1 1L6 6L11 1" stroke="white" strokeWidth="1.5" />
          </svg>
        </div>
      </button>

        {/* Анимированная стрелка вниз */}
        <div 
          onClick={scrollToContent}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 cursor-pointer group flex flex-col items-center"
        >
          <FaChevronDown className="text-white text-3xl opacity-60 animate-float transition-all duration-300 group-hover:opacity-100 group-hover:text-yellow-500 group-hover:scale-110" />
          <span className="text-[10px] text-white uppercase tracking-[0.3em] mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            Скролл
          </span>
        </div>
      </div>
    </section>
  );
}