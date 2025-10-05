"use client";
import { useEffect, useState } from "react";
import { Jersey_10 } from "next/font/google";
import Link from "next/link";

const Jersey_10_Font = Jersey_10({
  weight: "400",
  variable: "--font-Jersey_10",
  subsets: ["latin"],
});

const backgrounds = [
  "/images/bg1.jpg",
  "/images/bg2.jpg",
  "/images/bg3.jpg",
]; 

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? backgrounds.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === backgrounds.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div
      className="w-full h-186 flex items-center justify-center relative transition-all duration-1000"
      style={{
        backgroundImage: `url(${backgrounds[currentIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
  
      <div className="absolute inset-0 bg-black/40"></div>

      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2  flex items-center justify-center text-white text-3xl z-20 bg-white/10 border border-white hover:bg-white/40  rounded-full w-14 h-14 transition-all"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2  flex items-center justify-center text-white text-3xl z-20 bg-white/10 border border-white hover:bg-white/40  rounded-full w-14 h-14 transition-all"
      >
        ›
      </button>

      <div className="text-center relative z-10">
        <h1
          className={`text-8xl text-white drop-shadow-xl ${Jersey_10_Font.className}`}
        >
          GAMING AND <br /> PLATFORMS
        </h1>
        <div className="mt-6">
          <Link href="/game">
          <button className="px-10 py-3 rounded-xl text-white font-light tracking-wider bg-gradient-to-r from-[#2BC0E4]/60 to-[#EAECC6]/40 hover:from-[#2BC0E4]/80 hover:to-[#EAECC6]/60 backdrop-blur-lg transition-all duration-300">
            PLAY NOW
          </button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-5 w-full flex justify-center space-x-3 z-20">
        {backgrounds.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
