import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const haldiData = [
  {
    title: "Go Eco-Friendly",
    desc: "Planning a vibrant Haldi ceremony photoshoot that's kind to the Earth? Look no further! Let's weave nature's magic into an unforgettable and sustainable celebration. Imagine a backdrop bursting with colour! Lush banana leaves adorned with vibrant marigolds (Genda Phool) create a stunning focal point and make your haldi photoshoot attractive. For an extra touch of texture and depth, incorporate upcycled sarees and colourful clothes into the decor, creating a one-of-a-kind and eco-conscious ambiance. Welcome your guests with a beautiful rangoli, a hand-crafted masterpiece that adds a touch of cultural charm and sets the stage for a joyous celebration.",
    img: "haldi1.png",
  },
  {
    title: "Haldi Ceremony",
    desc: "The vibrant pulse of Indian haldi ceremony celebrations – Haldi and Sangeet! One explodes with a kaleidoscope of colors and playful joy, the other bursts with rhythmic beats and love-filled dance. But how do you freeze these unforgettable moments in stunning photos, without breaking the bank? Here's where Wedding Photography By SF steps in as your perfect partner!",
    img: "haldi2.png",
  },
  {
    title: "Haldi On Your Terrace",
    desc: "Craving a Haldi ceremony that's both heartfelt and intimate? Imagine saying surrounded by your closest loved ones, bathed in the warm glow of the sun! Transform your rooftop into a breathtaking oasis or utilize the charming ambiance of your bungalow for a truly unforgettable Haldi photoshoot experience. Wedding Photography By SF will be there to capture every special moment, from the vibrant colors to the genuine emotions, against the backdrop of the beautiful natural light. Let the joy of your celebration overflow and soak up the sunshine as you embark on this exciting new chapter!",
    img: "haldi3.png",
  },
  {
    title: "Holi Themed Haldi",
    desc: "Imagine a celebration infused with the playful spirit of Holi. Ditch the ordinary and create an explosion of vibrancy with flower petals or colourful powders! This isn't just about the soon-to-be-wed couple - it's a chance for YOU and your loved ones to create unforgettable memories. Wedding Photography By SF will be there to capture the playful energy and transform it into stunning photographs that will bring the joy flooding back for years to come. Let your haldi photoshoot be a vibrant reflection of your unique love story and adventurous spirit!",
    img: "haldi4.png",
  },
];

const Haldicard = () => {
  return (
    <section className="w-full py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-12">
          HOW TO GET FUN HALDI PICTURES – Wedding Photography By SF
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {haldiData.map((item, index) => (
            <Card
              key={index}
              className="border-none shadow-none"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-md">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-44 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <CardHeader className="px-0 pt-4">
                <CardTitle className="text-base font-semibold">
                  {item.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="px-0">
                <CardDescription className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Haldicard;
