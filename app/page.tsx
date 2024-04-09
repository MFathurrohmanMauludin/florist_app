'use client';

import Hero from "@/components/section/Hero";
import BestSeller from "@/components/section/BestSeller";
import Discount from "@/components/section/Discount";

export default function Home() {
  return (
    <main className="mx-auto">
      <Hero />
      <BestSeller />
      <Discount />
    </main>
  );
}
