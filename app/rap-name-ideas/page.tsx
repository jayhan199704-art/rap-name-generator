import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rap Name Ideas – 1000+ Creative & Unique Rapper Name Inspiration",
  description:
    "Explore 1000+ rap name ideas including cool, funny, unique, and creative rapper name inspiration. Find the perfect stage name for your music identity.",
  alternates: {
    canonical: "https://www.rap-name-generator.org/rap-name-ideas",
  },
};

const coolRapNameIdeas = [
  "Neon Verse",
  "Midnight Cipher",
  "Chrome Rhythm",
  "Blaze Echo",
  "Vibe Monarch",
  "Urban Phantom",
  "Velvet Bars",
  "Grit Galaxy",
  "Nova Mic",
  "Street Sphinx",
  "Pulse Titan",
  "Frost Frequency",
];

const funnyRapNameIdeas = [
  "Lil Snack Break",
  "MC Extra Sauce",
  "Sir Rhymes-a-Lot",
  "Captain Crunchline",
  "Barbecue Beats",
  "Professor Punchline",
  "DJ Noodle Flow",
  "Waffle Bars",
  "Rhyme Burrito",
  "The Giggle Goat",
  "Lil Side Quest",
  "Mic Pickle",
];

const uniqueRapNameIdeas = [
  "Obsidian Lullaby",
  "Static Oracle",
  "Echo Cartel",
  "Solar Dagger",
  "Velour Riot",
  "Ivory Tempo",
  "Hollow Comet",
  "Crimson Manuscript",
  "Night Archive",
  "Quartz Villain",
  "Aether Cadence",
  "Ghost Atlas",
];

const faqItems = [
  {
    question: "What are rap name ideas?",
    answer:
      "Rap name ideas are potential stage names that reflect your sound, personality, and artistic image. They can be cool rap names, funny rap names, or unique rap names depending on the vibe you want your audience to remember.",
  },
  {
    question: "How do I come up with a rap name?",
    answer:
      "Start with words connected to your identity, your story, and your style. Test combinations of adjectives, nouns, and symbols from your life. Then shortlist names that are easy to say, memorable, and aligned with your brand.",
  },
  {
    question: "Is a rap name generator useful?",
    answer:
      "Yes. A rapper name generator ideas list can spark creativity quickly, especially when you feel stuck. Use generated options as inspiration, then personalize the final name so it feels original and authentic to you.",
  },
];

export default function RapNameIdeasPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 text-zinc-900 dark:text-zinc-100">
      <header className="mb-10 space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Rap Name Ideas</h1>
        <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
          This page is built to give you rap name inspiration across multiple styles, including cool,
          funny, and unique directions. If you are searching for rapper name generator ideas or trying
          to shape a memorable stage identity, these curated examples can help you find a name that
          fits your voice.
        </p>
      </header>

      <section className="mb-10" aria-labelledby="cool-rap-name-ideas">
        <h2 id="cool-rap-name-ideas" className="mb-4 text-2xl font-bold">
          Cool Rap Name Ideas
        </h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {coolRapNameIdeas.map((name) => (
            <li key={name} className="rounded-md border border-zinc-200 px-4 py-2 dark:border-zinc-800">
              {name}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10" aria-labelledby="funny-rap-name-ideas">
        <h2 id="funny-rap-name-ideas" className="mb-4 text-2xl font-bold">
          Funny Rap Name Ideas
        </h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {funnyRapNameIdeas.map((name) => (
            <li key={name} className="rounded-md border border-zinc-200 px-4 py-2 dark:border-zinc-800">
              {name}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10" aria-labelledby="unique-rap-name-ideas">
        <h2 id="unique-rap-name-ideas" className="mb-4 text-2xl font-bold">
          Unique Rap Name Ideas
        </h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {uniqueRapNameIdeas.map((name) => (
            <li key={name} className="rounded-md border border-zinc-200 px-4 py-2 dark:border-zinc-800">
              {name}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10 space-y-4" aria-labelledby="how-to-get-rap-name-ideas">
        <h2 id="how-to-get-rap-name-ideas" className="text-2xl font-bold">
          How to Get Rap Name Ideas
        </h2>
        <p className="leading-7 text-zinc-700 dark:text-zinc-300">
          Start with personality-based names: think about your values, hometown, mindset, and energy.
          If your image is intense, polished, rebellious, or introspective, choose words that represent
          those traits. Personality-first naming creates a strong connection between your identity and
          your music.
        </p>
        <p className="leading-7 text-zinc-700 dark:text-zinc-300">
          Humor-based names work when your brand leans playful, witty, or ironic. Funny rap names are
          memorable because they stand out in crowded feeds and conversations. Just make sure the joke
          still matches your long-term artistic direction.
        </p>
        <p className="leading-7 text-zinc-700 dark:text-zinc-300">
          Aesthetic and style-based names focus on sound and visual mood: futuristic, vintage,
          minimalist, dark, luxurious, or experimental. To generate unique rap names, combine an
          adjective with a noun (for example, "Velvet" + "Cipher"), then refine until the rhythm and
          meaning feel right.
        </p>
      </section>

      <section className="mb-10" aria-labelledby="rap-name-ideas-faq">
        <h2 id="rap-name-ideas-faq" className="mb-4 text-2xl font-bold">
          Frequently Asked Questions
        </h2>
        <dl className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.question} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
              <dt className="text-lg font-semibold">{item.question}</dt>
              <dd className="mt-2 leading-7 text-zinc-700 dark:text-zinc-300">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      <nav aria-label="Related pages" className="space-y-3">
        <h2 className="text-2xl font-bold">Explore More Rap Naming Tools</h2>
        <ul className="list-inside list-disc space-y-1 text-blue-700 underline-offset-2 hover:[&_a]:underline dark:text-blue-400">
          <li>
            <Link href="/rap-name-generator">Rap Name Generator</Link>
          </li>
          <li>
            <Link href="/cool-rap-names">Cool Rap Names</Link>
          </li>
          <li>
            <Link href="/funny-rap-names">Funny Rap Names</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
