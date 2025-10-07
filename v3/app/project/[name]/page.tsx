import ImageWithLoader from "@/components/loadingimage";
import BackButton from "@/components/shared/back";
import { Projects } from "@/constants";
import { upperFirst } from "@/utils/uppercase";
import { Metadata } from "next";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export async function generateStaticParams() {
  return Projects.map((p) => ({
    name: encodeURIComponent(p.slug),
  }));
}
interface Props {
  params: {
    name: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = Projects.find(
    (p) => encodeURIComponent(p.slug) === encodeURIComponent(params.name)
  )!;

  return {
    title: project.name,
    description: project.description,
    openGraph: {
      type: "website",
      title: project.name,
      description: project.description,
      images: [
        {
          url: project.image?.url,
          width: project.image?.width,
          height: project.image?.height,
          alt: project.image?.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@null",
    },
  };
}

async function ProjectPage(props: Props) {
  const project = Projects.find(
    (p) => encodeURIComponent(p.slug) === encodeURIComponent(props.params.name)
  )!;
  return (
    <div className="min-h-screen lg:pt-12 lg:p-0 p-5 container items-center justify-center flex-col lg:max-w-xl overflow-hidden">
      <div className="mb-8">
        <BackButton />
      </div>

      <div className="relative w-full rounded-xl overflow-hidden h-64 mb-8">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: `url(${project.image.url})`,
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-0 left-0 p-6 w-full">
          <div className="mb-1 flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs bg-black bg-opacity-50 text-white font-medium rounded-full px-3 py-1"
              >
                {upperFirst(tag)}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-bold text-white">{project.name}</h1>
        </div>
      </div>

      {project.image.source ? (
        <p className="text-center text-gray-500 text-sm mb-4">
          Source: {project.image.source}
        </p>
      ) : null}

      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">About the Project</h2>
        <p className="text-gray-300 leading-relaxed">{project.description}</p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">Technologies Used</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="text-sm bg-neutral-800 text-gray-200 font-medium rounded-lg px-3 py-1.5"
            >
              {upperFirst(tag)}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-row items-center justify-center gap-4 mt-4 mb-12">
        {Object.keys(project.urls).map((key: keyof typeof project.urls) => (
          <a
            href={project.urls[key]}
            target="_blank"
            rel="noreferrer"
            key={key}
            className="flex flex-row items-center justify-center gap-2 
            text-white transition duration-300 ease-in-out
            bg-neutral-800 hover:bg-neutral-700 rounded-lg px-5 py-3 w-full"
          >
            {key === "githubUrl" ? (
              <>
                <FiGithub className="text-white text-xl" />
                <span>View Code</span>
              </>
            ) : (
              <>
                <FiExternalLink className="text-white text-xl" />
                <span>Live Demo</span>
              </>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;
