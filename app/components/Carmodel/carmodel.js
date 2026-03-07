'use client';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const carData = {
  "Внедорожник": {
    name: "Audi e-tron Quattro",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.",
    img: "/Model.png" // Соответствует файлу в public
  },
  "Купе": {
    name: "BMW M5 CS",
    desc: "Эксклюзивная мощь и облегченная конструкция для идеального контроля на трассе.",
    img: "/Bmw-m5.png" // Соответствует файлу в public
  },
  "Седаны": {
    name: "Mercedes-Benz S-Class",
    desc: "Воплощение современной роскоши и высочайшего уровня комфорта в каждой детали.",
    img: "/model2.png" // Соответствует файлу в public
  },
  "Спортивный": {
    name: "McLaren 720S",
    desc: "Суперкар, созданный для того, чтобы расширять границы возможного.",
    img: "/Mclaren.png" // Соответствует файлу в public
  },
  "Кабриолет": {
    name: "Bentley Continental GTC",
    desc: "Путешествие под открытым небом с непревзойденной элегантностью.",
    img: "https://pngimg.com/d/bentley_PNG41.png"
  },
  "Роллс-Ройс": {
    name: "Rolls-Royce Spectre",
    desc: "Вершина электрической роскоши и тишины, переосмысленная для будущего.",
    img: "/rollsroyce.png" // Соответствует файлу в public
  }
};

const Carmodel = () => {
  const [selectedType, setSelectedType] = useState("Внедорожник");

  return (
    <section className="bg-[#121212] text-white py-20 px-6 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Описание слева */}
        <div className="lg:col-span-4 space-y-6">
          <h2 className="text-4xl font-semibold">Модели</h2>
          <div key={selectedType} className="animate-in fade-in duration-500">
            <h3 className="text-xl font-bold mb-2">{carData[selectedType].name}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {carData[selectedType].desc}
            </p>
          </div>
        </div>

        {/* Изображение в центре */}
        <div className="lg:col-span-5 relative flex justify-center py-10">
          <div className="absolute w-[120%] h-[40%] bg-white/5 blur-[100px] rounded-full top-1/2 -translate-y-1/2"></div>
          <div key={selectedType + "img"} className="relative z-10 animate-in fade-in zoom-in duration-700">
            <img 
              src={carData[selectedType].img} 
              alt={carData[selectedType].name}
              className="w-full h-auto object-contain max-h-[350px]"
              onError={(e) => { e.target.src = 'https://via.placeholder.com/600x300/121212/ffffff?text=Image+Not+Found'; }}
            />
          </div>
        </div>

        {/* Меню справа */}
        <div className="lg:col-span-3 flex flex-col items-end space-y-3">
          {Object.keys(carData).map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`text-xl transition-all flex items-center gap-3 ${
                selectedType === type ? "text-white font-bold" : "text-gray-600 hover:text-gray-400"
              }`}
            >
              {type}
              <div className={`h-[2px] bg-yellow-600 transition-all ${selectedType === type ? "w-10" : "w-0"}`} />
            </button>
          ))}
          {/* Неактивные пункты */}
          {["Хэтчбек", "Универсалы", "Микро автобусы"].map(item => (
            <p key={item} className="text-xl text-gray-800 cursor-default">{item}</p>
          ))}
        </div>

        {/* Кнопка внизу */}
        <div className="lg:col-span-12 flex justify-center mt-10">
          <button className="flex flex-col items-center group gap-2">
            <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              <FaPlus size={14} />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-gray-500">Узнать больше</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carmodel;