import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code } from "lucide-react";

import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary bg-opacity-90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <a
          href='#'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Code className="text-white" size={32} />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Samarth &nbsp;
            <span className='sm:block hidden'> | Portfolio</span>
          </p>
        </a>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <div
            className='w-[28px] h-[28px] cursor-pointer flex flex-col justify-between items-center'
            onClick={() => setToggle(!toggle)}
          >
            <span className={`h-0.5 bg-white w-full transform transition-all duration-300 ${toggle ? 'rotate-45 translate-y-[9px]' : ''}`}></span>
            <span className={`h-0.5 bg-white w-full transition-all duration-300 ${toggle ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`h-0.5 bg-white w-full transform transition-all duration-300 ${toggle ? '-rotate-45 -translate-y-[9px]' : ''}`}></span>
          </div>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;