import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex items-center min-h-screen bg-hero-image-sm md:bg-hero-image bg-cover bg-center mt-16"
    >
      <div className="z-0 flex items-center justify-center max-w-7xl gap-4 p-4 mb-32 md:mb-0">
        <main className="md:max-w-80 lg:max-w-md md:ml-12 lg:ml-28 text-center md:text-left">
          <h1 className=" md:mb-5 text-3xl text-slate-800 md:text-4xl lg:text-6xl font-bold font-ds">
            All Flavor Variants from Indonesia
          </h1>
          <p className="my-4 text-gray-500 text-sm md:my-8 md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            animi sapiente fugit totam harum perferendis rerum eveniet debitis
            quod voluptates. Ratione laboriosam suscipit nemo aperiam quia iure
            provident minus temporibus?
          </p>
          <p className="text-amber-500 font-bold text-center text-sm text-shadow text-wrap tracking-wide md:text-left md:text-base">
            SHOP NUSANTARA COLLECTION VIA
          </p>
          <div className="flex my-10 md:my-4 gap-4 justify-center md:justify-normal md:-ml-1">
            <a href="" className="hero-icon relative">
              <Image
                src="/icons/shopee.png"
                alt="shopee"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </a>
            <a href="" className="hero-icon relative">
              <Image
                src="/icons/tokopedia.png"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="tokopedia"
              />
            </a>
            <a href="" className="hero-icon relative">
              <Image
                src="/icons/whatsapp.png"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="whatsapp"
              />
            </a>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Hero;
