import React from "react";

const BridalShootbanner = () => {
  return (
    <section className="w-full bg-white py-8">
      <div className="max-w-5xl mx-auto px-4">

        {/* Image */}
        <div className="w-full overflow-hidden rounded-md">
          <img
            src="bridal1.png" // apni image yaha lagao
            alt="Bridal Photoshoot"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Content */}
        <div className="mt-10 text-center">

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Dreaming Of A Perfectly Captured Bridal Photoshoot?
          </h1>

          {/* Sub line */}
          <p className="mt-3 text-lg font-medium text-gray-700">
            Bridal Photoshoot With Wedding Photography By SF
          </p>

          {/* Description */}
          <div className="mt-8 space-y-5 text-sm md:text-base text-gray-600 leading-relaxed text-justify">

            <p>
              Are you a bride-to-be with a Pinterest board overflowing with dream
              wedding inspiration? Do you, like Geet from “Jab We Met”, crave a
              bridal photoshoot that reflects your unique personality?
            </p>

            <p>
              At Wedding Photography By SF, we live for capturing the magic of a
              bridal photoshoot. From regal elegance to modern charm, we tailor
              every dulhan photoshoot to match your vision and style.
            </p>

            <p>
              Imagine yourself radiant and confident, surrounded by breathtaking
              backdrops. We focus on timeless emotions, graceful poses, and
              flawless details to create bridal photos that truly stand out.
            </p>

            <p>
              Your bridal photos deserve more than just memories — they deserve
              to be iconic. Let us turn your dream bridal photoshoot into a
              stunning visual story you’ll cherish forever.
            </p>

          </div>

          {/* Sub Heading */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mt-16 mb-8">
            3 Pro Tips For Your Dream Bridal Photoshoot
          </h2>

          {/* Tips */}
          <div className="space-y-6 text-sm md:text-base text-gray-600 leading-relaxed text-justify">

            <p>
              <span className="font-semibold text-gray-800">
                1. Mood Board Magic:
              </span>{" "}
              A mood board helps visualise colours, poses, outfits, and emotions.
              It gives our team a clear creative direction to bring your dream
              dulhan photoshoot to life.
            </p>

            <p>
              <span className="font-semibold text-gray-800">
                2. Location Scouting:
              </span>{" "}
              Knowing your shoot location in advance ensures comfort and allows
              us to plan lighting, angles, and compositions perfectly.
            </p>

            <p>
              <span className="font-semibold text-gray-800">
                3. Thoughtful Props:
              </span>{" "}
              From florals to veils and personalised elements, the right props
              elevate your bridal photos and add a personal, unforgettable touch.
            </p>

            <p>
              Ready to create a bridal photoshoot that feels truly *you*? Let
              Wedding Photography By SF capture your elegance, emotions, and
              beauty — perfectly framed forever.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default BridalShootbanner;
