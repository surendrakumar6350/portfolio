import Link from "next/link";
import Image from "next/image";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  location: string;
  link: string;
  image: string;
}

const experiences: WorkExperience[] = [
  {
    company: "Freelance Developer",
    position: "Web Developer",
    location: "Remote",
    duration: "Jan 2023 – Present",
    link: "https://github.com/surendrakumar6350",
    image: "/leapflow.svg",
  },
  {
    company: "Open Source Contributor",
    position: "React and Node.js Developer",
    location: "Remote",
    duration: "Jun 2023 – Present",
    link: "https://github.com/surendrakumar6350",
    image: "/merlin.svg",
  },
];

export default function WorkExperience() {
  return (
    <div className="mt-5">
      <div className="flex flex-col">
        {experiences.map((exp) => (
          <Link
            className="exp cursor-default"
            key={exp.company.replace(" ", "-")}
            href={exp.link}
            target="_blank"
          >
            <article className="mt-3 mb-3 flex md:items-center items-start">
              <div className="w-10 h-10 mr-3 rounded-md mt-0.5 md:mt-0 overflow-hidden">
                <Image src={exp.image} alt={exp.company} width={40} height={40} className="object-cover" />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-center">
                  <h1 className="text-lg font-medium leading-[1.3em] text-left text-gray-300">
                    {exp.company}
                  </h1>
                  <p className="text-sm text-gray-300">{exp.location}</p>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-sm text-neutral-400">{exp.position}</p>
                  <p className={`text-[10px] text-neutral-400 text-end leading-[1.3em] tracking-tighter ${jetbrainsMono.className}`}>{exp.duration}</p>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
