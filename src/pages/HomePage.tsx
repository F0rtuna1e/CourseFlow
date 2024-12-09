import React from 'react';
import { Hero } from '../components/Hero';
import { Overview } from '../components/Overview';
import { Features } from '../components/Features';
import { Pricing } from '../components/Pricing';
import { Universities } from '../components/Universities';

export function HomePage() {
  return (
    <main className="pt-16">
      <Hero />
      <Overview />
      <Features />
      <Pricing />
      <Universities />
    </main>
  );
}