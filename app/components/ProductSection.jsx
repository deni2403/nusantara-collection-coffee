import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProductSection = () => {
  return (
    <section id="products" className="min-h-screen">
      <h2 className="mt-8 lg:mt-14 text-center text-lg text-cstm-brown md:text-2xl lg:text-3xl font-bold">
        Explore the recent Products
      </h2>
      <p className="text-center mt-3 text-cstm-brown text-sm px-2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis,
        excepturi?
      </p>
      <div className="grid justify-items-center lg:gap-x-4 grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-4 md:mx-16 lg:mx-14">
        <article className="flex justify-center ">
          <div className="card-product">
            <div className="w-full h-52 md:h-60 lg:h-[260] relative">
              <Image
                src="/images/products/1.png"
                alt="product"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <p className="text-center text-xs md:text-sm text-gray-500 font-semibold font-sans">
              Arabica
            </p>
            <p className="mt-1 text-center text-base md:text-lg lg:text-xl text-cstm-brown font-bold">
              Gayo Avatara
            </p>
            <p className="text-center text-xs md:text-sm lg:text-base text-gray-500 font-sans">
              IDR 100.000
            </p>
            <p className="mt-4 text-center text-sm md:text-base lg:text-lg text-yellow-pastel font-bold font-sans">
              ORDER NOW
            </p>
            <div className="mt-3 mb-4 flex gap-4 justify-center">
              <a href="" className="card-icon relative">
                <Image
                  src="/icons/shopee.png"
                  alt="shopee"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </a>
              <a href="" className="card-icon relative">
                <Image
                  src="/icons/tokopedia.png"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="tokopedia"
                />
              </a>
              <a href="" className="card-icon relative">
                <Image
                  src="/icons/whatsapp.png"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="whatsapp"
                />
              </a>
            </div>
          </div>
        </article>
        <article className="flex justify-center">
          <div className="card-product">
            <div className="w-full h-52 md:h-60 lg:h-[260] relative">
              <Image
                src="/images/products/2.png"
                alt="product"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <p className="text-center text-xs md:text-sm text-gray-500 font-semibold font-sans">
              Arabica
            </p>
            <p className="mt-1 text-center text-base md:text-lg lg:text-xl text-cstm-brown font-bold">
              Ethiophia Guji
            </p>
            <p className="text-center text-xs md:text-sm lg:text-base text-gray-500 font-sans">
              IDR 120.000
            </p>
            <p className="mt-4 text-center text-sm md:text-base lg:text-lg text-yellow-pastel font-bold font-sans">
              ORDER NOW
            </p>
            <div className="mt-3 mb-4 flex gap-4 justify-center">
              <a href="" className="card-icon relative">
                <Image
                  src="/icons/shopee.png"
                  alt="shopee"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </a>
              <a href="" className="card-icon relative">
                <Image
                  src="/icons/tokopedia.png"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="tokopedia"
                />
              </a>
              <a href="" className="card-icon relative">
                <Image
                  src="/icons/whatsapp.png"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="whatsapp"
                />
              </a>
            </div>
          </div>
        </article>
        <article className="flex justify-center">
          <div className="card-product">
            <div className="w-full h-52 md:h-60 lg:h-[260] relative">
              <Image
                src="/images/products/3.png"
                alt="product"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <p className="text-center text-xs md:text-sm text-gray-500 font-semibold font-sans">
              Blend
            </p>
            <p className="mt-1 text-center text-base md:text-lg lg:text-xl text-cstm-brown font-bold">
              Gayo Blend
            </p>
            <p className="text-center text-xs md:text-sm lg:text-base text-gray-500 font-sans">
              IDR 90.000
            </p>
            <p className="mt-4 text-center text-sm md:text-base lg:text-lg text-yellow-pastel font-bold font-sans">
              ORDER NOW
            </p>
            <div className="mt-3 mb-4 flex gap-4 justify-center">
              <a href="" className="card-icon relative">
                <Image
                  src="/icons/shopee.png"
                  alt="shopee"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </a>
              <a href="" className="card-icon relative">
                <Image
                  src="/icons/tokopedia.png"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="tokopedia"
                />
              </a>
              <a href="" className="card-icon relative">
                <Image
                  src="/icons/whatsapp.png"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="whatsapp"
                />
              </a>
            </div>
          </div>
        </article>
        <article className="flex justify-center">
          <div className="card-product">
            <div className="w-full h-52 md:h-60 lg:h-[260] relative">
              <Image
                src="/images/products/1.png"
                alt="product"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <p className="text-center text-xs md:text-sm text-gray-500 font-semibold font-sans">
              Single Origin
            </p>
            <p className="mt-1 text-center text-base md:text-lg lg:text-xl text-cstm-brown font-bold">
              Gayo Ateng
            </p>
            <p className="text-center text-xs md:text-sm lg:text-base text-gray-500 font-sans">
              IDR 110.000
            </p>
            <p className="mt-4 text-center text-sm md:text-base lg:text-lg text-yellow-pastel font-bold font-sans">
              ORDER NOW
            </p>
            <div className="mt-3 mb-4 flex gap-4 justify-center">
              <a href="" className="card-icon relative">
                <Image
                  src="/icons/shopee.png"
                  alt="shopee"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </a>
              <a href="" className="card-icon relative">
                <Image
                  src="/icons/tokopedia.png"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="tokopedia"
                />
              </a>
              <a href="" className="card-icon relative">
                <Image
                  src="/icons/whatsapp.png"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="whatsapp"
                />
              </a>
            </div>
          </div>
        </article>
      </div>
      <div className="flex justify-center">
        <Link
          href=""
          className="border-2 border-yellow-pastel my-5 md:my-8 lg:my-12 px-6 py-3 md:px-7 md:py-4 lg:px-9 lg:py-4 text-cstm-brown text-sm md:text-base lg:text-lg font-medium hover:bg-yellow-pastel active:bg-yellow-pastel focus:bg-yellow-pastel hover:text-white active:text-white focus:text-white duration-300 ease-in-out"
        >
          Explore All Products
        </Link>
      </div>
    </section>
  );
};

export default ProductSection;
