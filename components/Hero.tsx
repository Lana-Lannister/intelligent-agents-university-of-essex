import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="flex flex-col gap-3 border-b border-zinc-200 pb-8">
      <p className="text-sm font-medium uppercase tracking-wide text-indigo-600">
        {siteConfig.university}
      </p>
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
        {siteConfig.studentName}
      </h1>
      <p className="text-sm text-zinc-500">Student ID: {siteConfig.studentId}</p>
      <p className="text-lg text-zinc-600">
        {siteConfig.programme}, {siteConfig.module} e-portfolio
      </p>
      <p className="max-w-2xl text-sm text-zinc-500">{siteConfig.bio}</p>
    </section>
  );
}
