'use client';

import Hero from "@/components/Hero";
import BestSeller from "@/components/section/BestSeller";

export default function Home() {
  return (
    <main className="mx-auto">
      <Hero />
      <BestSeller />
    </main>
  );
}
