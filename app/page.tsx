'use client';

import Hero from "@/components/section/Hero";
import BestSeller from "@/components/section/BestSeller";
import Discount from "@/components/section/Discount";
import ColorfulFlower from "@/components/section/ColorfulFlower";
import LatestPost from "@/components/section/LatestPost";
import Surprice from "@/components/section/Surprice";
import Testimonial from "@/components/section/Testimonial";

export default function Home() {
  return (
    <main className="mx-auto">
      <Hero />
      <BestSeller />
      <Discount />
      <ColorfulFlower />
      <LatestPost />
      <Surprice />
      <Testimonial />
    </main>
  );
}
