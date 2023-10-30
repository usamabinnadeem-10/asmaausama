import React from "react";
import Link from "next/link";

const Text = ({ text, href }: { text: string; href: string }) => {
  return (
    <div className="flex flex-col items-center p-2 border-black border-[1px] backdrop-blur-md w-[180px] md:w-[250px]">
      <Link href={href} className="text-4xl md:text-5xl">
        {text}
      </Link>
    </div>
  );
};

export default Text;
