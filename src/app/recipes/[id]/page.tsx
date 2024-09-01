"use client";

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch('/data/recipes.json'); // Adjust path if needed
        
        if (!response.ok) {
          const errorText = await response.text(); // Read the error response
          throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText}`);
        }

        const data = await response.json();
        const selectedRecipe = data.find((recipe: any) => recipe.id === id);

        if (!selectedRecipe) {
          throw new Error('Recipe not found');
        }

        setRecipe(selectedRecipe);
      } catch (error) {
        setError("Failed to fetch recipe data");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4 md:px-6 lg:px-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center md:text-left">{recipe.title}</h1>
      <div className="relative w-full h-48 md:h-64 lg:h-80 mb-4 md:mb-6">
        <Image
          src={recipe.images[0]} // Assuming there's an array of images
          alt={recipe.title}
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
          width={800} // Provide the actual width of the image
          height={600} // Provide the actual height of the image
        />
      </div>
      <p className="text-md md:text-lg mb-4 md:mb-6">{recipe.description}</p>
      
      <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Ingredients</h2>
      <ul className="list-disc list-inside space-y-1 md:space-y-2">
        {recipe.ingredients.map((ingredient: string, index: number) => (
          <li key={index} className="text-sm md:text-md">{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipePage;
