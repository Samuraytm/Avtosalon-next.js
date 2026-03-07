"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import ReversedRow from "@/app/components/ReversedRow";
import Image from "next/image";
const cars = [
  {
    id: 1,
    name: "Volkswagen ID.6",
    price: "50.000",
    acceleration: "4.2",
    range: "455",
    power: "574",
  },
  {
    id: 2,
    name: "Volkswagen ID.6",
    price: null,
    acceleration: "4.2",
    range: "455",
    power: "574",
  },
  {
    id: 3,
    name: "Volkswagen ID.6",
    price: null,
    acceleration: "4.2",
    range: "455",
    power: "574",
  },
  {
    id: 4,
    name: "Volkswagen ID.6",
    price: "50.000",
    acceleration: "4.2",
    range: "455",
    power: "574",
  },
  {
    id: 5,
    name: "Volkswagen ID.6",
    price: null,
    acceleration: "4.2",
    range: "455",
    power: "574",
  },
  {
    id: 6,
    name: "Volkswagen ID.6",
    price: null,
    acceleration: "4.2",
    range: "455",
    power: "574",
  },
];

function CarDetails() {
  const params = useParams();
  const { id } = params;

  const car = cars.find((car) => car.id === parseInt(id));

  if (!car) {
    return <div className="text-white">Car not found</div>;
  }

  return (
    <div>
      <div
        className="relative bg-cover bg-center bg-no-repeat h-screen"
        style={{ backgroundImage: "url('/Rectangle 37 (1).svg')" }}
      >
        <div className="container mx-auto text-white py-16 flex flex-col justify-center h-full">
          <h1 className="text-5xl font-bold mb-6">{car.name}</h1>
          <p className="text-2xl mb-4">
            Премиум электрокар стиль и удобство в одной машине
          </p>
          <div className="flex space-x-8 text-lg">
            <p>POWER (CV): {car.power}</p>
            <p>MAX SPEED: {car.range} km/h</p>
            <p>0-100 km/h: {car.acceleration} s</p>
          </div>
        </div>
      </div>

      <div className=" py-16">
        <div className="container mx-auto text-white">
          <ReversedRow
            title={"Обзор"}
            description={
              "Последовательно продолжая концепцию заднего расположения двигателя, лежащую в основе всех моделей семейства Aventador, версия Ultimae отражает её новое прочтение. Внешний вид отличается чистыми и сдержанными линиями, конструкция — широким использованием углепластика."
            }
            imageUrl1="/Mask group (1).svg"
            imageUrl2="/Mask group (2).svg"
          />
          <ReversedRow
            title={"Экстерьер"}
            description={
              "Последовательно продолжая концепцию заднего расположения двигателя, лежащую в основе всех моделей семейства Aventador, версия Ultimae отражает её новое прочтение. Внешний вид отличается чистыми и сдержанными линиями, а конструкция – широким использованием углепластика."
            }
            imageUrl1="/Mask group (1).svg"
            imageUrl2="/Mask group (2).svg"
          />
          <div className="mt-16">
            <ReversedRow
              title={"Интерьер"}
              description={
                "Последовательно продолжая концепцию заднего расположения двигателя, лежащую в основе всех моделей семейства Aventador, версия Ultimae отражает её новое прочтение. Внешний вид отличается чистыми и сдержанными линиями, конструкция — широким использованием углепластика."
              }
              imageUrl1="/Mask group (1).svg"
              imageUrl2="/Mask group (2).svg"
            />
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto text-white">
          <h2 className="text-4xl font-bold text-center mb-8">
            Технические характеристики
          </h2>
          <div className="grid grid-cols-1 divide-y divide-gray-400">
            {Array(7)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-4"
                >
                  <span>Рабочий объем</span>
                  <span>6.498 см3 (396,5 куб.дюйм.)</span>
                </div>
              ))}
          </div>
          <div className="text-center mt-8 flex justify-center">
            <button className="bg-gray-800 text-white py-2 px-6 rounded-lg flex items-center justify-center gap-2 cursor-pointer">
              Узнать больше
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
