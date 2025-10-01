"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Mail, Github, Linkedin, MapPin, Download } from "lucide-react";
import { profile } from "@/data/content";
import { useToast } from "@/components/ui/use-toast";
import { FadeIn } from "@/components/animations";
import SectionHeader from "@/components/section-header";

const contactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  subject: z.string().max(120).optional(),
  message: z.string().min(10, "Please write a bit more"),
  botField: z.string().optional() // honeypot
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const { toast } = useToast();
  const [resumeLoading, setResumeLoading] = useState(false);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      botField: ""
    }
  });

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = form;

  const onSubmit = async (values: ContactFormValues) => {
    // Honeypot check
    if (values.botField) {
      toast({
        title: "Error",
        description: "Message flagged as spam",
        variant: "destructive"
      });
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });

      const data = await res.json();
      
      if (res.ok) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon."
        });
        reset();
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message",
        variant: "destructive"
      });
    }
  };

  const handleResumeDownload = async () => {
    setResumeLoading(true);
    try {
      const res = await fetch(profile.resume);
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${profile.name} - Resume.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      toast({
        title: "Resume downloaded",
        description: "The resume has been downloaded to your device"
      });
    } catch {
      toast({
        title: "Download failed",
        description: "Please try again later",
        variant: "destructive"
      });
    } finally {
      setResumeLoading(false);
    }
  };

  return (
    <FadeIn>
    <section id="contact" className="container mx-auto scroll-mt-24 px-4 py-2 md:py-4">
  <SectionHeader title="Contact" subtitle="Let’s build something great together." />
        
        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Get in touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4" />
                  <a 
                    href={`mailto:${profile.email}`}
                    className="underline underline-offset-4 hover:text-foreground transition-colors"
                  >
                    {profile.email}
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Github className="h-4 w-4" />
                  <a 
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 hover:text-foreground transition-colors"
                  >
                    GitHub
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Linkedin className="h-4 w-4" />
                  <a 
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 hover:text-foreground transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Download className="h-4 w-4" />
                  <Button
                    variant="link"
                    className="h-auto p-0 underline underline-offset-4"
                    onClick={handleResumeDownload}
                    disabled={resumeLoading}
                  >
                    {resumeLoading ? "Downloading..." : "Download Resume"}
                  </Button>
                </div>
                
                {profile.location && (
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4" />
                    <span>{profile.location}</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Contact form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Send a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Honeypot field - hidden from users */}
                <input
                  type="text"
                  {...register("botField")}
                  className="sr-only"
                  tabIndex={-1}
                  aria-hidden="true"
                />
                
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="you@example.com"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject (optional)
                  </label>
                  <Input
                    id="subject"
                    {...register("subject")}
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="text-sm text-destructive">{errors.subject.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    placeholder="Your message"
                    rows={5}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message.message}</p>
                  )}
                </div>
                
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </FadeIn>
  );
}