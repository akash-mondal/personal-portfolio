// components/ClientLayout.tsx
"use client";

import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [isGameVisible, setIsGameVisible] = useState(false);

  return (
    <>
      <Header isGameVisible={isGameVisible} />
      {children}
      <Footer onGameVisibilityChange={setIsGameVisible} />
    </>
  );
}
