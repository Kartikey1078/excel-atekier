import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StickyEnquire } from "@/components/StickyEnquire";
import { newsArticles } from "@/data/news";
import { COMPANY_NAME } from "@/lib/brand";
import { siteConfig } from "@/lib/site";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Architecture",
  description: `Architecture stories, projects, and built work from ${COMPANY_NAME}.`,
  alternates: { canonical: "/architecture" },
};

export default function ArchitecturePage() {
  return (
    <>
      <Header />
      <StickyEnquire />
      <main className="bg-black pt-28 text-white md:pt-32">
        <div className="site-container pb-16 md:pb-24">
          <p className="text-p-sm uppercase tracking-[0.12em] text-white/70">Architecture</p>
          <h1 className="text-editorial-title mt-4 max-w-4xl">Stories &amp; projects</h1>
          <p className="text-editorial-body mt-6 max-w-3xl text-white/75">
            {siteConfig.description} Browse updates on buildings, research, and work in progress.
          </p>

          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {newsArticles.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/architecture/${article.slug}`}
                  className="group block overflow-hidden border border-white/10 bg-neutral-950 transition-colors hover:border-white/25"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                    <Image
                      src={article.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5 sm:p-6">
                    <p className="text-i-xs text-white/50">{article.date}</p>
                    <h2 className="mt-2 text-lg font-medium leading-snug tracking-tight text-white group-hover:text-white/90">
                      {article.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-white/65">{article.excerpt}</p>
                    <span className="mt-4 inline-block text-i-xs text-white/80 transition-colors group-hover:text-white">
                      Read story →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/#architecture"
            className="mt-12 inline-flex text-i-xs uppercase tracking-[0.14em] text-white/70 transition-colors hover:text-white"
          >
            ← Back to homepage carousel
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
