import React from "react";
import Image from "next/image";

import weddingInvite from "@/public/weddinginvite.webp";

const Card = ({ type }: { type: "mehndi" | "baraat" | "walima" }) => {
  return (
    <Image
      className="absolute w-full object-contain"
      fill
      alt="wedding card"
      src={weddingInvite}
    />
  );
};

export default Card;
