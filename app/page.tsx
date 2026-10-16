import Link from "next/link";
import Hero from "@/components/Hero";
import WeekCard from "@/components/WeekCard";
import { getAllWeeks } from "@/lib/weeks";

export default function HomePage() {
  const weeks = getAllWeeks();

  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-10 px-6 py-10">
      <Hero />
      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Link
          href="/project"
          className="flex flex-col gap-1 rounded-xl border border-zinc-200 p-5 transition hover:border-zinc-400"
        >
          <h2 className="text-lg font-semibold text-zinc-900">
            Final Project
          </h2>
          <p className="text-sm text-zinc-600">
            Critical evaluation of the group project: design (Week 7) and
            implementation (Week 11).
          </p>
        </Link>
        <Link
          href="/reflections"
          className="flex flex-col gap-1 rounded-xl border border-zinc-200 p-5 transition hover:border-zinc-400"
        >
          <h2 className="text-lg font-semibold text-zinc-900">Reflections</h2>
          <p className="text-sm text-zinc-600">
            Reflective commentary and three case studies (bias, AI safety,
            XAI).
          </p>
        </Link>
      </section>
      <section>
        <h2 className="mb-4 text-xl font-semibold text-zinc-900">
          Weekly progress
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {weeks.map((week) => (
            <WeekCard key={week.week} week={week} />
          ))}
        </div>
      </section>
    </main>
  );
}
