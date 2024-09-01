import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-12 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">About Us</h2>
        <p className="text-sm sm:text-lg mb-6">
          Welcome to Recipe Haven, your go-to destination for delicious and easy-to-make recipes. Our website is dedicated to helping you discover new dishes and enhance your cooking skills. Whether you are looking for a quick weeknight meal or a gourmet feast, we have something for everyone.
        </p>
        <p className="text-sm sm:text-lg mb-6">
          Our team of passionate food enthusiasts curates recipes from various cuisines to bring you the best flavors and cooking tips. We believe that cooking should be enjoyable and accessible, and our mission is to inspire you to create amazing meals in your own kitchen.
        </p>
        <p className="text-sm sm:text-lg">
          Thank you for visiting Recipe Haven. We hope you find the perfect recipe for your next meal and enjoy cooking as much as we do!
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
