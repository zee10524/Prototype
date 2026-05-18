import { createFileRoute } from "@tanstack/react-router";
import { Deck } from "@/components/Deck";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Modular Lighting · Company Profile 2026" },
      { name: "description", content: "A premium architectural lighting solutions provider based in the UAE — featured projects, partners, and capabilities." },
      { property: "og:title", content: "Modular Lighting · Company Profile 2026" },
      { property: "og:description", content: "Architectural lighting for the world's most considered spaces." },
    ],
  }),
  component: Index,
});

function Index() {
  return <Deck />;
}
