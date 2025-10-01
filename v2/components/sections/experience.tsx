"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { experience, education } from "@/data/content";
import { cn } from "@/lib/utils";
import { MapPin, Calendar, Briefcase, GraduationCap } from "lucide-react";
import { FadeIn } from "@/components/animations";
import SectionHeader from "@/components/section-header";
import Image from "next/image";

export function Experience() {
  return (
    <FadeIn>
  <section id="experience" className="container mx-auto scroll-mt-24 px-4 py-16 md:py-24">
  <SectionHeader title="Experience & Education" subtitle="A quick look at my journey and impact." />
        <Tabs defaultValue="experience">
          <TabsList className="w-full md:w-auto">
            <TabsTrigger value="experience" className="flex-1 md:flex-none">
              <Briefcase className="mr-2 h-4 w-4" />
              Experience
            </TabsTrigger>
            <TabsTrigger value="education" className="flex-1 md:flex-none">
              <GraduationCap className="mr-2 h-4 w-4" />
              Education
            </TabsTrigger>
          </TabsList>

          <TabsContent value="experience" className="mt-8">
            <div className="relative space-y-12 before:absolute before:left-6 before:top-2 before:h-[calc(100%-24px)] before:w-[2px] before:-translate-x-1/2 before:bg-border md:before:left-1/2">
              {experience.map((job, idx) => (
                <div
                  key={job.title}
                  className={cn(
                    "group relative grid items-start grid-cols-1 gap-8 md:grid-cols-2",
                    idx % 2 === 0 ? "md:group-even:translate-x-0" : "md:group-odd:-translate-x-0"
                  )}
                >
                  {/* Timeline node */}
                  <div className="absolute left-6 top-2 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-primary bg-background transition-transform duration-300 group-hover:scale-125 md:left-1/2" />

                  {/* Empty column for right-side items */}
                  {idx % 2 === 0 && <div className="hidden md:block" />}

                  {/* Content */}
                  <Card className="col-span-1 transition-all duration-300 group-hover:shadow-lg">
                    <CardHeader className="pb-3">
                      {job.logo && (
                        <div className="absolute right-4 top-4 h-10 w-10 opacity-25">
                          <Image
                            src={job.logo}
                            alt={`${job.title} logo`}
                            fill
                            sizes="40px"
                            className="object-contain"
                          />
                        </div>
                      )}
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <CardDescription className="space-y-1">
                        <div className="text-base font-medium text-foreground/90">{job.role}</div>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {job.period}
                          </span>
                          {job.location && (
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3.5 w-3.5" />
                              {job.location}
                            </span>
                          )}
                        </div>
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4 pb-3">
                      <p className="text-sm text-muted-foreground">{job.desc}</p>
                      
                      {job.achievements && job.achievements.length > 0 && (
                        <div>
                          <p className="mb-2 text-sm font-medium">Key Achievements:</p>
                          <ul className="ml-5 list-disc space-y-1 text-sm text-muted-foreground">
                            {job.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                    
                    {job.skills && job.skills.length > 0 && (
                      <CardFooter className="pt-0">
                        <div className="flex flex-wrap gap-1.5">
                          {job.skills.map(skill => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardFooter>
                    )}
                  </Card>

                  {/* Empty column for left-side items */}
                  {idx % 2 !== 0 && <div className="hidden md:block" />}
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="education" className="mt-8">
            <div className="grid gap-8 md:grid-cols-2">
              {education.map((edu) => (
                <Card key={edu.school + edu.degree} className="group transition-all duration-300 hover:shadow-lg">
                  <CardHeader className="pb-3">
                    {edu.logo && (
                      <div className="absolute right-4 top-4 h-10 w-10 opacity-25">
                        <Image
                          src={edu.logo}
                          alt={`${edu.school} logo`}
                          fill
                          sizes="40px"
                          className="object-contain"
                        />
                      </div>
                    )}
                    <CardTitle className="text-xl">{edu.school}</CardTitle>
                    <CardDescription className="space-y-1">
                      <div className="text-base font-medium text-foreground/90">{edu.degree}</div>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {edu.period}
                        </span>
                        {edu.location && (
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {edu.location}
                          </span>
                        )}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{edu.details}</p>
                    
                    {edu.courses && edu.courses.length > 0 && (
                      <div>
                        <p className="mb-2 text-sm font-medium">Relevant Coursework:</p>
                        <div className="flex flex-wrap gap-1.5">
                          {edu.courses.map((course, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {edu.achievements && edu.achievements.length > 0 && (
                      <div>
                        <Separator className="my-3" />
                        <p className="mb-2 text-sm font-medium">Achievements:</p>
                        <ul className="ml-5 list-disc space-y-1 text-sm text-muted-foreground">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </FadeIn>
  );
}
