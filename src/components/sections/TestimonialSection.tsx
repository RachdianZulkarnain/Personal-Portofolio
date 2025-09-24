"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { Marquee } from "../magicui/marquee";
import { reviews } from "../../types/Reviews";

interface Review {
  img: string;
  name: string;
  username: string;
  body: string;
}

const ReviewCard: React.FC<Review> = ({ img, name, username, body }) => {
  return (
    <figure
      className={twMerge(
        "text-[#ADB7BE] relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/[.1] hover:bg-[#756eff] hover-animation"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full bg-white"
          width="32"
          height="32"
          alt={`${name}'s avatar`}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-3 text-sm">{body}</blockquote>
    </figure>
  );
};

const Testimonial: React.FC = () => {
  const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
  const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

  return (
    <div
      id="testimonial"
      className="items-start mt-20 md:mt-20 c-space"
    >
      <h2 className="animate-pulse text-center text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600 font-bold mb-12">
        Testimonials
      </h2>
      <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
      </div>
    </div>
  );
};

export default Testimonial;
