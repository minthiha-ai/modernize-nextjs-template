"use client"

import React from 'react';
import PageContainer from '@/app/components/container/PageContainer';

// components
import Banner from '@/app/components/landingpage/banner/Banner';
import C2a from '@/app/components/landingpage/c2a/C2a';
import C2a2 from '@/app/components/landingpage/c2a/C2a2';
import DemoSlider from '@/app/components/landingpage/demo-slider/DemoSlider';
import Features from '@/app/components/landingpage/features/Features';
import Footer from '@/app/components/landingpage/footer/Footer';
import Frameworks from '@/app/components/landingpage/frameworks/Frameworks';
import LpHeader from '@/app/components/landingpage/header/Header';
import Testimonial from '@/app/components/landingpage/testimonial/Testimonial';

export default function Landingpage () {
  return (
    <PageContainer title="Landingpage" description="this is Landingpage">
      <LpHeader />
      <Banner />
      <DemoSlider />
      <Frameworks />
      <Testimonial />
      <Features />
      <C2a />
      <C2a2 />
      <Footer />
    </PageContainer>
  );
};

Landingpage.layout = "Blank";
