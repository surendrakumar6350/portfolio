import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionHeader from "@/components/section-header";
import { testimonials } from "@/data/content";

export function Testimonials() {
  return (
    <section id="testimonials" className="container mx-auto px-4 py-16 md:py-24">
      <SectionHeader title="Testimonials" subtitle="What clients and colleagues say about working with me." />
      <div className="grid gap-6 sm:grid-cols-2">
        {testimonials.map((t) => (
          <Card key={t.name}>
            <CardHeader>
              <CardTitle className="text-lg">{t.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{t.title}</p>
              <p className="mt-3">“{t.quote}”</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
