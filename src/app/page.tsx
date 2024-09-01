"use client";

import { ThemeProvider } from "@/components/theme-provider";

import Navbar from "@/components/navbar";
import Herosection from "@/components/herosection";
// import Cards from "@/components/cards"
import Recipes from "@/app/recipes/page";
import People from "@/components/people"
// import About from "@/app/about/page";
import Footer from "@/components/footer"



export default function Home() {
  return (
   <>
   <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
   <Navbar/>
   <Herosection/>
   <Recipes/>
   <People/>
   <Footer/>
   
   </ThemeProvider>
   </>
  );
}
