import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

const HomeSlider = () => {
  const data = [
    { img: "01.jpg", title: "Beautiful Wedding Moments", desc: "We capture your best emotions with natural lighting and premium quality." },
    { img: "02.jpg", title: "Cinematic Photography", desc: "Every shot is crafted to bring your story alive with elegance." },
    { img: "03.JPG", title: "Creative Couple Portraits", desc: "Perfect balance of art, emotions, and stunning frames." },
    { img: "04.jpg", title: "Premium Event Coverage", desc: "From candid shots to dramatic portraits — we cover everything." }
  ];

  return (
    <div className="relative w-full max-w-7xl mx-auto">

      <Carousel
        className="w-full"
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselContent>
          {data.map((value, index) => (
            <CarouselItem key={index}>
              <div className="relative">
                <Card className="overflow-hidden rounded-none">
                  <CardContent className="p-0 relative">
                    <img
                      src={value.img}
                      alt={`slide-${index + 1}`}
                      className="
                        w-full 
                        h-[250px]         
                        sm:h-[350px]      
                        md:h-[450px]     
                        lg:h-[550px]      
                        xl:h-[700px]      
                        object-cover
                      "
                    />

                    <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 text-center bg-gradient-to-t from-black/60 to-transparent">
                      <h2 className="text-white text-xl sm:text-2xl font-bold">{value.title}</h2>
                      <p className="text-white/90 mt-2 text-xs sm:text-sm max-w-xl mx-auto">{value.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

     
        
      </Carousel>
    </div>
  );
};

export default HomeSlider;
