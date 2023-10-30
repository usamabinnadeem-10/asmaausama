import Image from "next/image";

import BannerPicture from "@/components/BannerPicture";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex flex-col items-center">
        <div className="relative w-screen lg:max-w-[700px] h-screen flex flex-col items-center">
          <BannerPicture />
        </div>
      </div>
    </main>
  );
}
