'use client';
import { LuArrowLeftRight, LuRefreshCw, LuBriefcase, LuInfo } from "react-icons/lu";
import { SectionTitle, SectionDesc } from '../UI/Typography'; // Импортируем твои новые компоненты
import Button from '../UI/Button'; // Если решишь использовать кнопку вместо ссылки <a>

const advantagesData = [
  {
    icon: <LuArrowLeftRight size={24} />,
    title: "Варианты Рассрочек",
    link: "/installments"
  },
  {
    icon: <LuRefreshCw size={24} />,
    title: "Обмен Вашего Авто В Trade-In",
    link: "/trade-in"
  },
  {
    icon: <LuBriefcase size={24} />,
    title: "Ассортимент Электроавто С Комплектующими",
    link: "/catalog"
  },
  {
    icon: <LuInfo size={24} />,
    title: "Помощь В Покупке И Продаже Авто",
    link: "/about"
  }
];

const Advantages = () => {
  return (
    <section className="bg-[#121212] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        {/* Красная зона из твоего макета */}
        <SectionTitle className="mb-6">Наши преимущества</SectionTitle>
        
        {/* Желтая зона из твоего макета */}
        <SectionDesc className="mx-auto">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </SectionDesc>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
        {advantagesData.map((item, index) => (
          <div 
            key={index} 
            className={`flex flex-col items-center p-10 text-center transition-all duration-300 group
              ${index !== advantagesData.length - 1 ? "lg:border-r border-gray-800" : ""} 
              hover:bg-white/5`}
          >
            {/* Иконка в круге */}
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-8 transition-transform group-hover:scale-110">
              <span className="text-white/80 group-hover:text-white transition-colors">
                {item.icon}
              </span>
            </div>

            {/* Заголовок карточки */}
            <h3 className="text-sm font-medium uppercase tracking-wider mb-8 h-12 flex items-center justify-center max-w-[200px]">
              {item.title}
            </h3>

            {/* Ссылка "Подробнее" (синяя, как на макете) */}
            <a 
              href={item.link} 
              className="text-blue-500 text-xs uppercase tracking-[0.2em] font-bold border-b border-transparent hover:border-blue-500 transition-all mt-auto"
            >
              Подробнее
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advantages;