import Transition from "@/components/transition";
import { AiOutlineRight } from "react-icons/ai";
import { AtSignIcon, GithubIcon, LinkedinIcon } from "@/components/svgs";
import { Projects } from "@/constants";
import Badge from "@/components/badge";
import Image from "next/image";
import Link from "next/link";
import Hackathons from "@/components/hackathons";
import WorkExperience from "@/components/workexp";
import Links from "@/components/links";

export default function Home() {
  const birthDate = new Date("2004-07-10");
  const today = new Date();
  const age =
    today.getFullYear() -
    birthDate.getFullYear() -
    (today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() < birthDate.getDate())
      ? 1
      : 0);

  return (
    <main className="min-h-screen pt-10 container items-center justify-center flex-col">
      <div className="content-center items-center flex flex-none flex-col flex-nowrap gap-2.5 h-min justify-center overflow-visible relative w-full px-4 py-0">
        <div className="container max-w-[512px] flex flex-row">
          <Image
            src="/pfp.jpeg"
            alt="Surendra Kumar"
            width={44}
            height={44}
            className="rounded-full"
          />
          <div className="flex flex-col ml-2">
            <h1 className="text-base font-bold text-white">Surendra Kumar</h1>
            <span className="text-sm text-gray-400">@surendrakumar6350</span>
          </div>
        </div>
      </div>
      <div className="flex mt-8 flex-col max-w-[512px] mx-auto p-5 lg:p-0">
        <div className="container">
          <h1 className="text-xl font-bold text-gray-400">
            I make
            <Transition />
          </h1>
          <p className="mt-3 text-xl text-gray-400">
            I&apos;m Surendra, a {age} year old developer living in India. I am
            a self-taught developer who loves to code and make things.
          </p>
          <p className="mt-3 text-xl text-gray-400">
            messing with{" "}
            <Badge href="https://reactjs.org">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 841.9 595.3"
                className="inline-flex mr-1"
                width="14"
                height="14"
              >
                <g fill="#61DAFB">
                  <path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z" />
                  <circle cx="420.9" cy="296.5" r="45.7" />
                  <path d="M520.5 78.1z" />
                </g>
              </svg>
              React
            </Badge>
            ,{" "}
            <Badge href="https://nextjs.org">
              <svg
                width="14"
                height="14"
                aria-label="Next.js logomark"
                viewBox="0 0 180 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline-flex mr-1"
              >
                <mask
                  id="a"
                  style={{
                    maskType: "alpha",
                  }}
                  maskUnits="userSpaceOnUse"
                  x={0}
                  y={0}
                  width={180}
                  height={180}
                >
                  <circle cx={90} cy={90} r={90} fill="#000" />
                </mask>
                <g mask="url(#a)">
                  <circle
                    cx={90}
                    cy={90}
                    r={87}
                    fill="#000"
                    stroke="#fff"
                    strokeWidth={6}
                  />
                  <path
                    d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l73.885 95.461a90.304 90.304 0 009.509-7.325z"
                    fill="url(#paint0_linear_408_139)"
                  />
                  <path
                    fill="url(#paint1_linear_408_139)"
                    d="M115 54H127V126H115z"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_408_139"
                    x1={109}
                    y1={116.5}
                    x2={144.5}
                    y2={160.5}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#fff" />
                    <stop offset={1} stopColor="#fff" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_408_139"
                    x1={121}
                    y1={54}
                    x2={120.799}
                    y2={106.875}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#fff" />
                    <stop offset={1} stopColor="#fff" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
              Next.js
            </Badge>
            ,{" "}
            <Badge href="https://nodejs.org">
              <svg
                width="14"
                height="14"
                className="inline-flex mr-1"
                viewBox="0 0 256 289"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
              >
                <path
                  d="M127.999 288.463s14.222-8.23 14.222-8.23V170.37l12.777 7.365v118.81s13.89-8.012 13.89-8.012V159.391l-40.889-23.7v152.772z"
                  fill="#80CD29"
                />
                <path
                  d="M127.999 288.463v-152.77l-40.889 23.7v110.54s13.889 8.013 13.889 8.013V178.735l12.778-7.365v109.863l14.222 7.23z"
                  fill="#80CD29"
                />
                <path
                  d="M0 165.261v-118.94l41.222 23.76v118.94L0 165.26zM41.222 70.027l40.889-23.76 40.889 23.76v47.52l-40.89-23.76v47.52l-40.888-23.76V70.026z"
                  fill="#333333"
                />
                <path
                  d="M41.222 70.027l40.889-23.76 40.889 23.76v47.52l-40.89-23.76v47.52l-40.888-23.76V70.026z"
                  fill="#333333"
                />
                <path
                  d="M41.222 70.027L0 46.323l41.222-23.761 40.889 23.76-40.889 23.76z"
                  fill="#80CD29"
                />
                <path
                  d="M122.889 46.323l41.222-23.761 40.889 23.76L163.778 70.09l-40.889-23.767z"
                  fill="#80CD29"
                />
                <path
                  d="M205 165.261l-41.222 23.761V70.089L205 46.328v118.933z"
                  fill="#333333"
                />
                <path
                  d="M163.778 189.022l41.222 23.762-41.222 23.76-40.889-23.76 40.889-23.762z"
                  fill="#80CD29"
                />
              </svg>
              Node.js
            </Badge>
            ,{" "}
            <Badge href="https://tailwindcss.com" className="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="14"
                height="14"
                className="inline-flex mr-1"
                viewBox="0 0 54 33"
              >
                <g clipPath="url(#prefix__clip0)">
                  <path
                    fill="#38bdf8"
                    fillRule="evenodd"
                    d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                    clipRule="evenodd"
                  />
                </g>
                <defs>
                  <clipPath id="prefix__clip0">
                    <path fill="#fff" d="M0 0h54v32.4H0z" />
                  </clipPath>
                </defs>
              </svg>
              Tailwind CSS
            </Badge>{" "}
            and other modern web technologies.
          </p>
        </div>
        <div className="flex items-start mt-3 w-full justify-start flex-col">
          <Link
            href="https://www.linkedin.com/in/surendra-kumar-7a738b287/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="flex flex-row items-center justify-start">
              <div className="aspect-square flex-none h-[10px] overflow-hidden relative w-2.5 will-change-transform bg-green-500 rounded-full"></div>
              <div className="flex flex-col justify-start shrink-0 opacity-100 ml-2 ">
                <p className="text-white">Available for new opportunities</p>
              </div>
            </div>
          </Link>
          <br />
          <Links />
        </div>
        <div className="w-full h-[1px] "></div>
        <WorkExperience />
        <div className="mt-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl text-white mb-6 font-bold">Featured Projects</h1>
            <Link href="/project" className="text-neutral-500 hover:text-white transition-colors duration-200 text-sm flex items-center">
              View all <AiOutlineRight className="ml-1" size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {Projects.slice(0, 4).map((project) => (
              <Link
                className="group"
                key={project.slug}
                href={`/project/${project.slug}`}
                aria-label={`Open ${project.name} project page`}
              >
                <article className="bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-all duration-300">
                  <div className="relative h-40 w-full overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${project.image.url})`,
                        backgroundPosition: 'center',
                        filter: 'brightness(0.7)',
                        transition: 'transform 0.3s ease-in-out, filter 0.3s ease-in-out'
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-80"></div>
                    <div className="absolute bottom-0 left-0 p-3 w-full">
                      <h2 className="text-lg font-bold text-white truncate">{project.name}</h2>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded-md">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded-md">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-8 w-full">
            <div className="flex flex-col">
              {Projects.slice(4, 7).map((project) => (
                <Link
                  className="proj group"
                  key={project.slug}
                  href={`/project/${project.slug}`}
                  aria-label={`Open ${project.name} project page`}
                >
                  <article className="flex flex-row gap-0 items-center justify-between mt-3 mb-3 w-full hover:bg-neutral-900/50 rounded-md p-3 transition-all duration-200">
                    <div className="flex flex-col justify-start opacity-100 flex-none shrink-0 h-auto relative whitespace-pre w-auto mr-3">
                      <h1 className="text-base font-medium leading-[1.3em] text-left text-gray-300 group-hover:text-white">
                        {project.name}
                      </h1>
                      <span className="text-xs text-gray-500">{project.tags.slice(0, 2).join(', ')}</span>
                    </div>
                    <div className="flex-grow mr-2 border-t border-gray-800 hidden md:block"></div>
                    <AiOutlineRight
                      className="text-gray-400 transition-all duration-[110ms] group-hover:text-white h-4 w-4 shrink-0"
                      size={16}
                    />
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Hackathons />
        <div className="text-center py-4">
          <Link
            href={"/resume"}
            className="text-neutral-600 text-sm hover:underline"
          >
            Resume
          </Link>
        </div>
      </div>
    </main>
  );
}
