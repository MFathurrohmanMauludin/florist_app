'use client';

import Hero from "@/components/section/Hero";
import BestSeller from "@/components/section/BestSeller";
import Discount from "@/components/section/Discount";
import ColorfulFlower from "@/components/section/ColorfulFlower";
import Blog from "@/components/section/Blog";

export default function Home() {
  return (
    <main className="mx-auto">
      <Hero />
      <BestSeller />
      <Discount />
      <ColorfulFlower />
      <Blog />
    </main>
  );
}
