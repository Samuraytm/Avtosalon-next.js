import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown } from "lucide-react"; // ChevronDown qo'shildi

function Header() {
  return (
    <div className="w-full">
      {/* Fon gradient yoki yarim shaffof bo'lishi uchun bg-black/80 ishlatish mumkin */}
      <header className="bg-[#0E1012] py-4 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Chap tomon: Navigatsiya */}
            <ul className="flex gap-[40px] text-white font-light text-sm">
              <li className="hover:opacity-70 font-semibold transition">
                <Link href={"/catalog"}> Модели </Link>
              </li>
              <li className="hover:opacity-70 font-semibold transition">
                <Link href={"/about"}> О нас </Link>
              </li>
             <li className="hover:opacity-70 font-semibold transition">
                <Link href={"/news"}> Новости </Link>
              </li>
            </ul>
          

            {/* Markaz: Logo */}
            <div className="flex-shrink-0">
              <Link href="/"> 
                <Image
                  src={"/ddddd 1.svg"}
                  width={120}
                  height={60}
                  alt="HADID LOGO"
                  className="object-contain"
                />
              </Link>
            </div>

            {/* O'ng tomon: Til, Qidiruv va Tugma */}
            <div className="flex items-center gap-[30px]">
              {/* Til tanlagichi (Dropdown) */}
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="flex items-center gap-1 text-white text-sm bg-transparent border-none hover:bg-transparent"
                >
                  Рус <ChevronDown size={14} />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-[#1a1a1a] text-white rounded-box z-[1] w-32 p-2 shadow-lg mt-4"
                >
                  <li>
                    <a>Русский</a>
                  </li>
                  <li>
                    <a>English</a>
                  </li>
                </ul>
              </div>

              {/* Qidiruv ikonkasi */}
              <button className="text-white hover:opacity-70">
                <Search size={20} />
              </button>

              {/* "Связаться с нами" tugmasi */}
              <Link 
  href="/contact" 
  className="border border-[#D4AF37] text-white px-6 py-2 rounded-full text-sm hover:bg-[#D4AF37] hover:text-black transition-all duration-300 bg-transparent inline-block text-center"
>
  Связаться с нами
</Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
