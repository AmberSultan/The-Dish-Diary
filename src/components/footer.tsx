import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-10 mt-10 w-ful ">
      <div className="container mx-auto flex flex-col md:flex-row justify-around gap-10">
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="hover:text-gray-500">
            Home
          </Link>
          <Link href="/recipes" className="hover:text-gray-500">
            Recipes
          </Link>
          <Link href="/popular" className="hover:text-gray-500">
            Popular Dishes
          </Link>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <Link href="/categories" className="hover:text-gray-500">
            Categories
          </Link>
          <Link href="/about" className="hover:text-gray-500">
            About Us
          </Link>
          <Link href="/blog" className="hover:text-gray-500">
            Blog
          </Link>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <Link href="/contact" className="hover:text-gray-500">
            Contact Us
          </Link>
          <Link href="/submit-recipe" className="hover:text-gray-500">
            Submit a Recipe
          </Link>
          <Link href="/privacy-policy" className="hover:text-gray-500">
            Privacy Policy
          </Link>
        </div>
      </div>

      <div className="container mx-auto mt-10 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} RecipeHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
