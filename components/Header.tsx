import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Header() {
  return (
    <header className="border-b border-zinc-200">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold text-zinc-900">
          {siteConfig.studentName}
        </Link>
        <nav className="flex items-center gap-5 text-sm">
          <Link href="/project" className="text-zinc-500 hover:text-zinc-900">
            Final Project
          </Link>
          <Link href="/reflections" className="text-zinc-500 hover:text-zinc-900">
            Reflections
          </Link>
          <a
            href={siteConfig.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-zinc-900"
          >
            GitHub ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
