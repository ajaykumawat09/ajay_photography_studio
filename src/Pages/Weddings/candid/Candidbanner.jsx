import React from "react";

const Candidbanner = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">

        {/* IMAGE */}
        <div className="w-full mb-14">
          <img
            src="candid1.png"   // 🔴 apni image ka path yaha do
            alt="Candid Photoshoot"
            className="w-full h-auto object-cover grayscale"
          />
        </div>

        {/* MAIN HEADING */}
        <h1 className="text-center text-3xl md:text-4xl font-semibold text-black">
          Candid Photoshoot
        </h1>

        {/* SUB HEADING */}
        <h2 className="text-center mt-6 text-lg md:text-xl font-semibold uppercase tracking-wide text-black">
          LET US TELL YOU A SECRET OF CANDID PHOTOSHOOT!!
        </h2>

        {/* DESCRIPTION */}
        <div className="mt-10 space-y-6 text-justify text-gray-800 text-base leading-7">

          <p>
            Ditch the cheese! Candid photography by Wedding Photography By SF lets
            you unwind and be your true selves, absorbing every magical moment
            with your favorite people. No need to fake smiles or obsess over
            perfection. It’s about capturing the real you – the genuine laughter,
            heartfelt tears and spontaneous hugs that will make your candid
            photography memories truly irreplaceable.
          </p>

          <p>
            Candid photography tells a story that goes beyond words, unlike
            traditional posed shots. Imagine a visual masterpiece – a symphony
            of emotions that transports you back to the joy and wonder of your
            wedding day whenever you revisit the photos.
          </p>

          <p>
            Let Wedding Photography By SF capture the heart of your celebration,
            authentically and beautifully by their candid photoshoot with their
            premium wedding photography.
          </p>

        </div>

        {/* WHY CHOOSE */}
        <h2 className="text-center mt-20 text-2xl md:text-3xl font-bold uppercase text-black leading-snug">
          WHY CHOOSE SONY FASHION PHOTOGRAPHY FOR CANDID PHOTOGRAPHY?
        </h2>

        <div className="mt-10 space-y-6 text-justify text-gray-800 text-base leading-7">

          <p>
            Forget stiff poses and staged smiles! At Sony Fashion Photography, we
            believe in capturing the magic of your wedding day through candid
            photography. It’s your story, unscripted and overflowing with raw
            emotion.
          </p>

          <p>
            Imagine flipping through your wedding album – not a collection of
            generic poses but a vibrant tapestry of moments that bring you right
            back to that unforgettable day. Every candid photo will be a whisper
            of a memory, a smile waiting to bloom, a reminder of the pure joy you
            shared with the people who matter most.
          </p>

          <p>
            Our experienced candid photography team is all about capturing the
            genuine connections, the happy tears, the spontaneous laughter that
            make your wedding truly unique. We want you to look back on your
            photos and see yourselves, perfectly captured in love. Let Sony
            Fashion Photography be your storyteller, crafting a visual candid
            photoshoot masterpiece that celebrates your love and lets your
            personalities shine through forever.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Candidbanner;
