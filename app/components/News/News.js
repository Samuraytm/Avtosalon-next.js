'use client';
import Image from 'next/image';

const newsData = [
  { id: 1, title: "Title", date: "22 Май 2022", image: "/News-1.png" },
  { id: 2, title: "Title", date: "22 Май 2022", image: "/News-2.png" },
  { id: 3, title: "Title", date: "22 Май 2022", image: "/News-3.png" }
];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-[#121212] pt-32 pb-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. Хлебные крошки */}
        <nav className="text-sm text-gray-500 mb-12">
          <span className="hover:text-white cursor-pointer transition-colors">Главная</span>
          <span className="mx-2">/</span>
          <span className="text-white">Новости</span>
        </nav>

        {/* 2. Секция: Последние новости */}
        <section className="mb-32">
          <h1 className="text-4xl font-medium text-center mb-16">Последние новости</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {newsData.map((item) => (
              <div key={item.id} className="group flex flex-col">
                <div className="relative w-full aspect-square mb-6 overflow-hidden bg-gray-900">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-2xl font-bold uppercase">{item.title}</h3>
                  <span className="text-gray-500 text-xs">{item.date}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                  Velit officia consequat duis enim velit mollit.
                </p>
                <button className="text-[#3B82F6] flex items-center gap-2 text-sm font-medium hover:gap-4 transition-all w-fit">
                  Подробнее <span className="text-xl">→</span>
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Секция: Все новости (вертикальный список) */}
        <section>
          <h2 className="text-4xl font-medium text-center mb-16">Все новости</h2>
          
          <div className="flex flex-col gap-16 max-w-5xl mx-auto">
            {[...newsData, ...newsData].map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-10 group items-start">
                {/* Картинка слева */}
                <div className="w-full md:w-[450px] aspect-[16/10] shrink-0 overflow-hidden bg-gray-900">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Текст справа */}
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold mb-1 uppercase">{item.title}</h3>
                  <div className="text-gray-500 text-xs mb-4">{item.date}</div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                    Velit officia consequat duis enim velit mollit. Amet minim mollit non 
                    deserunt ullamco est sit aliqua dolor do amet sint.
                  </p>
                  <button className="text-[#3B82F6] flex items-center gap-2 text-sm font-medium hover:gap-4 transition-all">
                    Подробнее <span className="text-xl">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Кнопка в самом низу */}
          <div className="flex justify-center mt-20">
            <button className="px-12 py-3 border border-gray-700 rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              Посмотреть еще
            </button>
          </div>
        </section>

      </div>
    </main>
  );
}