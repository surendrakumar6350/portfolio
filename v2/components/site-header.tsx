"use client";
import Link from "next/link";
import { useState } from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { Menu, Github, Linkedin, Mail, FileText, PenTool, Code2, X } from "lucide-react";
import { profile } from "@/data/content";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Skip to content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <div className="container mx-auto flex h-14 items-center justify-between gap-4 px-4">
        <Link
          href="#home"
          aria-label="Go to home"
          className="group inline-flex items-center gap-2 font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
        >
          <span className="relative flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-sm ring-1 ring-primary/20">
            <Code2 className="h-4 w-4 drop-shadow" />
          </span>
          <span className="text-foreground font-bold transition-colors group-hover:text-foreground/90">
            MERN Dev
          </span>
          <span className="hidden text-xs font-normal text-muted-foreground/70 sm:inline">
            • Portfolio
          </span>
        </Link>
        <div className="hidden items-center gap-2 md:flex">
          <NavigationMenu aria-label="Main">
            <NavigationMenuList>
              {links.map((l) => (
                <NavigationMenuItem key={l.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={l.href}
                      className={cn(
                        "px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground",
                        "rounded-md hover:bg-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      )}
                    >
                      {l.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <ModeToggle />
        </div>
        <div className="md:hidden">
          {/* Controlled dialog for reliable overlay close */}
          {(() => {
            const [open, setOpen] = useState(false);
            return (
              <Dialog.Root open={open} onOpenChange={setOpen}>
                <Dialog.Trigger asChild>
                  <Button size="icon" variant="ghost" aria-label="Open menu"><Menu className="h-5 w-5" /></Button>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Close asChild>
                    <Dialog.Overlay className="dialog-overlay fixed inset-0 z-50 bg-background/95 backdrop-blur cursor-pointer" />
                  </Dialog.Close>
                  <Dialog.Content className="dialog-content fixed inset-0 z-[60] p-4 sm:p-6 flex flex-col items-center justify-center">
                {/* Top bar with brand and close */}
                <div className="pointer-events-auto mx-auto flex max-w-sm items-center justify-between rounded-xl border bg-card/95 px-4 py-3 shadow-sm">
                  <div className="inline-flex items-center gap-2">
                    <span className="relative flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-sm ring-1 ring-primary/20">
                      <Code2 className="h-4 w-4 drop-shadow" />
                    </span>
                    <span className="font-semibold">Menu</span>
                  </div>
                  <div className="inline-flex items-center gap-1">
                    <ModeToggle />
                    <Dialog.Close asChild>
                      <Button size="icon" variant="ghost" aria-label="Close menu">
                        <X className="h-5 w-5" />
                      </Button>
                    </Dialog.Close>
                  </div>
                </div>

                {/* Nav list card */}
                <div className="pointer-events-auto mx-auto mt-6 w-full max-w-sm rounded-2xl border bg-card/95 p-2 shadow-xl ring-1 ring-border/40">
                  <nav className="flex flex-col gap-1.5">
                    {links.map((l, i) => (
                      <Dialog.Close asChild key={l.href}>
                        <Link
                          href={l.href}
                          aria-label={l.label}
                          className="menu-item block rounded-md px-4 py-3 text-base font-medium text-foreground hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          style={{ ['--delay' as any]: `${80 + i * 30}ms` }}
                        >
                          {l.label}
                        </Link>
                      </Dialog.Close>
                    ))}
                  </nav>
                </div>

                {/* Footer actions removed to keep key options at the top for better UX */}
              </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            );
          })()}
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="mb-3 text-sm font-medium">Navigation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#home" className="hover:text-foreground transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="#projects" className="hover:text-foreground transition-colors">Projects</Link></li>
              <li><Link href="#contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium">Social</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href={profile.github} className="flex items-center gap-2 hover:text-foreground transition-colors" target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" />
                  GitHub
                </Link>
              </li>
              <li>
                <Link href={profile.linkedin} className="flex items-center gap-2 hover:text-foreground transition-colors" target="_blank" rel="noreferrer">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Mail className="h-4 w-4" />
                  Email
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Button variant="ghost" asChild className="h-auto p-0 hover:text-foreground">
                  <Link href="/cv" target="_blank">
                    <FileText className="mr-2 h-4 w-4" />
                    View CV
                  </Link>
                </Button>
              </li>
              <li>
                <Button variant="ghost" asChild className="h-auto p-0 hover:text-foreground">
                  <Link href="/blog">
                    <PenTool className="mr-2 h-4 w-4" />
                    Blog
                  </Link>
                </Button>
              </li>
              <li>
                <Button variant="ghost" asChild className="h-auto p-0 hover:text-foreground">
                  <Link href="/newsletter">
                    <Mail className="mr-2 h-4 w-4" />
                    Newsletter
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium">Contact</h3>
            <address className="not-italic">
              <p className="text-sm text-muted-foreground">{profile.location}</p>
              <p className="mt-2 text-sm text-muted-foreground">{profile.email}</p>
            </address>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
