"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { projects } from "@/data/content";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { FadeIn } from "@/components/animations";
import { ExternalLink, Github, X } from "lucide-react";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

  return (
    <FadeIn>
  <section id="projects" className="container mx-auto scroll-mt-24 px-4 py-16 md:py-24">
        <h2 className="mb-8 text-3xl font-semibold tracking-tight">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Card
              key={p.title}
              className="group cursor-pointer transition-all duration-300 hover:shadow-lg"
              onClick={() => setSelectedProject(p)}
            >
              <CardHeader>
                {p.image && (
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <img
                      src={p.image}
                      alt={`${p.title} preview`}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <CardTitle className="mt-4">{p.title}</CardTitle>
                <CardDescription>{p.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((tech) => (
                    <TooltipProvider key={tech}>
                      <Tooltip>
                        <TooltipTrigger>
                          <Badge variant="secondary">{tech}</Badge>
                        </TooltipTrigger>
                        <TooltipContent>{tech}</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                {p.github && (
                  <Button asChild variant="outline" size="sm">
                    <Link href={p.github} target="_blank" rel="noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                )}
                {p.demo && (
                  <Button asChild size="sm">
                    <Link href={p.demo} target="_blank" rel="noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          {selectedProject && (
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <div className="flex items-start justify-between">
                  <DialogTitle>{selectedProject.title}</DialogTitle>
                  <Button variant="ghost" size="icon" onClick={() => setSelectedProject(null)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <DialogDescription>{selectedProject.description}</DialogDescription>
              </DialogHeader>
              {selectedProject.image && (
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img
                    src={selectedProject.image}
                    alt={`${selectedProject.title} preview`}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              <div className="space-y-4">
                <div>
                  <h4 className="mb-2 text-sm font-medium">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </div>
                {selectedProject.features && (
                  <div>
                    <h4 className="mb-2 text-sm font-medium">Key Features</h4>
                    <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="flex gap-3 pt-4">
                  {selectedProject.github && (
                    <Button asChild variant="outline">
                      <Link href={selectedProject.github} target="_blank" rel="noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Source
                      </Link>
                    </Button>
                  )}
                  {selectedProject.demo && (
                    <Button asChild>
                      <Link href={selectedProject.demo} target="_blank" rel="noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </section>
    </FadeIn>
  );
}
