"use client";

import Image from 'next/image';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; 
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { IconClipboardCopy } from "@tabler/icons-react";
import Link from 'next/link';

export default function BentoGridDemo() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/recipes.json');
        
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText}`);
        }
        
        const data = await response.json();
        
        if (!data || data.length === 0) {
          throw new Error('No recipes found');
        }
        
        const fetchedItems = data.map((recipe: any) => ({
          id: recipe.id,
          title: recipe.title,
          description: recipe.description,
          header: recipe.images[0], // Assuming this is the image URL
          icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
          width: 500, // Example width, adjust as necessary
          height: 300 // Example height, adjust as necessary
        }));
        
        setItems(fetchedItems);
      } catch (error) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <h1 className="mt-20 font-bold text-3xl text-center">Popular Recipes</h1>
      <div className="mt-20 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item, i) => (
          <Link href={`/recipes/${item.id}`} key={i}>
            <div className={`flex flex-col p-4 rounded-lg shadow-md bg-black hover:bg-black transition duration-300 ease-in-out ${i === 3 || i === 6 ? "md:col-span-2" : ""} h-full`}>
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={item.header}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                  width={item.width} // Use the provided width
                  height={item.height} // Use the provided height
                />
              </div>
              <BentoGridItem
                title={item.title}
                description={
                    <p className="line-clamp-3 ">
                      {item.description}
                    </p>
                  }
                icon={item.icon}
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
