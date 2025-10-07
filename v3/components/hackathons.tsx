import Link from "next/link";
import Masonry from "./Masonry/Masonry";
import { hackathonWins } from "@/constants/hackathons";
const hackathonImages = [
  { id: 1, image: "/hackathons/image1.webp", height: 300 },
  { id: 2, image: "/hackathons/image2.webp", height: 400 },
  { id: 3, image: "/hackathons/image3.webp", height: 300 },
  { id: 4, image: "/hackathons/image4.webp", height: 350 },
  { id: 5, image: "/hackathons/image5.webp", height: 300 },
  { id: 6, image: "/hackathons/image6.webp", height: 350 },
  { id: 7, image: "/hackathons/image7.webp", height: 300 },
  { id: 8, image: "/hackathons/image8.webp", height: 320 },
  { id: 9, image: "/hackathons/image9.webp", height: 300 },
];

export default function Hackathons() {
  return (
    <>
      <div className="w-full h-[1px]"></div>
      <div className="mt-5">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl text-white mt-5 mb-5">Hackathons Wins</h1>
          <Link href="/hackathons" className="text-neutral-500 hover:underline">more</Link>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col">
            {hackathonWins
              .slice(-2)
              .reverse()
              .map((hack) => (
                <article key={hack.name} className="proj group mb-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-gray-300">
                        {hack.name}
                      </h3>
                      <p className="text-sm text-gray-400 ">
                        {hack.venue}
                      </p>
                    </div>
                    <p className="text-sm text-gray-400 ">
                      {hack.description}
                    </p>
                  </div>
                </article>
              ))}
          </div>
          <div className="mb-10">
            <h2 className="text-2xl text-white mb-4">Uncompiled Moments</h2>
            <Masonry data={hackathonImages} />
          </div>
        </div>
      </div>
    </>
  );
}
