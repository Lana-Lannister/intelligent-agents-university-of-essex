import Link from "next/link";
import StatusBadge from "@/components/StatusBadge";
import { caseStudies, reflectiveCommentary } from "@/lib/reflections";

export default function ReflectionsPage() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-10 px-6 py-10">
      <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-900">
        ← Back to all weeks
      </Link>

      <div>
        <h1 className="text-2xl font-semibold text-zinc-900">Reflections</h1>
        <p className="mt-2 text-zinc-600">
          Reflective commentary on the skills and understanding developed
          during the module, plus three formative case studies structured
          using Rolfe, Freshwater and Jasper&apos;s (2001) What / So what / Now
          what framework.
        </p>
      </div>

      <section className="flex flex-col gap-3 rounded-xl border border-zinc-200 p-5">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-lg font-semibold text-zinc-900">
            Reflective Commentary
          </h2>
          <StatusBadge status={reflectiveCommentary.status} />
        </div>
        {reflectiveCommentary.body.map((paragraph, index) => (
          <p key={index} className="text-sm leading-relaxed text-zinc-800">
            {paragraph}
          </p>
        ))}
      </section>

      <div className="flex flex-col gap-6">
        {caseStudies.map((caseStudy) => (
          <section
            key={caseStudy.slug}
            className="flex flex-col gap-4 rounded-xl border border-zinc-200 p-5"
          >
            <div className="flex items-center justify-between gap-2">
              <div>
                <h2 className="text-lg font-semibold text-zinc-900">
                  {caseStudy.title}
                </h2>
                <p className="text-xs uppercase tracking-wide text-zinc-500">
                  {caseStudy.theme}
                </p>
              </div>
              <StatusBadge status={caseStudy.status} />
            </div>
            {caseStudy.sections.map((section) => (
              <div
                key={section.heading}
                className="rounded-lg border border-zinc-100 bg-zinc-50 p-4"
              >
                <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  {section.heading}
                </h3>
                <div className="mt-2 flex flex-col gap-2">
                  {section.body.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-sm leading-relaxed text-zinc-800"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
            {caseStudy.references && caseStudy.references.length > 0 ? (
              <div className="border-t border-zinc-200 pt-4">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  References
                </h3>
                <ul className="mt-2 flex flex-col gap-1.5">
                  {caseStudy.references.map((reference) => (
                    <li key={reference} className="text-xs text-zinc-600">
                      {reference}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </section>
        ))}
      </div>
    </main>
  );
}
