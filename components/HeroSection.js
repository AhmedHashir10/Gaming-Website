import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage % 4) + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="relative w-screen">
        <Image
          className="cursor-pointer object-cover"
          src={`/slider${currentImage}.jpg`}
          alt=""
          width={1000} // Adjust width based on your design requirements
          height={600} // Set height based on your design requirements
          layout="responsive"
        />
      </div>
    </section>
  );
}
