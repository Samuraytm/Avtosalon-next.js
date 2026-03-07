import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
  return (
    /**
     * Контейнер на весь экран. 
     * fixed + z-[99999] перекрывает Header/Footer и любые внешние отступы.
     */
    <div className="fixed inset-0 z-[99999] w-full h-screen bg-[#0d0d0d] text-white overflow-hidden flex flex-col items-center justify-between py-12 md:py-20">
      
      {/* 1. ФОН: Глубокий градиент слева направо */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#0d0d0d] to-[#0d0d0d] pointer-events-none"></div>

      {/* 2. КОЛЕСО: Обрезано слева, полупрозрачное */}
      <div className="absolute -left-[20%] md:-left-[15%] lg:-left-[10%] top-1/2 -translate-y-1/2 opacity-20 pointer-events-none select-none">
        <Image
          src="/wheel.png"
          alt="Car wheel"
          width={1940}
          height={1024}
          priority
          className="w-auto h-auto object-contain mt-{3486px} ml-{-8727px} " 
        />
      </div>

      {/* Пустой блок для баланса flex-интервала сверху */}
      <div className="hidden md:block h-20"></div>

      {/* 3. КОНТЕНТ: Центрированный заголовок и текст */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        
        {/* Гигантское золотое число 404 */}
        <h1 className=" md:text-[240px] font-black leading-none tracking-tighter  text-[#D9A962] drop-shadow-[0_10px_60px_rgba(217,169,98,0.4)]" style={{fontSize:'400px',color:'#D9A962',textShadow:'0 10px 60px rgba(217,169,98,0.4)'}}>
          404
        </h1>

        <div className="mt-4 flex flex-col items-center gap-3">
          <h2 className="text-2xl md:text-4xl font-bold text-white/90 tracking-wide" style={{fontSize:'36px',color:'rgba(255,255,255,0.9)',letterSpacing:'0.05em', marginTop:'-56px'}}>
            Страница не найдена
          </h2>
          <p className="text-gray-400 max-w-[320px] md:max-w-md text-sm md:text-lg font-light italic opacity-80">
            Эта страница не найдена или её не существует
          </p>
        </div>
      </div>

      {/* 4. КНОПКА: Максимально низкое расположение с glow-эффектом */}
      <div className="relative z-10 w-full flex justify-center mt-12">
        <Link
          href="/"
          className="group relative inline-flex items-center justify-center px-14 py-4 rounded-full border border-[#D9A962] text-[#D9A962] font-bold text-[10px] uppercase tracking-[0.4em] transition-all duration-700 ease-in-out hover:bg-[#D9A962] hover:text-black hover:shadow-[0_0_50px_rgba(217,169,98,0.7)]" style={{boxShadow:'0 0 50px rgba(217,169,98,0.7)'}}
        >
          <span className="relative z-10">Вернуться на главную</span>
          
          {/* Блик внутри кнопки */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </Link>
      </div>

      {/* Виньетка для фокусировки взгляда на центр */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_30%,_rgba(0,0,0,0.5)_100%)]"></div>
    </div>
  )
}