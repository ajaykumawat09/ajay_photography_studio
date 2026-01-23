import React from "react";

export const Mehndipage = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Page Heading */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-wide text-gray-900">
            Mehndi Ceremony Photography
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            The Mehndi ceremony is a joyful celebration filled with colour,
            laughter, and heartfelt emotions. We capture every moment in a
            natural and storytelling style.
          </p>
        </div>

        {/* Three Column Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Column 1 */}
          <div className="text-center">
            <h3 className="text-xl font-medium text-gray-900 mb-4">
              Candid Moments & Real Emotions
            </h3>
            <p className="text-gray-600 leading-relaxed">
              From spontaneous smiles to shared laughter with friends and
              family, we focus on genuine moments that reflect the true spirit
              of your Mehndi ceremony.
            </p>
          </div>

          {/* Column 2 */}
          <div className="text-center">
            <h3 className="text-xl font-medium text-gray-900 mb-4">
              Colours, Details & Close-Ups
            </h3>
            <p className="text-gray-600 leading-relaxed">
              The richness of mehndi colours, intricate hand details, and
              emotional close-ups are captured with artistic framing and soft
              lighting for timeless photographs.
            </p>
          </div>

          {/* Column 3 */}
          <div className="text-center">
            <h3 className="text-xl font-medium text-gray-900 mb-4">
              Music, Dance & Celebration
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Mehndi is full of energy and celebration. We capture dance,
              movement, and joy through dynamic shots that bring your memories
              to life.
            </p>
          </div>

        </div>

        {/* Photography Style Section */}
        <div className="mt-20 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Our Mehndi Photography Style
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Our style is simple and natural. We use warm tones, natural light,
            and candid storytelling to create images that feel authentic,
            emotional, and timeless.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Want your Mehndi moments to be captured beautifully and naturally?
          </p>
          <button className="px-8 py-3 bg-green-800 text-white text-sm uppercase tracking-wide hover:bg-green-700 transition rounded-md">
            Book Your Mehndi Photoshoot
          </button>
        </div>

      </div>
    </section>
  );
};
