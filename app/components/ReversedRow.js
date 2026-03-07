import React from "react";
import Image from "next/image";

const ReversedRow = ({
  title,
  description,
  description2,
  imageUrl1,
  imageUrl2,
}) => {
  return (
    <div className="flex gap-6  obzor even-row-reverse">
      <div className="text-content w-[500px]">
        <h2 className="text-2xl font-bold">{title}</h2>
        <hr className="border-t border-white my-2" />
        <p className="mb-4">{description}</p>
        <p>{description2}</p>
      </div>
      <div className="image-container flex">
        <div className="image-wrapper flex-1">
          <Image
            src={imageUrl1}
            alt="Image 1"
            className="!h-[300px]"
            width={482}
            height={300}
          />
        </div>
        <div className="image-wrapper ml-[-210px] flex-1">
          <Image
            src={imageUrl2}
            alt="Image 2"
            className="!h-[300px]"
            width={361}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default ReversedRow;
