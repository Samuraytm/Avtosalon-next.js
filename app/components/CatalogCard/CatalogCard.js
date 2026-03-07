import React from "react";

function CatalogCard({car} ) {
  console.log(car)
  return (
    <div className="bg-[#1a1a1a] p-6 rounded-lg border border-white/10">
      <p className="text-blue-400 text-sm mb-4">Электрический</p>

      <img src="/ddddd 1.svg" alt={car.name} className="w-full mb-4" />

      <h3 className="text-white text-xl font-bold text-center">{car.name}</h3>
      <p className="text-green-500 text-center mt-2">
        {car.price ? `${car.price}$` : "По запросу"}
      </p>

      <div className="grid grid-cols-3 gap-2 mt-6 pt-4 border-t border-white/10 text-center text-white">
        <div>
          <div className="font-bold">{car.acceleration}s</div>
          <div className="text-[10px] text-gray-500">0-100км/ч</div>
        </div>
        <div className="border-x border-white/10">
          <div className="font-bold">{car.range}км</div>
          <div className="text-[10px] text-gray-500">Запас хода</div>
        </div>
        <div>
          <div className="font-bold">{car.power} KW</div>
          <div className="text-[10px] text-gray-500">Мощность</div>
        </div>
      </div>
    </div>
  );
}

export default CatalogCard;
