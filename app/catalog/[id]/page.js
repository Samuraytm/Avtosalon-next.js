"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { cars } from "@/app/data";

export default function CarDetailPage() {
  const { id } = useParams();
  const car = cars.find(c => c.id === Number(id));

  if (!car) return <div className="text-white text-center py-40">Машина не найдена</div>;

  const specs = [
    { label: "Макс. скорость", value: `${car.speed} км/ч` },
    { label: "Разгон до 100", value: `${car.acceleration} с` },
    { label: "Привод", value: car.drive },
    { label: "Двигатель", value: car.type },
    { label: "Запас хода", value: `${car.range} км` },
    { label: "Вес", value: `${car.weight} кг` },
  ];

  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white pt-32 pb-20">
      <div className="container mx-auto px-4">
        <Link href="/catalog" className="text-[#D9A962] uppercase text-xs tracking-widest mb-10 inline-block hover:opacity-70">
          ← Назад в каталог
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Лево: Изображение */}
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10">
            <Image 
              src={car.image} 
              alt={car.model} 
              fill 
              className="object-cover"
              priority
            />
          </div>

          {/* Право: Инфо */}
          <div>
            <h1 className="text-5xl font-bold mb-4 uppercase">{car.brand}</h1>
            <h2 className="text-3xl text-white/60 mb-6 font-light">{car.model}</h2>
            <div className="inline-block px-4 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-[#D9A962] mb-8">
              Идеально для: {car.bestFor}
            </div>

            <div className="grid grid-cols-2 gap-y-8 gap-x-12">
              {specs.map((spec, i) => (
                <div key={i} className="border-b border-white/5 pb-4">
                  <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">{spec.label}</p>
                  <p className="text-xl font-medium">{spec.value}</p>
                </div>
              ))}
            </div>

            <button className="w-full mt-12 py-5 bg-[#D9A962] text-black font-bold uppercase tracking-widest rounded-xl hover:bg-[#b88f52] transition-all">
              Запросить предложение — {car.price.toLocaleString()}$
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}