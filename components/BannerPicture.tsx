"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";

import flowersBig from "@/public/flowers-big.webp";
import flowersSmall from "@/public/flowers-small.webp";

import useWindowDimensions from "@/hooks/useWindowDimensions";

const BannerPicture = () => {
  const [isMobile, setIsMobile] = useState(false);

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width) {
      if (width >= 768) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    }
  }, [width]);

  return <Image src={isMobile ? flowersSmall : flowersBig} alt="Flowers" />;
};

export default BannerPicture;
