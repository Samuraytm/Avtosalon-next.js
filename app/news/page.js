'use client';

import Link from 'next/link';
import Image from 'next/image';

const newsData = [
  { id: 1, title: "Инновации в дизайне кузова", date: "22 Май 2022", image: "/News-1.png" },
  { id: 2, title: "Title", date: "22 Май 2022", image: "/News-3.png" },
  { id: 3, title: "Title", date: "22 Май 2022", image: "/News-1.png" }
];

export default function NewsPage() {
  return (
    <main className="bg-[#121212] min-h-screen pt-32 pb-24 text-white">
      <div className="max-w-[1200px] mx-auto px-4">
        
        {/* Хлебные крошки */}
        <nav className="flex gap-2 text-[10px] text-gray-500 mb-16 uppercase tracking-[0.3em] font-light">
          <Link href="/" className="hover:text-white transition-colors">Главная</Link> 
          <span>/</span> 
          <span className="text-white">Новости</span>
        </nav>

        {/* --- ПОСЛЕДНИЕ НОВОСТИ --- */}
        <section className="mb-48">
          <h1 className="text-3xl font-medium text-center mb-16 uppercase tracking-[0.25em]">
            Последние новости
          </h1>
          
          {/* Используем Grid вместо Flex для точности размеров */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsData.map((item) => (
              <div key={item.id} className="flex flex-col w-full max-w-[387px] mx-auto">
                <div className="relative w-full h-[373px] mb-6 overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-xl font-bold uppercase tracking-tight">{item.title}</h3>
                  <span className="text-gray-500 text-[10px] uppercase">{item.date}</span>
                </div>

                <p className="text-gray-400 text-sm font-light leading-relaxed mb-6 line-clamp-2">
                Каждый элемент дизайна этого автомобиля был переосмыслен для достижения максимальной аэродинамики. Инженеры Hadid сосредоточились на деталях, которые обычно остаются незамеченными..
                </p>

                <Link href={`/news/${item.id}`} className="text-[#3B82F6] flex items-center gap-2 text-[11px] font-bold uppercase w-fit hover:gap-3 transition-all">
                  Подробнее <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* --- ВСЕ НОВОСТИ --- */}
        <section style={{ marginTop: "200px" }}> 
          <h2 className="text-3xl font-medium text-center mb-16 uppercase tracking-[0.25em]">
            Все новости
          </h2>
          
          <div className="flex flex-col gap-12 max-w-[850px] mx-auto">
            {[...newsData, ...newsData].map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col md:flex-row gap-10 items-start border-b border-white/5 pb-12 last:border-0"
              >
                {/* Фиксированный размер для списка */}
                <div className="relative w-full md:w-[387px] h-[373px] shrink-0 overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col pt-2 justify-center h-full">
                  <h3 className="text-xl font-bold uppercase mb-1">{item.title}</h3>
                  <div className="text-gray-500 text-[10px] uppercase mb-8 tracking-widest">{item.date}</div>
                  
                  <p className="text-gray-400 text-sm font-light leading-relaxed mb-8">
                  Внутреннее пространство салона выполнено из премиальных материалов, подчеркивающих статус владельца. Сиденья с анатомической поддержкой обеспечивают комфорт в длительных поездках, а интеллектуальная система мультимедиа подстраивается под ваши предпочтения.

Технологии безопасности нового поколения теперь входят в базовую комплектацию каждой модели..
                  </p>

                  <Link href={`/news/${item.id}`} className="text-[#3B82F6] flex items-center gap-2 text-[11px] font-bold uppercase w-fit hover:gap-3 transition-all">
                    Подробнее <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Кнопка внизу */}
        <div className="flex justify-center mt-24">
          <button className="px-16 py-4 border border-[#D9A962] rounded-full text-[11px] text-[#D9A962] uppercase tracking-[0.3em] font-bold hover:bg-[#D9A962] hover:text-black transition-all duration-300">
            Посмотреть еще
          </button>
        </div>
      </div>
    </main>
  );
}