import React from "react";
import Image from "next/image";

const icons = Array.from({ length: 4 }, (_, i) => ({
  src: `/icon${i + 1}.png`,
}));

const Card = ({ imageUrl }) => (
  <div className="relative flex flex-col items-center justify-end border border-cd6977 overflow-hidden">
    <Image
      src={imageUrl}
      className="object-cover"
      alt=""
      width={500}
      height={500}
    />
  </div>
);

const Grid = () => (
  <div>
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-20">
      {icons.map((icon, index) => (
        <div key={index} className="p-4">
          <Card imageUrl={icon.src} />
        </div>
      ))}
    </section>
  </div>
);

export default Grid;
