import React from "react";
import { useSelector } from "react-redux";
import { HeroParallaxDemo } from "../components/Hero/Hero";
import CircularGallery from "../components/Gallery/Gallery";

export default function Home() {
  const user = useSelector((state) => state.user.accessToken);
  console.log(user);
  return (
    <div>
      <HeroParallaxDemo />
      <section className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          Our Creative Showcase
        </h2>
        <p className="text-gray-500 mt-2">
          Explore our collection of featured works and moments
        </p>
      </section>

      <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
      </div>
    </div>
  );
}
