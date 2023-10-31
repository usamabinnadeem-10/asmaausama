"use client";
import React, { useState, useEffect } from "react";

import useWindowDimensions from "@/hooks/useWindowDimensions";

const mobileVideo =
  "https://drive.google.com/uc?id=1ft_vR7IJrwEpxDspNaxmqrLsKDazL728";
const desktopVideo =
  "https://drive.google.com/uc?id=1ZJqYgGe3-nPctptlpWEIvBjB1zGBc1o9";

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
      playsInline
    />
  );
};

export default MainVideo;
