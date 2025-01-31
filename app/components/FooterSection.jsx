import React from 'react';
import Image from 'next/image';

const FooterSection = () => {
  return (
    <footer id="footer" className="min-h-80 md:min-h-[250px] bg-[#261e1b] rounded-t-3xl">
      <div className="grid md:justify-items-center grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col mt-3 md:my-4">
          <div className="flex items-center gap-3 md:gap-4 lg:gap-6 mx-5 my-3 lg:my-5 md:mx-8 lg:mx-20">
            <div className="flex-none w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 relative">
              <Image
                src="/icons/location.png"
                alt="location"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="text-description">
              <h4 className="text-base lg:text-lg font-bold text-[whitesmoke]">
                Address
              </h4>
              <p className="text-xs lg:text-sm text-[whitesmoke]">
                Jl. Metro City No. 14, Medan, Indonesia
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 md:gap-4 lg:gap-6 mx-5 my-3 lg:my-5 md:mx-8 lg:mx-20">
            <div className="flex-none w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 relative">
              <Image
                src="/icons/phone.png"
                alt="phone"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="text-description">
              <h4 className="text-base lg:text-lg font-bold text-[whitesmoke]">
                Phone
              </h4>
              <p className="text-xs lg:text-sm text-[whitesmoke] font-sans">
                (+62) 821-6887-8887
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 md:gap-4 lg:gap-6 mx-5 my-3 lg:my-5 md:mx-8 lg:mx-20">
            <div className="flex-none  w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 relative">
              <Image
                src="/icons/email.png"
                alt="email"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="text-description">
              <h4 className="text-base lg:text-lg font-bold text-[whitesmoke]">
                Email
              </h4>
              <p className="text-xs lg:text-sm text-[whitesmoke]">
                authentic.coffeee@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="flex text-white md:mt-4">
          <div className="mt-3 mx-5">
            <h4 className="text-[whitesmoke] font-bold md:text-lg lg:text-xl">
              Social media
            </h4>
            <div className="flex gap-4 lg:gap-10 mt-2 mb-5 lg:my-3">
              <a href="https://www.instagram.com/authentic.coffee.id/" target="_blank" className="flex-none w-8 h-8 md:w-8 md:h-8 lg:w-9 lg:h-9 relative">
                <Image
                  src="/icons/Instagram.png"
                  alt="instagram"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </a>
              <a href="https://www.tiktok.com/@authenticoffee.roastery" target="_blank" className="flex-none w-8 h-8 md:w-8 md:h-8 lg:w-9 lg:h-9 relative">
                <Image
                  src="/icons/tiktok.png"
                  alt="tiktok"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </a>
              <a href="https://wa.me/+6282168878887" target="_blank" className="flex-none w-8 h-8 md:w-8 md:h-8 lg:w-9 lg:h-9 relative">
                <Image
                  src="/icons/whatsapp-white.png"
                  alt="whatsapp"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center md:justify-start bg-[#473630] h-8 lg:h-10">
        <h6 className="mx-5 text-[10px] md:text-xs lg:text-sm font-semibold font-sans text-[whitesmoke]">
          Copyright © 2024, Authentic Coffee & Roastery
        </h6>
      </div>
    </footer>
  );
};

export default FooterSection;
