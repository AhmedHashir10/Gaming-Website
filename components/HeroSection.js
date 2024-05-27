import Image from "next/image";
import logo from "../public/logo.svg";
import pc from "../public/icons/pc.svg";
import ps from "../public/icons/ps.svg";
import xbox from "../public/icons/xbox.svg";
import React, { useState, useEffect } from "react";
import Heronine from "../public/heropics/sce-hero-960.jpg";
import Herotwe from "../public/heropics/sce-hero-1200.jpg";

// const [image, setImg] = useState()

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage % 3) + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section>
      <div className="relative w-screen h-screen">
        <Image
          className="cursor-pointer object-cover h-full w-full"
          src={`/slider${currentImage}.jpg`}
          alt=""
          layout="fill"
        />
      </div>
    </section>
  );
}
