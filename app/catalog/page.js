"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
// Убедитесь, что пути к Filter и data верны в вашей структуре проекта
import Filter from "../components/Filter/Filter"; 
import { cars } from "../data";

export default function CatalogPage() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [activeFilters, setActiveFilters] = useState({
    brand: "Все",
    drive: "Все",
    body: "Все"
  });

  // 1. Исправлена логика фильтрации: добавлена проверка на существование массива cars
  const filteredCars = useMemo(() => {
    if (!cars) return [];
    return cars.filter(car => {
      const brandMatch = activeFilters.brand === "Все" || car.brand === activeFilters.brand;
      const driveMatch = activeFilters.drive === "Все" || car.drive === activeFilters.drive;
      const bodyMatch = activeFilters.body === "Все" || car.body === activeFilters.body;
      return brandMatch && driveMatch && bodyMatch;
    });
  }, [activeFilters]);

  const displayedCars = useMemo(() => {
    return filteredCars.slice(0, visibleCount);
  }, [filteredCars, visibleCount]);

  return (
    <main className="min-h-screen bg-[#121212] pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="text-white/60 mb-8 text-sm">
          <Link href="/" className="hover:text-white transition">Главная</Link> 
          <span className="mx-2">/</span> 
          <span className="text-white">Каталог</span>
        </nav>

        {/* Фильтры */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 p-4 bg-[#1c1c1c] rounded-2xl border border-white/5">
            {['Tesla', 'BMW', 'Volkswagen', 'Все'].map(b => (
              <button 
                key={b}
                onClick={() => {
                    setActiveFilters(prev => ({...prev, brand: b}));
                    setVisibleCount(6); // Сбрасываем счетчик при смене фильтра
                }}
                className={`px-6 py-2 rounded-full transition text-sm ${activeFilters.brand === b ? 'bg-[#D9A962] text-black' : 'bg-white/5 text-white hover:bg-white/10'}`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        {/* Сетка машин */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCars.map((car) => (
            <Link 
              href={`/catalog/${car.id}`} 
              key={car.id}
              className="group bg-[#1c1c1c] rounded-3xl overflow-hidden border border-white/5 hover:border-[#D9A962]/50 transition-all duration-500"
            >
              <div className="relative h-[240px] w-full overflow-hidden">
                <Image
                  src={car.image || "/placeholder.png"} // Защита от отсутствия картинки
                  alt={`${car.brand || 'Авто'} ${car.model || ''}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#D9A962] text-black text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                  {car.type || "Luxury"}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{car.brand} {car.model}</h3>
                
                {/* ФИКС ОШИБКИ: Безопасный вызов toLocaleString() */}
                <p className="text-[#D9A962] font-semibold text-lg mb-4">
                  {car.price ? car.price.toLocaleString('ru-RU') : 'Цена по запросу'}$
                </p>
                
                <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4">
                  <div className="text-center">
                    <p className="text-white/40 text-[10px] uppercase">0-100</p>
                    <p className="text-white text-sm font-medium">{car.acceleration || '-'}с</p>
                  </div>
                  <div className="text-center border-x border-white/10">
                    <p className="text-white/40 text-[10px] uppercase">Запас</p>
                    <p className="text-white text-sm font-medium">{car.range || '-'}км</p>
                  </div>
                  <div className="text-center">
                    <p className="text-white/40 text-[10px] uppercase">Привод</p>
                    <p className="text-white text-sm font-medium">{car.drive || '-'}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Кнопка Показать еще */}
        {visibleCount < (filteredCars?.length || 0) && (
          <div className="mt-16 flex justify-center">
            <button 
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="px-12 py-4 border border-[#D9A962] text-[#D9A962] rounded-full uppercase text-xs font-bold tracking-[0.2em] hover:bg-[#D9A962] hover:text-black transition-all duration-300"
            >
              Ещё модели
            </button>
          </div>
        )}
      </div>
    </main>
  );
}