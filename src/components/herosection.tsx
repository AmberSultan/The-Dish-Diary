"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/image-slider";

export default function ImagesSliderDemo() {
  const images = [
    // "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJlY2lwZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVjaXBlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1481671703460-040cb8a2d909?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8fDA%3D",
  ];
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.1,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold mb-4 text-xl md:text-6xl text-center bg-clip-text ">
  Discover Delicious Recipes
</motion.p>
<p className="text-white text-xs md:text-sm lg:text-base xl:text-base mx-4 md:mx-6 lg:mx-8 xl:mx-12 text-center">
  🍲 Explore Recipes | 🍳 Cook with Love | 📚 Find Your Favorite Dishes
</p>
      </motion.div>
    </ImagesSlider>
  );
}
