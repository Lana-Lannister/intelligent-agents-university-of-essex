import type { AssessmentInfo } from "@/lib/weeks";

export default function ContentSection({ section }: { section: AssessmentInfo }) {
  return (
    <section className="flex flex-col gap-4 rounded-xl border border-zinc-200 p-5">
      <div>
        <h2 className="text-lg font-semibold text-zinc-900">{section.title}</h2>
        <p className="text-sm text-zinc-600">{section.description}</p>
      </div>
      <ul className="flex flex-col gap-5">
        {section.items.map((item) => (
          <li
            key={item.title}
            className="rounded-lg border border-zinc-100 bg-zinc-50 p-4"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="font-medium text-zinc-900">
                {item.title}
                {item.author ? (
                  <span className="ml-2 text-xs font-normal text-zinc-500">
                    {item.author}
                  </span>
                ) : null}
              </span>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-zinc-500 underline hover:text-zinc-900"
                >
                  View source on GitHub
                </a>
              ) : null}
            </div>
            {item.description ? (
              <p className="mt-1 text-sm text-zinc-600">{item.description}</p>
            ) : null}
            {item.code ? (
              <div className="mt-4 flex flex-col gap-3 border-t border-zinc-200 pt-4">
                {item.code.map((block, index) => (
                  <pre
                    key={index}
                    className="overflow-x-auto rounded-md bg-zinc-900 p-3 text-xs text-zinc-100"
                  >
                    <code>{block}</code>
                  </pre>
                ))}
              </div>
            ) : null}
            {item.body ? (
              <div className="mt-4 flex flex-col gap-3 border-t border-zinc-200 pt-4">
                {item.body.map((paragraph, index) => (
                  <p key={index} className="text-sm leading-relaxed text-zinc-800">
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : null}
            {item.references && item.references.length > 0 ? (
              <div className="mt-4 border-t border-zinc-200 pt-4">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  References
                </h3>
                <ul className="mt-2 flex flex-col gap-1.5">
                  {item.references.map((reference) => (
                    <li key={reference} className="text-xs text-zinc-600">
                      {reference}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
