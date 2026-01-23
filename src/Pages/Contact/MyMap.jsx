import React from 'react'
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io';

const MyMap = () => {
  return (
    <div className="w-full flex flex-col items-center">
 
   <marquee>
  <h1
    className="font-bold tracking-tight text-transparent whitespace-nowrap select-none pointer-events-none"
    style={{
      fontSize: "70px",
      WebkitTextStroke: "1px #e5e5e5",
      opacity: 1.4,
    }}
  >
    Contact Us
  </h1>
</marquee>


  


      {/* ------------------ MAP SECTION ------------------ */}
      <div className="w-full flex justify-center ">
        <div className="max-w-7xl w-full bg-pink-100 flex flex-col md:flex-row gap-10 px-4 py-10 mx-auto rounded-lg">

          {/* LEFT SIDE TEXT */}
          <div className="md:w-1/2 w-full ">
           

            <p className="mb-6 leading-relaxed text-xl">
              We are Jaipur’s best wedding photography team, capturing candid,
              elegant, and timeless moments. Visit our Bani Park studio or contact
              us for premium wedding shoots, pre-weddings, and cinematic coverage.
            </p>

           <section className="w-full  py-5">
<div className="  px-2 flex flex-col md:flex-row items-center gap-10">


{/* Image */}
<img
src="chetan.png" // change to your image
alt="Profile"
className="w-40 h-40 md:w-30 md:h-30 rounded-full object-cover border-4 border-yellow-300"
/>


{/* Text */}
<div>
<h2 className="text-2xl font-bold text-gray-900">Chetan Kumawat</h2>
<p className="text-gray-600 mt-1 mb-4">Owner | Cinematographer & Photographer</p>


<p className="text-lg text-gray-800">kumawatajay137@gmail.com</p>
<p className="text-lg text-gray-800 mt-1">+91 7619748778</p>
  <div className="flex gap-2">
            <span className="w-7 h-7 flex items-center justify-center rounded-full text-blue-600 hover:scale-125 transition">
              <a href="https://facebook.com" target="_blank">
                <FaFacebook size={20} />
              </a>
            </span>

            <span className="w-7 h-7 flex items-center justify-center text-pink-600 rounded-full hover:scale-125 transition">
              <a href="https://instagram.com" target="_blank">
                <IoLogoInstagram size={20} />
              </a>
            </span>

            <span className="w-7 h-7 flex items-center justify-center text-red-600 rounded-full hover:scale-125 transition">
              <a href="https://youtube.com" target="_blank">
                <FaYoutube size={20} />
              </a>
            </span>
          </div>
</div>


</div>
</section>
          </div>

          {/* RIGHT SIDE MAP */}
          <div className="md:w-1/2 w-full">
            <iframe
              src="https://www.google.com/maps?q=26.936020,75.787910&z=17&output=embed"
              width="100%"
              height="500"
              style={{ border: "0", borderRadius: "10px" }}
              allowFullScreen=""
              loading="lazy"
              title="Map"
            ></iframe>
          </div>

        </div>
      </div>

      {/* ------------------ CONTACT FORM SECTION (IMAGE LEFT) ------------------ */}


    </div>
  );
};

export default MyMap;
