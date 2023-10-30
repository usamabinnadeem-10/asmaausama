"use client";
import React, { useState, useEffect } from "react";

import useWindowDimensions from "@/hooks/useWindowDimensions";

const mobileVideo =
  "https://drive.google.com/uc?id=1YSkSrBAd3hAvXrCjxZ3lwlanArStuYJ0";
const desktopVideo =
  "https://drive.google.com/uc?id=1U5WSkRjH7uhmletDPtAzxNXRHm3EekVB";

const MainVideo = () => {
  const [videoSrc, setVideoSrc] = useState(mobileVideo);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width && width > 630) setVideoSrc(desktopVideo);
    else setVideoSrc(mobileVideo);
  }, [width]);

  if (typeof window === undefined) return <></>;
  return (
    <video
      className="w-full h-full object-cover"
      loop
      autoPlay
      muted
      src={videoSrc}
    />
  );
};

export default MainVideo;
