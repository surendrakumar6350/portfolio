import { NextRequest } from "next/server";
import { z } from "zod";

const Schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().max(120).optional(),
  message: z.string().min(10),
  botfield: z.string().optional(),
});

export async function POST(req: NextRequest) {
  const data = await req.json().catch(() => ({}));
  const parsed = Schema.safeParse(data);
  if (!parsed.success) {
    return new Response(JSON.stringify({ error: "Validation failed" }), { status: 400 });
  }
  const { botfield } = parsed.data;
  if (botfield) {
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  }
  // TODO: Send email via provider or persist to DB here
  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}
