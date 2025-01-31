import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductSection = () => {
  return (
    <section id="products" className="min-h-screen">
      <h2 className="mt-8 lg:mt-14 text-center text-lg text-cstm-brown md:text-2xl lg:text-3xl font-bold">
        Explore the recent Products
      </h2>
      <p className="text-center mt-3 text-cstm-brown text-sm px-2">
        Discover our latest selection of freshly roasted coffee beans. Each
        batch is crafted with care, ensuring you get only the finest flavors.
      </p>
      <div className="grid justify-items-center lg:gap-x-4 grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-4 md:mx-16 lg:mx-14">
        <article className="flex justify-center ">
          <div className="card-product">
            <div className="w-full h-52 md:h-60 lg:h-[260] relative scale-x-[1.3] scale-y-[1.3]">
              <Image
                src="/images/products/Wine.png"
                alt="Aceh Gayo Wine Process"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <p className="text-center text-xs md:text-sm text-gray-500 font-semibold font-sans">
              Arabica
            </p>
            <p className="mt-1 text-center text-base md:text-lg lg:text-xl text-cstm-brown font-bold">
              Aceh Gayo Wine Process
            </p>
            <p className="text-center text-xs md:text-sm lg:text-base text-gray-500 font-sans">
              IDR 68.796
            </p>
            <p className="mt-4 text-center text-sm md:text-base lg:text-lg text-yellow-pastel font-bold font-sans">
              ORDER NOW
            </p>
            <div className="mt-3 mb-4 flex gap-4 justify-center">
              <a href="https://shopee.co.id/Kopi-Arabika-Aceh-Gayo-Wine-Process-200gr-Authentic-Coffee-Roastery-Specialty-i.1387063263.27817735089" target="_blank" className="card-icon relative">
                <Image
                  src="/icons/shopee.png"
                  alt="shopee"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </a>
              <a href="https://www.tokopedia.com/authenticcoffee-roastery/kopi-arabika-aceh-gayo-wine-process-200gr-authentic-coffee-roastery-specialty-medium-dark-biji-kopi-b760d?extParam=src%3Dshop%26whid%3D17945593&aff_unique_id=&channel=others&chain_key=" target="_blank" className="card-icon relative">
                <Image
                  src="/icons/tokopedia.png"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="tokopedia"
                />
              </a>
              <a href="" target="_blank" className="card-icon relative">
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
            <div className="w-full h-52 md:h-60 lg:h-[260] relative scale-x-[1.3] scale-y-[1.3]">
              <Image
                src="/images/products/Honey.png"
                alt="Aceh Gayo Honey Process"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <p className="text-center text-xs md:text-sm text-gray-500 font-semibold font-sans">
              Arabica
            </p>
            <p className="mt-1 text-center text-base md:text-lg lg:text-xl text-cstm-brown font-bold">
              Aceh Gayo Honey Process
            </p>
            <p className="text-center text-xs md:text-sm lg:text-base text-gray-500 font-sans">
              IDR 66.612
            </p>
            <p className="mt-4 text-center text-sm md:text-base lg:text-lg text-yellow-pastel font-bold font-sans">
              ORDER NOW
            </p>
            <div className="mt-3 mb-4 flex gap-4 justify-center">
              <a href="https://shopee.co.id/Kopi-Arabika-Aceh-Gayo-Honey-Process-200gr-Authentic-Coffee-Roastery-Specialty-i.1387063263.27267719795" target="_blank" className="card-icon relative">
                <Image
                  src="/icons/shopee.png"
                  alt="shopee"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </a>
              <a href="https://www.tokopedia.com/authenticcoffee-roastery/kopi-arabika-aceh-gayo-honey-process-200gr-authentic-coffee-roastery-specialty-light-biji-kopi-fb2de?extParam=src%3Dshop%26whid%3D17945593&aff_unique_id=&channel=others&chain_key=" target="_blank" className="card-icon relative">
                <Image
                  src="/icons/tokopedia.png"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="tokopedia"
                />
              </a>
              <a href="https://wa.me/+6282168878887" target="_blank" className="card-icon relative">
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
            <div className="w-full h-52 md:h-60 lg:h-[260] relative scale-x-[1.3] scale-y-[1.3]">
              <Image
                src="/images/products/Luwak.png"
                alt="Aceh Gayo Luwak Liar"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <p className="text-center text-xs md:text-sm text-gray-500 font-semibold font-sans">
              Arabica
            </p>
            <p className="mt-1 text-center text-base md:text-lg lg:text-xl text-cstm-brown font-bold">
              Aceh Gayo Luwak Liar
            </p>
            <p className="text-center text-xs md:text-sm lg:text-base text-gray-500 font-sans">
              IDR 90.636
            </p>
            <p className="mt-4 text-center text-sm md:text-base lg:text-lg text-yellow-pastel font-bold font-sans">
              ORDER NOW
            </p>
            <div className="mt-3 mb-4 flex gap-4 justify-center">
              <a href="https://shopee.co.id/Kopi-Arabika-Luwak-Liar-200gr-Authentic-Coffee-Roastery-Specialty-i.1387063263.29717722185" target="_blank" className="card-icon relative">
                <Image
                  src="/icons/shopee.png"
                  alt="shopee"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </a>
              <a href="https://www.tokopedia.com/authenticcoffee-roastery/kopi-arabika-luwak-liar-200gr-authentic-coffee-roastery-specialty-medium-dark-biji-kopi-43866?extParam=src%3Dshop%26whid%3D17945593&aff_unique_id=&channel=others&chain_key=" target="_blank" className="card-icon relative">
                <Image
                  src="/icons/tokopedia.png"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="tokopedia"
                />
              </a>
              <a href="https://wa.me/+6282168878887" target="_blank" className="card-icon relative">
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
            <div className="w-full h-52 md:h-60 lg:h-[260] relative scale-x-[1.3] scale-y-[1.3]">
              <Image
                src="/images/products/Natural.png"
                alt="Aceh Gayo Natural Process"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <p className="text-center text-xs md:text-sm text-gray-500 font-semibold font-sans">
              Arabica
            </p>
            <p className="mt-1 text-center text-base md:text-lg lg:text-xl text-cstm-brown font-bold">
              Aceh Gayo Natural Process
            </p>
            <p className="text-center text-xs md:text-sm lg:text-base text-gray-500 font-sans">
              IDR 66.612
            </p>
            <p className="mt-4 text-center text-sm md:text-base lg:text-lg text-yellow-pastel font-bold font-sans">
              ORDER NOW
            </p>
            <div className="mt-3 mb-4 flex gap-4 justify-center">
              <a href="https://shopee.co.id/Kopi-Arabika-Aceh-Gayo-Natural-Process-200gr-Authentic-Coffee-Roastery-Specialty-i.1387063263.26217719997" target="_blank" className="card-icon relative">
                <Image
                  src="/icons/shopee.png"
                  alt="shopee"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </a>
              <a href="https://www.tokopedia.com/authenticcoffee-roastery/kopi-arabika-aceh-gayo-natural-process-200gr-authentic-coffee-roastery-specialty-medium-biji-kopi-45df7?extParam=src%3Dshop%26whid%3D17945593&aff_unique_id=&channel=others&chain_key=" target="_blank" className="card-icon relative">
                <Image
                  src="/icons/tokopedia.png"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="tokopedia"
                />
              </a>
              <a href="https://wa.me/+6282168878887" target="_blank" className="card-icon relative">
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
        <a
          href="https://shopee.co.id/authentic.coffee#product_list"
          target="_blank"
          className="border-2 border-yellow-pastel my-5 md:my-8 lg:my-12 px-6 py-3 md:px-7 md:py-4 lg:px-9 lg:py-4 text-cstm-brown text-sm md:text-base lg:text-lg font-medium hover:bg-yellow-pastel active:bg-yellow-pastel focus:bg-yellow-pastel hover:text-white active:text-white focus:text-white duration-300 ease-in-out"
        >
          Explore All Products
        </a>
      </div>
    </section>
  );
};

export default ProductSection;
