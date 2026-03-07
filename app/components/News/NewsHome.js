'use client';
import { SectionTitle, SectionDesc } from '../UI/Typography';

const newsHomeData = [
  { id: 1, title: "Title", date: "22 Май 2022", image: "/News-1.png" },
  { id: 2, title: "Title", date: "22 Май 2022", image: "/News-2.png" },
  { id: 3, title: "Title", date: "22 Май 2022", image: "/News-3.png" }
];

export default function NewsHome() {
  return (
    <section className="py-24 bg-[#121212]">
      {/* 1. Ограничиваем ширину всей секции */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        <div className="text-center mb-16">
          <SectionTitle className="mb-6">Новости</SectionTitle>
          <SectionDesc className="mx-auto">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          </SectionDesc>
        </div>

        {/* 2. Жесткая сетка через Style */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '30px' 
        }}>
          {newsHomeData.map((item) => (
            <div key={item.id} style={{ display: 'flex', flexDirection: 'column' }}>
              
              {/* 3. Фиксированная высота картинки */}
              <div style={{ 
                width: '100%', 
                height: '300px', 
                overflow: 'hidden', 
                marginBottom: '20px' 
              }}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div className="flex justify-between items-center mb-4">
                <h3 className="text-white text-xl font-bold uppercase">{item.title}</h3>
                <span className="text-gray-500 text-[10px] uppercase">{item.date}</span>
              </div>

              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}