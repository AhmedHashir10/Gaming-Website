import React from "react";
import Image from "next/image";

const iconData = [
  { src: "/gameIcon1.png", alt: "Game Icon 1" },
  { src: "/gameIcon2.png", alt: "Game Icon 2" },
  { src: "/gameIcon3.png", alt: "Game Icon 3" },
  { src: "/gameIcon4.png", alt: "Game Icon 4" },
];

const Card = ({ imageUrl, alt }) => (
  <div className="relative flex flex-col items-center justify-end overflow-hidden">
    <Image
      src={imageUrl}
      className="object-cover rounded-lg shadow-md"
      alt={alt}
      width={500}
      height={500}
    />
  </div>
);

const Grid = () => (
  <div className="container mx-auto">
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {iconData.map((icon, index) => (
        <div key={index} className="p-4">
          <Card imageUrl={icon.src} alt={icon.alt} />
        </div>
      ))}
    </section>
  </div>
);

export default Grid;
