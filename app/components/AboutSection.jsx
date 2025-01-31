import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="min-h-[450px] mt-5 lg:mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 md:mx-5 lg:mx-14">
        <div className="flex justify-center">
          <div className="w-full h-52 md:w-[640px] md:h-80 lg:w-[660px] lg:h-[380px] relative">
            <Image
              src="/images/about.png"
              alt="about"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center md:justify-normal mt-5 md:mt-0 ">
          <div className="mx-5 md:mx-0 md:mr-4 lg:mr-28 lg:pr-10">
            <h2 className="text-center md:text-left text-lg text-cstm-brown md:text-2xl lg:text-3xl font-medium tracking-wide">
              We care about the quality of our{" "}
              <span className="text-cstm-brown font-bold">products</span>
            </h2>
            <p className="text-center md:text-left mt-2 lg:my-4 text-cstm-brown text-xs lg:text-sm">
              We are dedicated to providing you with only the best, from
              sourcing premium beans to perfecting the roasting process. Our
              commitment is to deliver a rich and satisfying coffee experience,
              one cup at a time.
            </p>
          </div>
          <div className="grid my-5 grid-cols-1 md:grid-cols-2 gap-6 md:gap-0">
            <div className="flex flex-col gap-6 lg:gap-y-8">
              <div className="flex items-center mx-10 md:mx-0 lg:mr-5 gap-3 lg:gap-4">
                <div className="about-icon">
                  <div className="w-5 h-5 lg:w-9 lg:h-9 relative">
                    <Image
                      src="/icons/coffee-beans.png"
                      alt="premium-beans"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
                <div className="text-description">
                  <h4 className="about-icon__title">Premium Beans</h4>
                  <p className="about-icon__description">
                    We use premium beans for our coffee to deliver the best
                  </p>
                </div>
              </div>
              <div className="flex items-center mx-10 md:mx-0 lg:mr-5 gap-3 lg:gap-4">
                <div className="about-icon">
                  <div className="w-6 h-6 lg:w-10 lg:h-10 relative">
                    <Image
                      src="/icons/flavour.png"
                      alt="unique-flavor"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
                <div className="text-description">
                  <h4 className="about-icon__title">Unique Flavour Profiles</h4>
                  <p className="about-icon__description">
                    Coffee with a unique profile taste and aroma
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 lg:gap-y-8">
              <div className="flex items-center mx-10 md:mx-0 gap-3 lg:gap-4">
                <div className="about-icon">
                  <div className="w-6 h-6 lg:w-9 lg:h-9 relative">
                    <Image
                      src="/icons/freshly-roasted.png"
                      alt="freshly-roasted"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
                <div className="text-description">
                  <h4 className="about-icon__title">Freshly Roasted</h4>
                  <p className="about-icon__description">
                    Perfectly roasted in small batches for ultimate freshness
                  </p>
                </div>
              </div>
              <div className="flex items-center mx-10 md:mx-0 gap-3 lg:gap-4">
                <div className="about-icon">
                  <div className="w-5 h-5 lg:w-9 lg:h-9 relative">
                    <Image
                      src="/icons/quality-control.png"
                      alt="quality-control"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
                <div className="text-description">
                  <h4 className="about-icon__title">Quality Control</h4>
                  <p className="about-icon__description">
                    Ensure that the product you receive remains of high quality
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
