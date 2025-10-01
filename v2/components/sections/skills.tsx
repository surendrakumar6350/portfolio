"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skills as flatSkills, skillGroups, certifications } from "@/data/content";
import { FadeIn } from "@/components/animations";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import SectionHeader from "@/components/section-header";
import {
  Atom,
  SquareCode,
  FileCode,
  Wind,
  Boxes,
  ServerCog,
  Network,
  KeyRound,
  Leaf,
  Triangle,
  GitBranch,
  Bot,
  FlaskConical,
  Code2,
  Database as DatabaseIcon,
  Award,
} from "lucide-react";

function skillIcon(skill: string) {
  const key = skill.toLowerCase();
  if (key === "react") return Atom;
  if (key === "next.js" || key === "nextjs") return SquareCode;
  if (key === "typescript") return FileCode;
  if (key.includes("tailwind")) return Wind;
  if (key.includes("shadcn")) return Boxes;
  if (key === "node.js" || key === "nodejs") return ServerCog;
  if (key === "express") return Network;
  if (key === "graphql") return Network;
  if (key.includes("rest")) return Network;
  if (key === "jwt") return KeyRound;
  if (key === "mongodb" || key === "mongoose") return Leaf;
  if (key === "prisma") return Triangle;
  if (key === "git") return GitBranch;
  if (key.includes("actions")) return Bot;
  if (key === "docker") return Boxes;
  if (key === "jest" || key === "playwright") return FlaskConical;
  return Code2;
}

const skillInfo: Record<string, string> = {
  React: "3+ years",
  "Next.js": "2+ years",
  TypeScript: "2+ years",
  "Tailwind CSS": "2+ years",
  "shadcn/ui": "Design system",
  "Node.js": "3+ years",
  Express: "Advanced",
  GraphQL: "Advanced",
  "REST APIs": "Advanced",
  JWT: "Auth & security",
  MongoDB: "3+ years",
  Mongoose: "Advanced",
  Prisma: "Intermediate",
  Git: "Daily",
  "GitHub Actions": "CI/CD",
  Docker: "Intermediate",
  Jest: "Intermediate",
  Playwright: "Intermediate",
};

const categories = [
  { key: "frontend", title: "Frontend", items: skillGroups.Frontend as readonly string[], icon: Atom, accent: "border-l bg-gradient-to-br from-foreground/[0.03] to-background", span: "lg:col-span-2 xl:col-span-2" },
  { key: "backend", title: "Backend", items: skillGroups.Backend as readonly string[], icon: ServerCog, accent: "border-l bg-gradient-to-br from-foreground/[0.03] to-background", span: "lg:col-span-2 xl:col-span-2" },
  { key: "database", title: "Database", items: skillGroups.Database as readonly string[], icon: DatabaseIcon, accent: "border-l bg-gradient-to-br from-foreground/[0.03] to-background", span: "lg:col-span-2 xl:col-span-2" },
  { key: "tools", title: "DevOps / Tools", items: skillGroups.Tools as readonly string[], icon: Boxes, accent: "border-l bg-gradient-to-br from-foreground/[0.03] to-background", span: "lg:col-span-2 xl:col-span-2" },
] as const;

const competencies = [
  { title: "Full-Stack Web Development", desc: "Building scalable apps with React, Next.js, Node.js, MongoDB.", icon: Code2 },
  { title: "API Development", desc: "REST & GraphQL APIs with authentication & JWT security.", icon: ServerCog },
  { title: "Database Design", desc: "Efficient schema design & optimization with MongoDB & Prisma.", icon: DatabaseIcon },
  { title: "DevOps", desc: "Dockerized apps, GitHub Actions CI/CD pipelines.", icon: Boxes },
] as const;

const dailyTools = ["Git", "VS Code", "Postman", "Figma"] as const;
const softSkills = ["Agile", "Collaboration", "Mentoring"] as const;

export function Skills() {
  return (
    <FadeIn>
      <section id="skills" className="container mx-auto scroll-mt-24 px-4 py-2 md:py-4">
        <SectionHeader title="Skills" />
        <TooltipProvider>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-7 xl:grid-cols-8">
            {categories.map(({ key, title, items, icon: Icon, accent, span }) => (
              <Card key={key} className={`transition-all hover:shadow-sm ${accent ?? ""} ${span ?? "lg:col-span-2 xl:col-span-2"}`}>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Icon className="h-4 w-4 text-primary" />
                    {title}
                    <span className="ml-auto text-xs text-muted-foreground">{items.length} skills</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {items.map((s) => {
                      const SIcon = skillIcon(s);
                      return (
                        <Tooltip key={s}>
                          <TooltipTrigger asChild>
                            <Badge variant="secondary" className="flex items-center gap-1.5 text-xs transition-all hover:scale-[1.04] hover:shadow-sm hover:bg-secondary/80 focus-visible:ring-2 focus-visible:ring-primary/40">
                              <SIcon className="h-3.5 w-3.5 text-primary/80" />
                              {s}
                            </Badge>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-xs">{skillInfo[s] ?? "Experienced"}</p>
                          </TooltipContent>
                        </Tooltip>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TooltipProvider>

        <div className="mt-8">
          <h3 className="mb-4 text-lg font-semibold">Key Competencies</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {competencies.map(({ title, desc, icon: Icon }) => (
              <Card key={title} className="transition-all hover:shadow-sm hover:border-primary/30">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Icon className="h-4 w-4 text-primary" />
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Card className="transition-all hover:shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <Award className="h-4 w-4 text-primary" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {(certifications.slice(0, 2) || []).map((c) => (
                  <Badge key={c.name} variant="secondary" className="text-xs">
                    {c.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Tools Used Daily</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {["Git", "VS Code", "Postman", "Figma"].map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs">
                    {t}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Soft Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {["Agile", "Collaboration", "Mentoring"].map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs">
                    {t}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </FadeIn>
  );
}

export default Skills;