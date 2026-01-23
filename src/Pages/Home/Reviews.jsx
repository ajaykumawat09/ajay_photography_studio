import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

// ⭐ ShadCN Icon (Lucide)

import { FaStar } from "react-icons/fa";

const Reviews = () => {
  const reviews = [
    {
      name: "Aman Verma",
      role: "Wedding Client",
      rating: 5,
      img: "https://i.pravatar.cc/150?img=3",
      review:
        "Amazing photography! The team captured every moment beautifully. Editing was natural and very professional. Highly recommended!",
    },
    {
      name: "Sneha Sharma",
      role: "Bride",
      rating: 4,
      img: "https://i.pravatar.cc/150?img=5",
      review:
        "We loved our wedding pictures! The quality, emotions, and overall storytelling were just perfect. Best team to work with!",
    },
    {
      name: "Rohit & Priya",
      role: "Couple Shoot",
      rating: 5,
      img: "https://i.pravatar.cc/150?img=8",
      review:
        "Very cooperative and creative team. They made us feel super comfortable. The final photos were outstanding!",
    },
    {
      name: "Karan Mehta",
      role: "Family Function",
      rating: 4,
      img: "https://i.pravatar.cc/150?img=10",
      review:
        "Professional team with amazing skills. They covered our family event flawlessly. Loved the candid shots!",
    },
    {
      name: "Pooja Soni",
      role: "Model Shoot",
      rating: 5,
      img: "https://i.pravatar.cc/150?img=15",
      review:
        "Their creativity and direction made the shoot super smooth. Editing was elegant and premium. Highly impressed!",
    },
    {
      name: "Harsh Raj",
      role: "Engagement",
      rating: 5,
      img: "https://i.pravatar.cc/150?img=20",
      review:
        "Very calm and friendly team. They captured every moment perfectly. Highly recommended for any couple shoot!",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16">

      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Client Testimonials
        </h2>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Our clients love their experience with us — here’s what they say.
        </p>
      </div>

      <Carousel
        className="w-full"
        opts={{ align: "start", loop: true }}
        plugins={[
          Autoplay({
            delay: 2500,
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {reviews.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <Card className="border rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 bg-white h-full">
                <CardContent className="p-6">

                  {/* ⭐ Rating Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar
                        key={star}
                        size={18}
                        className={`${
                          star <= item.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Avatar + Name */}
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={item.img} alt={item.name} />
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-gray-500 text-sm">{item.role}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    "{item.review}"
                  </p>

                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-2 sm:left-4" />
        <CarouselNext className="right-2 sm:right-4" />
      </Carousel>
    </div>
  );
};

export default Reviews;
