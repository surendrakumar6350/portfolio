import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Projects } from "@/constants";
import BackButton from "@/components/shared/back";
import { upperFirst } from "@/utils/uppercase";
import Image from "next/image";

export default function Project() {
  return (
    <main className="min-h-screen container items-center justify-center flex-col">
      <div className="flex md:mt-4 flex-col max-w-4xl mx-auto p-5 lg:p-0">
        <div className="container">
          <BackButton />
          <div className="flex items-center justify-between mt-5 mb-8">
            <h1 className="text-3xl text-white font-bold">All Projects</h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {Projects.map((project) => (
              <div 
                key={project.slug} 
                className="bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ 
                      backgroundImage: `url(${project.image.url})`,
                      backgroundPosition: 'center',
                      filter: 'brightness(0.8)',
                      transition: 'transform 0.3s ease-in-out, filter 0.3s ease-in-out'
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-70"></div>
                </div>
                
                <div className="p-5 flex-grow flex flex-col">
                  <h2 className="text-xl font-bold text-white mb-2">{project.name}</h2>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-3 flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded-md"
                      >
                        {upperFirst(tag)}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded-md">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-3 mt-auto">
                    <Link
                      href={`/project/${project.slug}`}
                      className="flex-grow bg-neutral-800 hover:bg-neutral-700 text-white text-sm py-2 px-3 rounded-md flex items-center justify-center transition-all duration-200"
                    >
                      View Details <AiOutlineRight className="ml-1" size={14} />
                    </Link>
                    
                    {project.urls.githubUrl && (
                      <a 
                        href={project.urls.githubUrl}
                        target="_blank"
                        rel="noreferrer" 
                        className="bg-neutral-800 hover:bg-neutral-700 text-white p-2 rounded-md transition-all duration-200"
                        aria-label={`${project.name} GitHub Repository`}
                      >
                        <FiGithub size={18} />
                      </a>
                    )}
                    
                    {project.urls.liveUrl && (
                      <a 
                        href={project.urls.liveUrl}
                        target="_blank"
                        rel="noreferrer" 
                        className="bg-neutral-800 hover:bg-neutral-700 text-white p-2 rounded-md transition-all duration-200"
                        aria-label={`${project.name} Live Demo`}
                      >
                        <FiExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
