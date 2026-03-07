import Link from "next/link";
import Filter from "../components/Filter/Filter";
import CatalogCard from "../components/CatalogCard/CatalogCard";

const cars = [
  {
    id: 1,
    name: "Volkswagen ID.6",
    price: "50.000",
    acceleration: "4.2",
    range: "455",
    power: "574",
    imageUrl: "/Rectangle 37.svg",
  },
  {
    id: 2,
    name: "Volkswagen ID.6",
    price: null,
    acceleration: "4.2",
    range: "455",
    power: "574",
    imageUrl: "/Rectangle 37.svg",
  },
  {
    id: 3,
    name: "Volkswagen ID.6",
    price: null,
    acceleration: "4.2",
    range: "455",
    power: "574",
    imageUrl: "/Rectangle 37.svg",
  },
  {
    id: 4,
    name: "Volkswagen ID.6",
    price: "50.000",
    acceleration: "4.2",
    range: "455",
    power: "574",
    imageUrl: "/Rectangle 37.svg",
  },
  {
    id: 5,
    name: "Volkswagen ID.6",
    price: null,
    acceleration: "4.2",
    range: "455",
    power: "574",
    imageUrl: "/Rectangle 37.svg",
  },
  {
    id: 6,
    name: "Volkswagen ID.6",
    price: null,
    acceleration: "4.2",
    range: "455",
    power: "574",
    imageUrl: "/Rectangle 37.svg",
  },
];

const buttonLabels = [
  "Марка",
  "Кузов",
  "Состояние",
  "Привод",
  "Запас хода",
  "Цена",
  "Сортировка по",
];

function page() {
  return (
    <div className="container">
      <span className="text-white font-[500]">Главная /</span>
      <span className="text-white font-[500]"> Каталог</span>
      <div>
        <div
          className="w-full rounded-full
                   bg-[#353535]
                   border border-white/10
                   flex items-center justify-between
                   px-10 py-3
                   text-sm text-white/80 mt-[50px]"
        >
          {Array.from(buttonLabels, (label, index) => (
            <button
              key={index}
              className="flex items-center gap-2 hover:text-white transition"
            >
              <span>{label}</span>
              <span className="text-white/40 text-xs">▲</span>
            </button>
          ))}
        </div>
      </div>
      <div className="mt-[53px]">
        <Filter />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {cars.map((car) => {
          return (
            // console.log(car)
            <Link href={`/catalog/${car.id}`} key={car.id}>
              <CatalogCard key={car.id} car={car} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default page;
