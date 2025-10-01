"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { profile, stats } from "@/data/content";
import { FadeIn } from "@/components/animations";
import { Briefcase, FolderGit2, Star, Users } from "lucide-react";

function useInView<T extends Element>(options?: IntersectionObserverInit) {
	const ref = useRef<T | null>(null);
	const [inView, setInView] = useState(false);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
			threshold: 0.3,
			...options,
		});
		observer.observe(ref.current);
		return () => observer.disconnect();
	}, [options]);

	return { ref, inView } as const;
}

function CountUp({ value, suffix = "" }: { value: string | number; suffix?: string }) {
	const text = String(value);
	const hasK = /k/i.test(text);
	const numericPart = text.match(/\d+/)?.[0] ?? "0";
	const target = Number(numericPart);
	const displaySuffix = text.replace(numericPart, "") || suffix;

	const { ref, inView } = useInView<HTMLDivElement>();
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		if (!inView) return;
		let start: number | null = null;
		const duration = 900; // ms
		const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
		const animate = (ts: number) => {
			if (start === null) start = ts;
			const p = Math.min(1, (ts - start) / duration);
			const eased = easeOutCubic(p);
			setCurrent(Math.round(target * eased));
			if (p < 1) requestAnimationFrame(animate);
		};
		const id = requestAnimationFrame(animate);
		return () => cancelAnimationFrame(id);
	}, [inView, target]);

	return (
		<div ref={ref}>
			<span className="tabular-nums">
				{current}
				{hasK ? "k" : ""}
				{displaySuffix}
			</span>
		</div>
	);
}

const statIcon = (label: string) => {
	const key = label.toLowerCase();
	if (key.includes("year") || key.includes("experience")) return Briefcase;
	if (key.includes("project")) return FolderGit2;
	if (key.includes("star")) return Star;
	if (key.includes("client")) return Users;
	return FolderGit2;
};

export function Hero() {
	return (
		<FadeIn>
					<section id="home" className="container mx-auto scroll-mt-24 px-4 py-16 md:py-24">
						<div className="mx-auto max-w-4xl space-y-6 text-center">
							{/* Typing headline */}
							<TypingHeadline name={profile.name} />

							{/* Strong tagline */}
										<p className="mx-auto max-w-prose text-2xl font-semibold tracking-tight text-primary">
											{profile.title}
										</p>

							<p className="mx-auto max-w-prose text-base text-muted-foreground">{profile.tagline}</p>

							<div className="flex flex-wrap justify-center gap-3">
											<Button
												asChild
												className="transition-transform hover:scale-[1.02] active:scale-[0.98] hover:shadow-md"
											>
									<Link href="#projects">View Projects</Link>
								</Button>
								<Button
									variant="outline"
									asChild
									className="transition-transform hover:scale-[1.02] active:scale-[0.98] hover:shadow-sm hover:border-primary/40 hover:bg-accent/60"
								>
									<Link href="#contact">Contact Me</Link>
								</Button>
											<Button
												variant="ghost"
												asChild
												className="transition-transform hover:scale-[1.02] active:scale-[0.98] hover:bg-accent/50"
											>
									<Link href={profile.resume} target="_blank" rel="noreferrer">
										Resume
									</Link>
								</Button>
							</div>
						</div>

						{/* Stats with icons, glow and count up */}
						<div className="mx-auto mt-12 w-full max-w-4xl">
							<div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
											{stats.map((s) => {
									const Icon = statIcon(s.label);
									const numericPart = String(s.value).match(/\d+/)?.[0] ?? "0";
									const suffix = String(s.value).replace(numericPart, "");
									return (
													<div
														key={s.label}
														className="group relative rounded-xl border bg-background/60 p-4 text-center backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-accent/40 hover:shadow-sm hover:scale-[1.01]"
													>
														<div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
															<Icon className="h-4 w-4" />
														</div>
														<div className="text-2xl font-semibold">
															<CountUp value={s.value} suffix={suffix} />
														</div>
														<div className="text-xs text-muted-foreground">{s.label}</div>
													</div>
									);
								})}
							</div>
						</div>
			</section>
		</FadeIn>
	);
}

		function TypingHeadline({ name }: { name: string }) {
			const full = useMemo(() => `Hi, I'm ${name}`, [name]);
			const [text, setText] = useState("");
			const [showCursor, setShowCursor] = useState(true);

			useEffect(() => {
				let i = 0;
				const speed = 105; // ms per char
				const id = setInterval(() => {
					setText(full.slice(0, i + 1));
					i += 1;
					if (i >= full.length) clearInterval(id);
				}, speed);
				const cursorId = setInterval(() => setShowCursor((s) => !s), 550);
				return () => {
					clearInterval(id);
					clearInterval(cursorId);
				};
			}, [full]);

			return (
				<h1 className="mx-auto max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
					{text}
					<span className={`ml-0.5 inline-block w-[1ch] ${showCursor ? "opacity-100" : "opacity-0"}`}>|</span>
				</h1>
			);
		}
