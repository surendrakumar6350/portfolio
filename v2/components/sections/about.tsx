import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import {
  Download,
  MapPin,
  Briefcase,
  CalendarCheck,
  Code2,
  Server,
  Database,
  Wrench,
  Gauge,
  ShieldCheck,
  Accessibility,
  ArrowRight,
  Globe2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile, skillGroups } from "@/data/content";

export function About() {
  const highlightItems = [
    { label: "DX & performance", Icon: Gauge },
    { label: "Clean, typed APIs with validation", Icon: ShieldCheck },
    { label: "Accessible, responsive UI", Icon: Accessibility },
  ];

  const totalSkills = Object.values(skillGroups).reduce((sum, arr) => sum + arr.length, 0);
  const stats = [
    { label: "Years Experience", value: "3+", Icon: Briefcase },
    { label: "Projects", value: "20+", Icon: Code2 },
    { label: "Global Clients", value: "5+", Icon: Globe2 },
    { label: "Skills", value: `${totalSkills}+`, Icon: Wrench },
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
      <div className="grid items-start gap-10 lg:grid-cols-12">
        {/* Left: Text content */}
        <div className="lg:col-span-7 space-y-8">
          {/* Heading, tagline and intro */}
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight">About</h2>
            <p className="text-xl leading-snug tracking-tight text-foreground">
              Building fast, accessible web apps that scale.
            </p>
            <p className="max-w-prose text-base text-muted-foreground">
              {profile.bio}
            </p>
            <ul className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              {highlightItems.map(({ label, Icon }) => (
                <li key={label} className="flex items-start gap-2">
                  <Icon className="mt-0.5 h-4 w-4 text-primary" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
            <div className="flex gap-3 pt-1">
              <Button asChild className="group transition-transform hover:scale-[1.02] active:scale-[0.98]">
                <Link href="#contact">
                  <span>Contact</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="group transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Link href={profile.resume} target="_blank" rel="noreferrer">
                  <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-[-1px]" />
                  Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Right: Visuals (avatar + mini stat cards) */}
        <div className="lg:col-span-5 flex flex-col items-center gap-6 lg:items-end">
          <Card className="relative w-full max-w-sm overflow-hidden border bg-gradient-to-br from-primary/5 via-background to-primary/5">
            <CardContent className="flex flex-col items-center p-6">
              <div className="relative">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-2xl"
                />
                <Avatar className="h-36 w-36 ring-2 ring-primary/20 shadow-lg">
                  <AvatarImage src="/avatar.jpg" alt={`${profile.name} avatar`} />
                  <AvatarFallback className="bg-accent text-foreground/80">
                    {initials}
                  </AvatarFallback>
                </Avatar>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Based in {profile.location || "Remote"}
              </p>
            </CardContent>
          </Card>

          <div className="grid w-full max-w-sm grid-cols-2 gap-3">
            {stats.map(({ label, value, Icon }) => (
              <Card
                key={label}
                className="border bg-background/60 transition-all hover:bg-accent/40 hover:shadow-sm"
                title={label}
              >
                <CardContent className="flex flex-col items-center gap-1 p-3">
                  <Icon className="h-4 w-4 text-primary" />
                  <div className="text-base font-semibold leading-none">{value}</div>
                  <div className="text-[11px] text-muted-foreground">{label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Info strip card (full width) */}
        <div className="lg:col-span-12">
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

        {/* Core Stack (full width) */}
        <div className="lg:col-span-12">
          <div className="mt-2">
            <h3 className="mb-3 text-lg font-semibold">Core Stack</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {Object.entries(skillGroups).map(([group, items]) => {
                const Icon = groupIcon(group);
                return (
                  <Card key={group} className="transition-all hover:shadow-sm hover:border-primary/30">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2 text-base">
                        <Icon className="h-4 w-4 text-primary" />
                        {group}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {items.map((s) => (
                          <Badge
                            key={s}
                            variant="secondary"
                            className="text-xs transition-all hover:scale-105 hover:bg-secondary/80 focus-visible:ring-2 focus-visible:ring-primary/40"
                          >
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
        </div>
      </div>
    </section>
  );
}
