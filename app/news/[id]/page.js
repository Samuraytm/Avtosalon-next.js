import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// Данные (обычно приходят из БД или API, здесь для примера)
const newsData = [
  { id: 1, title: "Инновации в дизайне кузова", date: "22 Май 2022", image: "/News-1.png" },
  { id: 2, title: "Будущее электромобилей", date: "22 Май 2022", image: "/News-3.png" },
  { id: 3, title: "Новый стандарт комфорта", date: "22 Май 2022", image: "/News-1.png" }
];

// В Next.js 15 params — это Promise. Делаем функцию асинхронной.
export default async function NewsItemPage({ params }) {
  const { id } = await params; // Ждем получения id из параметров
  
  const item = newsData.find(n => n.id === Number(id));

  // Если новость не найдена, показываем стандартную 404
  if (!item) {
    notFound();
  }

  // Похожие новости (исключая текущую)
  const similarNews = newsData.filter(n => n.id !== Number(id));

  return (
    <main className="bg-[#0d0d0d] min-h-screen pt-32 pb-24 text-white">
      <div className="max-w-[1200px] mx-auto px-4">
        
        {/* Breadcrumbs */}
        <nav className="flex gap-2 text-[10px] text-gray-500 mb-16 uppercase tracking-[0.3em] font-light">
          <Link href="/" className="hover:text-white transition-colors">Главная</Link> 
          <span>/</span> 
          <Link href="/news" className="hover:text-white transition-colors">Новости</Link>
        </nav>

        {/* --- ПЕРВЫЙ БЛОК: Фото СЛЕВА, Текст СПРАВА --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-32">
          <div className="relative w-full aspect-[16/11] bg-[#1a1a1a]">
            <Image 
              src={item.image} 
              fill 
              className="object-cover" 
              alt={item.title} 
              priority 
            />
          </div>
          
          <div className="flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tight leading-tight">
                {item.title}
              </h1>
              <button className="text-gray-500 hover:text-white transition-all text-[10px] uppercase tracking-widest flex items-center gap-2 italic">
                Поделиться <span className="rotate-[-45deg] inline-block text-lg">→</span>
              </button>
            </div>
            
            <p className="text-[#D9A962] text-[10px] uppercase font-bold tracking-[0.4em] mb-8">
              {item.date}
            </p>
            
            <p className="text-gray-300 text-lg font-light leading-relaxed italic opacity-90">
              Каждый элемент дизайна этого автомобиля был переосмыслен для достижения максимальной аэродинамики. 
              Инженеры Hadid сосредоточились на деталях, которые обычно остаются незамеченными.
            </p>
          </div>
        </section>

        {/* --- ВТОРОЙ БЛОК: Текст СЛЕВА, Фото СПРАВА (Шахматка) --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-40">
          <div className="order-2 lg:order-1">
            <p className="text-gray-300 text-base md:text-lg font-light leading-loose opacity-80">
              Внутреннее пространство салона выполнено из премиальных материалов, подчеркивающих статус владельца. 
              Сиденья с анатомической поддержкой обеспечивают комфорт в длительных поездках, а интеллектуальная 
              система мультимедиа подстраивается под ваши предпочтения.
              <br /><br />
              Технологии безопасности нового поколения теперь входят в базовую комплектацию каждой модели.
            </p>
          </div>
          
          <div className="relative w-full aspect-[16/11] bg-[#1a1a1a] order-1 lg:order-2">
            <Image 
              src="/News-3.png" 
              fill 
              className="object-cover" 
              alt="Interior detail" 
            />
          </div>
        </section>

        {/* --- ТРЕТИЙ БЛОК: ПОХОЖИЕ НОВОСТИ --- */}
        <section className="pt-20 border-t border-white/10">
          <h2 className="text-2xl md:text-3xl font-medium text-center mb-16 uppercase tracking-[0.3em]">
            Похожие новости
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {similarNews.map((similar) => (
              <Link href={`/news/${similar.id}`} key={similar.id} className="group flex flex-col">
                <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden">
                  <Image 
                    src={similar.image} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110" 
                    alt={similar.title} 
                  />
                </div>
                
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-bold uppercase text-lg truncate pr-2">{similar.title}</h4>
                  <span className="text-gray-500 text-[9px] uppercase whitespace-nowrap">{similar.date}</span>
                </div>
                
                <div className="text-[#3B82F6] text-[10px] font-bold uppercase flex items-center gap-1 group-hover:gap-3 transition-all">
                  Подробнее <span className="text-sm">→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}