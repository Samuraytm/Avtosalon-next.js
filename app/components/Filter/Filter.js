import React from "react";

function Filter() {
  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-sm text-white/80">Результат фильтра:</span>

          <button className="flex items-center gap-2 rounded-full border border-[#C9A24C] bg-transparent px-3 py-1 text-xs text-white/80 hover:text-white transition">
            <span>Задний</span>
            <span className="text-[#C9A24C] leading-none">×</span>
          </button>

          <button className="flex items-center gap-2 rounded-full border border-[#C9A24C] bg-transparent px-3 py-1 text-xs text-white/80 hover:text-white transition">
            <span>Седан</span>
            <span className="text-[#C9A24C] leading-none">×</span>
          </button>

          <button className="flex items-center gap-2 rounded-full border border-[#C9A24C] bg-transparent px-3 py-1 text-xs text-white/80 hover:text-white transition">
            <span>До 400км</span>
            <span className="text-[#C9A24C] leading-none">×</span>
          </button>

          <button className="flex items-center gap-2 rounded-full border border-[#C9A24C] bg-transparent px-3 py-1 text-xs text-white/80 hover:text-white transition">
            <span>Дизель</span>
            <span className="text-[#C9A24C] leading-none">×</span>
          </button>

          <button className="flex items-center gap-2 rounded-full border border-[#C9A24C] bg-transparent px-3 py-1 text-xs text-white/80 hover:text-white transition">
            <span>До 10тыс $</span>
            <span className="text-[#C9A24C] leading-none">×</span>
          </button>
        </div>

        <button className="text-xs text-white/50 hover:text-white/80 transition whitespace-nowrap">
          Очистить все
        </button>
      </div>
    </div>
  );
}

export default Filter;
