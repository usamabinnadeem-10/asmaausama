import Image from "next/image";

import BannerPicture from "@/components/BannerPicture";
import Text from "@/components/Text/Text";

import MainVideo from "@/components/MainVideo/MainVideo";

export default function Home() {
  return (
    <main className="relative flex flex-col h-screen w-screen items-center text-xl gap-4 bg-black">
      <div className="w-screen h-screen">
        <MainVideo />
      </div>
      <main className="absolute top-0 left-0 flex flex-col w-screen h-screen justify-center items-center py-16 text-xl gap-4">
        <Text href="mehndi" text="Mehndi" />
        <Text href="baraat" text="Baraat" />
        <Text href="walima" text="Walima" />
      </main>
    </main>
  );
}
