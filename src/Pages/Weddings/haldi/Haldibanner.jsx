import React from "react";

const Haldibanner = () => {
  return (
    <section className="w-full bg-white py-8">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Image */}
        <div className="w-full overflow-hidden rounded-md">
          <img
            src="haldibanner.png"
            alt="Haldi Photoshoot"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Content */}
        <div className="mt-10 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Haldi Photoshoot
          </h1>

          <p className="mt-3 text-lg font-medium text-gray-700">
            Haldi Photoshoot With Wedding Photography By SF
          </p>

          <div className="mt-8 space-y-5 text-sm md:text-base text-gray-600 leading-relaxed text-justify">
            <p>
              Dreaming of a vibrant haldi ceremony photoshoot bursting with joy,
              just like the iconic scene in Yeh Jawaani Hai Deewani? Look no
              further! We at Wedding Photography By SF are wedding photography
              veterans, but when it comes to wedding photography the capturing
              the infectious energy of a haldi photoshoot, we transform it into
              true storytellers.
            </p>

            <p>
              Every celebration is unique and your haldi photoshoot is no
              exception. It’s a chance to create lasting memories with loved
              ones, filled with laughter and love. Imagine capturing those
              candid moments: the playful teasing as your brother smothers you
              with haldi paste, or the surprise (and maybe joyful screams!) of
              an ice bucket challenge orchestrated by your friends. We’re there
              for it all, anticipating every twist and turn to ensure your most
              cherished memories are beautifully preserved.
            </p>

            <p>
              So, if you envision a fun-filled haldi overflowing with vibrant
              moments, we’re your perfect match! Let’s turn your vision into a
              reality.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Haldibanner;
