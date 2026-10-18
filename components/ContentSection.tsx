import Image from "next/image";
import type { AssessmentInfo } from "@/lib/weeks";
import { slugify } from "@/lib/weeks";

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
            id={slugify(item.title)}
            className="scroll-mt-20 rounded-lg border border-zinc-100 bg-zinc-50 p-4"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="font-medium text-zinc-900">
                {item.title}
                {item.author ? (
                  <span className="ml-2 font-medium text-zinc-900">
                    {item.author}
                  </span>
                ) : null}
              </span>
              {item.href && !item.highlightHref ? (
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
            {item.href && item.highlightHref ? (
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 self-start rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-700"
              >
                <svg
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
                </svg>
                View {item.title} on GitHub
              </a>
            ) : null}
            {item.images ? (
              <div className="mt-4 flex flex-col gap-4 border-t border-zinc-200 pt-4">
                {item.images.map((image) => (
                  <figure key={image.src} className="flex flex-col gap-2">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      className="h-auto w-full rounded-md border border-zinc-200"
                    />
                    {image.caption ? (
                      <figcaption className="text-center text-xs text-zinc-500">
                        {image.caption}
                      </figcaption>
                    ) : null}
                  </figure>
                ))}
              </div>
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
