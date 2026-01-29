import React, { useState, useEffect } from "react";
import { MdMenu } from "react-icons/md";
import {
  IoIosArrowDropdown,
  IoIosArrowDropup,
  IoMdClose,
} from "react-icons/io";
import { Link } from "react-router-dom";

const Drawer = () => {
  const [open, setOpen] = useState(false);
  const [weddingOpen, setWeddingOpen] = useState(false);

  const closeDrawer = () => {
    setOpen(false);
    setWeddingOpen(false);
  };

  /* ✅ PERFECT BODY SCROLL LOCK (image jaisa behaviour) */
  useEffect(() => {
    if (open) {
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.position = "";
      document.body.style.width = "";
    }

    return () => {
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [open]);

  return (
    <>
      {/* MENU ICON */}
      <button onClick={() => setOpen(true)}>
        <MdMenu size={26} />
      </button>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={closeDrawer}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
        />
      )}

      {/* DRAWER */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`fixed top-0 left-0 h-[100dvh] w-[82%] max-w-[320px]
        bg-white/70 backdrop-blur-xl z-50
        rounded-tr-[28px] rounded-br-[28px]
        shadow-2xl
        overflow-hidden
        transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
          <img src="/logo2.png" className="w-32" alt="logo" />
          <button
            onClick={closeDrawer}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow"
          >
            <IoMdClose size={18} />
          </button>
        </div>

        {/* CONTENT */}
        <div className="px-6 py-6 flex flex-col h-full gap-5 text-[16px] font-medium text-gray-800">
          <Link to="/" onClick={closeDrawer} className="hover:text-pink-500">
            Home
          </Link>

          <Link to="/gallery" onClick={closeDrawer} className="hover:text-pink-500">
            Gallery
          </Link>

          {/* WEDDING DROPDOWN */}
          <div>
            <button
              onClick={() => setWeddingOpen(!weddingOpen)}
              className="w-full flex justify-between items-center text-left hover:text-pink-500 transition-colors"
            >
              <span>Wedding</span>
              {weddingOpen ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
            </button>

            <div
              className={`ml-4 mt-4 overflow-hidden transition-all duration-500 ease-in-out
              ${weddingOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="flex flex-col gap-4 text-[15px] font-normal">
                <Link to="/haldi" onClick={closeDrawer} className="flex items-center gap-3 hover:text-pink-500">
                  <img src="/Haldi.png" className="w-6 h-6" />
                  <span>Haldi</span>
                </Link>

                <Link to="/mehndi" onClick={closeDrawer} className="flex items-center gap-3 hover:text-pink-500">
                  <img src="/Mehndi.png" className="w-5 h-5" />
                  <span>Mehndi</span>
                </Link>

                <Link to="/bridalshoot" onClick={closeDrawer} className="flex items-center gap-3 hover:text-pink-500">
                  <img src="/photography.png" className="w-7 h-6" />
                  <span>Bridal</span>
                </Link>

                <Link to="/candid" onClick={closeDrawer} className="flex items-center gap-3 hover:text-pink-500">
                  <img src="/Bridle.png" className="w-6 h-6" />
                  <span>Candid</span>
                </Link>
              </div>
            </div>
          </div>

          <Link to="/about" onClick={closeDrawer} className="hover:text-pink-500">
            About Us
          </Link>

          <Link to="/contact" onClick={closeDrawer} className="hover:text-pink-500">
            Contact
          </Link>

        
          
        </div>
      </div>
    </>
  );
};

export default Drawer;
