import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Download, MapPin, Briefcase, CalendarCheck, CheckCircle2, Code2, Server, Database, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile, skillGroups } from "@/data/content";

export function About() {
  const highlights = [
    "MERN specialist focused on DX & performance",
    "Clean, typed APIs with robust validation",
    "Accessible, responsive UI with shadcn/ui",
  ];

  const groupIcon = (group: string) => {
    const key = group.toLowerCase();
    if (key.includes("front")) return Code2;
    if (key.includes("back")) return Server;
    if (key.includes("data")) return Database;
    return Wrench;
  };

  const initials = profile.name.split(" ").map((n) => n[0]).join("");

  return (
    <section id="about" className="container mx-auto scroll-mt-24 px-4 py-16 md:py-24">
      <div className="grid items-start gap-8 md:grid-cols-[auto,1fr] md:gap-12">
        {/* Avatar with photo when available, themed ring + shadow */}
        <div className="flex items-start">
          <Avatar className="h-28 w-28 ring-2 ring-primary/20 shadow-sm">
            <AvatarImage src="/avatar.jpg" alt={`${profile.name} avatar`} />
            <AvatarFallback className="bg-accent text-foreground/80">
              {initials}
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="space-y-8">
          {/* Heading and intro */}
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight">About</h2>
            <p className="max-w-prose text-base text-muted-foreground">
              {profile.bio}
            </p>
            <ul className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <div className="flex gap-3 pt-1">
              <Button asChild className="transition-transform hover:scale-[1.02] active:scale-[0.98]">
                <Link href="#contact">Contact</Link>
              </Button>
              <Button variant="outline" asChild className="transition-transform hover:scale-[1.02] active:scale-[0.98]">
                <Link href={profile.resume} target="_blank" rel="noreferrer">
                  <Download className="mr-2 h-4 w-4" /> Resume
                </Link>
              </Button>
            </div>
          </div>

          <Separator />

          {/* Grouped tech stack */}
          <div>
            <h3 className="mb-3 text-lg font-semibold">Core Stack</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {Object.entries(skillGroups).map(([group, items]) => {
                const Icon = groupIcon(group);
                return (
                  <Card key={group} className="transition-shadow hover:shadow-sm">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2 text-base">
                        <Icon className="h-4 w-4 text-primary" />
                        {group}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {items.map((s) => (
                          <Badge key={s} variant="secondary" className="text-xs">
                            {s}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Info strip card */}
          <Card className="border bg-background/60 backdrop-blur-sm">
            <CardContent className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">{profile.title}</span>
              </div>
              <Separator orientation="vertical" className="hidden h-6 sm:block" />
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">{profile.location || "Remote"}</span>
              </div>
              <Separator orientation="vertical" className="hidden h-6 sm:block" />
              <div className="flex items-center gap-2">
                <CalendarCheck className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">Open to opportunities</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
