import { FaYoutube, FaInstagram, FaTelegramPlane, FaMapMarkerAlt, FaClock, FaPhoneAlt } from 'react-icons/fa';

const Contacts = () => {
  return (
    <section className="bg-[#121212] text-white py-16 px-4 md:px-20 lg:flex items-stretch">
      {/* Левая часть: Форма */}
      <div className="lg:w-1/2 flex flex-col justify-center pr-0 lg:pr-12">
        <h2 className="text-4xl font-bold mb-6">Связаться с нами</h2>
        <p className="text-gray-400 mb-10 max-w-md">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit mollit.
        </p>

        <form className="space-y-8">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Ваше имя" 
              className="w-full bg-transparent border-b border-gray-600 py-2 outline-none focus:border-white transition-colors placeholder:text-gray-500"
            />
          </div>

          <div className="relative flex items-center">
            <span className="mr-2 text-gray-400">+998</span>
            <input 
              type="tel" 
              placeholder="Введите номер телефона" 
              className="w-full bg-transparent border-b border-gray-600 py-2 outline-none focus:border-white transition-colors placeholder:text-gray-500"
            />
          </div>

          <div className="relative">
            <input 
              type="text" 
              placeholder="Сообщения" 
              className="w-full bg-transparent border-b border-gray-600 py-2 outline-none focus:border-white transition-colors placeholder:text-gray-500"
            />
          </div>

          <button className="btn btn-outline border-yellow-600 text-white hover:bg-yellow-600 hover:border-yellow-600 rounded-full px-12 mt-4 normal-case font-normal">
            Отправить
          </button>
        </form>
      </div>

      {/* Правая часть: Информация */}
      <div className="lg:w-1/2 mt-16 lg:mt-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-8 md:p-12 relative overflow-hidden">
        {/* Декоративный элемент (квадрат сверху) */}
        <div className="absolute top-0 left-0 w-8 h-8 bg-gray-400 opacity-50 transform -translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="space-y-10 relative z-10">
          {/* Адрес */}
          <div className="flex gap-4">
            <FaMapMarkerAlt className="text-2xl mt-1 opacity-70" />
            <div>
              <h4 className="font-bold mb-1">Наше адрес:</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Сергелийский район, ТКАД. Ориентир: Мост Сергели
              </p>
            </div>
          </div>

          {/* График */}
          <div className="flex gap-4">
            <FaClock className="text-2xl mt-1 opacity-70" />
            <div>
              <h4 className="font-bold mb-1">Рабочий график:</h4>
              <p className="text-gray-400 text-sm">ПН - ПТ: с 09:00 до 20:00</p>
              <p className="text-gray-400 text-sm">СБ - ВС: с 10:00 до 20:00</p>
            </div>
          </div>

          {/* Телефон */}
          <div className="flex gap-4">
            <FaPhoneAlt className="text-2xl mt-1 opacity-70" />
            <div>
              <h4 className="font-bold mb-1">Отдел продаж:</h4>
              <p className="text-gray-400 text-sm">+998 93 335 40 18</p>
              <p className="text-gray-400 text-sm">+998 93 335 40 18</p>
            </div>
          </div>

          {/* Соцсети */}
          <div className="flex gap-6 pt-6">
            <a href="#" className="hover:text-yellow-600 transition-colors"><FaYoutube size={24} /></a>
            <a href="#" className="hover:text-yellow-600 transition-colors"><FaInstagram size={24} /></a>
            <a href="#" className="hover:text-yellow-600 transition-colors"><FaTelegramPlane size={24} /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;