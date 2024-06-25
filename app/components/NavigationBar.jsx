'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const NavigationBar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleHamburger = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="bg-slate-900 absolute top-0 left-0 w-full flex items-center z-10">
      <div className="container">
        <div className="flex item-center justify-between relative">
          <div className="px-4">
            <a
              href="#hero"
              className="flex my-2 ml-4 md:ml-5 lg:ml-14 w-24 h-12 lg:w-36 relative"
            >
              <Image
                src="/images/logo.png"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="logo"
              />
            </a>
          </div>
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              onClick={toggleHamburger}
              className={`block absolute right-4 ${
                isActive ? 'hamburger-active' : ''
              } lg:hidden`}
            >
              <span className="origin-top-left hamburger-line transition duration-300 ease-in-out" />
              <span className="hamburger-line transition duration-300 ease-in-out" />
              <span className="origin-bottom-left hamburger-line transition duration-300 ease-in-out" />
            </button>

            <nav
              id="nav-menu"
              className={`${
                isActive ? '' : 'hidden'
              } absolute py-3 px-5 border border-white lg:border-none bg-slate-900 shadow-lg lg:shadow-none rounded-lg lg:rounded-none max-w-[180px] w-full right-4 top-full lg:block lg:static lg:max-w-full`}
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a
                    href="#hero"
                    className="my-3 lg:mx-5 text-base text-[whitesmoke] group-hover:text-yellow-pastel group-focus:text-yellow-pastel group-active:text-yellow-pastel flex"
                  >
                    Home
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#products"
                    className="my-3 lg:mx-5 text-base text-[whitesmoke] group-hover:text-yellow-pastel group-focus:text-yellow-pastel group-active:text-yellow-pastel flex"
                  >
                    Products
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#about"
                    className="my-3 lg:mx-5 text-base text-[whitesmoke] group-hover:text-yellow-pastel group-focus:text-yellow-pastel group-active:text-yellow-pastel flex"
                  >
                    About us
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#footer"
                    className="my-3 lg:mx-5 text-base text-[whitesmoke] group-hover:text-yellow-pastel group-focus:text-yellow-pastel group-active:text-yellow-pastel flex"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
