import React from "react";
import Link from "next/link";
import Image from "next/image";

const InfoSection = () => {
  return (
    <section
      id="info"
      className="min-h-[600px] md:min-h-[70vh] lg:min-h-screen mt-5 lg:mt-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <article className="flex flex-col mx-5 md:mx-10 lg:mx-20">
          <h2 className="text-center md:text-left text-lg text-cstm-brown md:text-2xl lg:text-3xl font-semibold tracking-wide">
            Wholesale or Roasting Coffee Program
          </h2>
          <p className="text-center md:text-left mt-2 md:mt-5 lg:mt-7 text-cstm-brown text-xs md:text-sm lg:text-lg">
            Bring the best coffee to your cafe, restaurant, or office with our
            premium selections. Enjoy high-quality beans at affordable prices,
            ensuring a delightful cup every time. If you prefer to roast your
            own beans, our expert roasting services are available to help you
            achieve perfect results. Join us for consistent and reliable coffee
            supplies.
          </p>
          <div className="flex justify-center">
            <a
              href="https://wa.me/+6282168878887"
              target="_blank"
              className="bg-[#512818] shadow-lg text-[whitesmoke] text-sm md:text-base lg:text-lg font-medium rounded-full my-5 md:my-8 lg:my-12 px-6 py-3 md:px-7 md:py-4 lg:px-9 lg:py-4 hover:bg-amber-900 focus:bg-amber-900 active:bg-amber-900 duration-200 ease-in-out"
            >
              Contact us now
            </a>
          </div>
        </article>
        <div className="flex justify-end mt-2 mx-5 md:m-0 lg:m-0">
          <div className="w-full min-h-60 md:w-[650px] md:h-80 lg:w-[700px] lg:h-[450px] relative">
            <Image
              src="/images/wholesale.jpg"
              alt="about"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-2xl md:rounded-s-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
