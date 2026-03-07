'use client';

import Link from 'next/link';

const newsData = [
  { id: 1, title: "Title", date: "22 Май 2022", image: "/News-1.png" },
  { id: 2, title: "Title", date: "22 Май 2022", image: "/News-3.png" },
  { id: 3, title: "Title", date: "22 Май 2022", image: "/News-1.png" }
];

export default function NewsPage() {
  return (
    <main className="bg-[#121212] min-h-screen pt-12 pb-24 text-white">
      <div className="max-w-[1200px] mx-auto px-4">
        
        {/* ТЕПЕРЬ ЭТО ЛИНКИ */}
        <nav className="flex gap-2 text-[10px] text-gray-500 mb-16 uppercase tracking-widest font-light">
          <Link href="/" className="hover:text-white transition-colors">Главная</Link> 
          <span>/</span> 
          <Link href="/news" className="text-white">Новости</Link>
        </nav>

        {/* --- ПОСЛЕДНИЕ НОВОСТИ --- */}
        <section className="mb-32">
          <h1 className="text-3xl font-medium text-center mb-16 uppercase tracking-[0.2em]">
            Последние новости
          </h1>
          
          <div className="flex flex-row justify-center gap-6">
            {newsData.map((item) => (
              <div key={item.id} className="flex flex-col w-[387px]">
                <img src={item.image} className="w-[387px] h-[373px] object-cover mb-6" alt="" />
                
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-xl font-bold uppercase">{item.title}</h3>
                  <span className="text-gray-500 text-[10px] uppercase">{item.date}</span>
                </div>

                <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                  Velit officia consequat duis enim velit mollit.
                </p>

                <Link href={`/news/${item.id}`} className="text-[#3B82F6] flex items-center gap-2 text-[11px] font-bold uppercase w-fit hover:gap-3 transition-all">
                  Подробнее <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* --- ВСЕ НОВОСТИ --- */}
        <section className="" style={{marginTop: "200px"}}> 
          <h2 className="text-3xl font-medium text-center mb-16 uppercase tracking-[0.2em]">
            Все новости
          </h2>
          
          <div className="flex flex-col justify-center items-center gap-10 max-w-[900px] mx-auto">
            {[...newsData, ...newsData].map((item, index) => (
              <div key={index} className="flex  justify-center items-center flex-row gap-10 items-start maxborder-b border-white/5 pb-10 last:border-0" style={{maxWidth:"794px"}}>
                <img src={item.image} className="w-[387px] h-[373px] object-cover shrink-0" alt="" />

                <div className="flex flex-col pt-2">
                  <h3 className="text-xl font-bold uppercase mb-1">{item.title}</h3>
                  <div className="text-gray-500 text-[10px] uppercase mb-8">{item.date}</div>
                  
                  <p className="text-gray-400 text-sm font-light leading-relaxed mb-8">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                    Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt 
                    ullamco est sit aliqua dolor do amet sint.
                  </p>

                  <Link href={`/news/${item.id}`} className="text-[#3B82F6] flex items-center gap-2 text-[11px] font-bold uppercase w-fit">
                    Подробнее <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="flex justify-center mt-20">
          <button className="px-14 py-3 border border-[#D9A962] rounded-full text-[10px] text-[#D9A962] uppercase tracking-widest hover:bg-[#D9A962] hover:text-black transition-all">
            Посмотреть еще
          </button>
        </div>
      </div>
    </main>
  );
}