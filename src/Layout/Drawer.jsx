import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { IoIosArrowDropdown, IoIosArrowDropup, IoIosCloseCircleOutline, IoMdClose } from "react-icons/io";

const Drawer = () => {
  const [open, setOpen] = useState(false);
  const [weddingOpen, setWeddingOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="rounded-2xl p-2"
      >
        <MdMenu size={24} />
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-20 z-0"
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full w-2/3 bg-white rounded-tr-2xl z-10 transform transition-transform duration-700 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className=" text-center p-4 w-full flex items-center justify-between ">
          <div className="w-40"><img src="logo2.png " alt="MyLogo" /></div>
          <button onClick={() => setOpen(false)}>
            <IoMdClose className="bg-purple-100" size={20} />
          </button>
        </div>

        <div className="p-4 flex flex-col gap-4">
          <a href="/" className="text-lg">Home</a>
          <a href="/gallery" className="text-lg">Gallery</a>

          <div>
            <div className="flex">
              <button
                onClick={() => setWeddingOpen(!weddingOpen)}
                className="flex items-center justify-between w-full text-left text-lg"
              >
                <span>Wedding</span>
                <span className="flex items-center">
                  {weddingOpen ? (
                    <IoIosArrowDropup size={20} />
                  ) : (
                    <IoIosArrowDropdown size={20} />
                  )}
                </span>
              </button>
            </div>

            <div
              className={`flex flex-col ml-4 mt-2 gap-4 text-sm font-serif uppercase overflow-hidden transition-all duration-500 ${
                weddingOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <a href="/haldi">Haldi</a>
              <a href="/mehndi">Mehndi</a>
              <a href="/bridalshoot">Bridal Shoot</a>
              <a href="/candid">Candid</a>
            </div>
          </div>

          <a href="/about" className="text-lg">About Us</a>
          <a href="/contact" className="text-lg">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
