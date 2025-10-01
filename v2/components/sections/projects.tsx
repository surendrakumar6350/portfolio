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
import {
  ExternalLink,
  Github,
  X,
  Atom,
  SquareCode,
  FileCode,
  ServerCog,
  Network,
  Leaf,
  Triangle,
  GitBranch,
  Bot,
  Boxes,
  Database as DatabaseIcon,
  Sparkles,
  Hourglass,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import SectionHeader from "@/components/section-header";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState<string>("all");

  const techIcon = (tech: string) => {
    const k = tech.toLowerCase();
    if (k === "react") return Atom;
    if (k === "next.js" || k === "nextjs") return SquareCode;
    if (k === "typescript") return FileCode;
    if (k === "node.js" || k === "nodejs") return ServerCog;
    if (k === "express") return Network;
    if (k === "graphql") return Network;
    if (k.includes("rest")) return Network;
    if (k === "mongodb") return Leaf;
    if (k === "mongoose") return Leaf;
    if (k === "prisma") return Triangle;
    if (k === "postgres" || k === "postgresql") return DatabaseIcon;
    if (k === "git") return GitBranch;
    if (k.includes("actions")) return Bot;
    if (k === "docker") return Boxes;
    if (k === "stripe") return Boxes;
    return FileCode;
  };

  const getStatus = (p: (typeof projects)[0]) => {
    const openSource = p.status === "open-source" || !!p.github;
    const featured = p.status === "featured";
    const inProgress = p.status === "in-progress" || (!p.demo && !featured);
    return { openSource, featured, inProgress };
  };
  // Use new featured project from updated data
  const featured = projects.find((p) => p.status === "featured") ?? projects[0];

  const filtered = projects.filter((p) => {
    const matchesQuery = [p.title, p.description, ...(p.stack || [])]
      .join(" ")
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesTab = tab === "all" || p.category === tab || (tab === "open-source" && p.status === "open-source");
    return matchesQuery && matchesTab;
  });

  return (
    <FadeIn>
  <section id="projects" className="container mx-auto scroll-mt-24 px-4 py-2 md:py-4">
  <SectionHeader title="Projects" subtitle="Selected work and experiments." />

        {/* Featured banner */}
        {featured && (
          <Card className="mb-8 overflow-hidden border bg-gradient-to-br from-primary/5 via-background to-primary/5">
            <CardContent className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg sm:w-72">
                <Image
                  src={featured.image ?? "/projects/placeholder-saas.svg"}
                  alt={`${featured.title} preview`}
                  fill
                  sizes="(max-width: 640px) 100vw, 18rem"
                  className="object-cover"
                  priority={false}
                />
              </div>
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-2">
                  <Badge className="flex items-center gap-1"><Sparkles className="h-3.5 w-3.5" /> Featured</Badge>
                  {featured.status === "open-source" && <Badge variant="secondary">Open Source</Badge>}
                </div>
                <h3 className="text-xl font-semibold">{featured.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{featured.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {featured.stack.slice(0, 6).map((tech) => {
                    const Icon = techIcon(tech);
                    return (
                      <Badge key={tech} variant="secondary" className="flex items-center gap-1.5">
                        <Icon className="h-3.5 w-3.5 text-primary/80" /> {tech}
                      </Badge>
                    );
                  })}
                </div>
                <div className="mt-4 flex gap-2">
                  {featured.github && (
                    <Button asChild variant="outline" size="sm">
                      <Link href={featured.github} target="_blank" rel="noreferrer">
                        <Github className="mr-2 h-4 w-4" /> View Source
                      </Link>
                    </Button>
                  )}
                  {featured.demo && (
                    <Button asChild size="sm">
                      <Link href={featured.demo} target="_blank" rel="noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Controls: tabs + search */}
        <div className="mb-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Tabs value={tab} onValueChange={setTab} className="w-full sm:w-auto">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="web-app">Web Apps</TabsTrigger>
              <TabsTrigger value="open-source">Open Source</TabsTrigger>
              <TabsTrigger value="library">Libraries</TabsTrigger>
              <TabsTrigger value="tool">Tools</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="w-full sm:w-64">
            <Input placeholder="Search projects…" value={query} onChange={(e) => setQuery(e.target.value)} />
          </div>
        </div>

        <TooltipProvider>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => {
              const status = getStatus(p);
              const isFeatured = status.featured;
              return (
                <Card
                  key={p.title}
                  className={`group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg ${isFeatured ? "border-primary/40" : ""}`}
                  role="button"
                  tabIndex={0}
                  aria-label={`Open details for ${p.title}`}
                  onClick={() => setSelectedProject(p)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedProject(p);
                    }
                  }}
                >
                  <CardHeader>
                    {p.image && (
                      <div className="relative aspect-video overflow-hidden rounded-lg">
                        <Image
                          src={p.image}
                          alt={`${p.title} preview`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                          priority={false}
                        />
                      </div>
                    )}
                    <CardTitle className="mt-4">{p.title}</CardTitle>
                    <CardDescription>{p.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {p.stack.map((tech) => {
                        const Icon = techIcon(tech);
                        return (
                          <Tooltip key={tech}>
                            <TooltipTrigger>
                              <Badge
                                variant="secondary"
                                className="flex items-center gap-1.5 transition-transform hover:scale-[1.03]"
                              >
                                <Icon className="h-3.5 w-3.5 text-primary/80" />
                                {tech}
                              </Badge>
                            </TooltipTrigger>
                            <TooltipContent>{tech}</TooltipContent>
                          </Tooltip>
                        );
                      })}
                    </div>
                  </CardContent>
                  <CardFooter className="gap-2">
                    {p.github && (
                      <Button asChild variant="outline" size="sm" className="group" onClick={(e) => e.stopPropagation()}>
                        <Link aria-label={`View ${p.title} on GitHub`} href={p.github} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                          <Github className="mr-2 h-4 w-4" />
                          <span>GitHub</span>
                        </Link>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </TooltipProvider>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          {selectedProject && (
            <DialogContent className="w-[95vw] max-w-2xl max-h-[85vh] overflow-auto">
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
                <div className="relative aspect-video overflow-hidden rounded-lg border border-white/10 bg-secondary/10">
                  <Image
                    src={selectedProject.image}
                    alt={`${selectedProject.title} preview`}
                    fill
                    sizes="(max-width: 768px) 90vw, 70vw"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="space-y-4">
                <div className="h-px w-full bg-white/10" />
                <div>
                  <h4 className="mb-2 text-sm font-medium">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((tech) => {
                      const Icon = techIcon(tech);
                      return (
                        <Badge key={tech} variant="secondary" className="flex items-center gap-1.5">
                          <Icon className="h-3.5 w-3.5 text-primary/80" />
                          {tech}
                        </Badge>
                      );
                    })}
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
