import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StickyEnquire } from "@/components/StickyEnquire";
import {
  getAllArchitectureSlugs,
  getArchitectureBySlug,
  newsArticles,
} from "@/data/news";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-static";
export const revalidate = false;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllArchitectureSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArchitectureBySlug(slug);
  if (!article) return { title: "Story not found" };
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/architecture/${slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image }],
    },
  };
}

export default async function ArchitectureStoryPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArchitectureBySlug(slug);
  if (!article) notFound();

  const related = newsArticles.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <>
      <Header />
      <StickyEnquire />
      <main className="bg-black pt-28 text-white md:pt-32">
        <article>
          <div className="site-container pb-8 md:pb-12">
            <Link
              href="/architecture"
              className="text-i-xs uppercase tracking-[0.14em] text-white/60 transition-colors hover:text-white"
            >
              ← All architecture stories
            </Link>
            <p className="mt-8 text-p-sm uppercase tracking-[0.12em] text-white/70">
              Architecture · {article.date}
            </p>
            <h1 className="text-editorial-title mt-4 max-w-4xl">{article.title}</h1>
            <p className="text-editorial-body mt-6 max-w-3xl text-white/75">{article.excerpt}</p>
          </div>

          <div className="relative aspect-[16/9] w-full bg-neutral-900 md:aspect-[21/9]">
            <Image
              src={article.image}
              alt=""
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>

          <div className="site-container py-12 md:py-16">
            <div className="max-w-3xl space-y-6 text-base leading-relaxed text-white/80 md:text-lg md:leading-relaxed">
              {article.body.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>

            {related.length > 0 && (
              <section className="mt-16 border-t border-white/15 pt-12">
                <h2 className="text-h1 mb-8">More stories</h2>
                <ul className="grid gap-6 sm:grid-cols-3">
                  {related.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/architecture/${item.slug}`}
                        className="group block overflow-hidden border border-white/10 bg-neutral-950 transition-colors hover:border-white/25"
                      >
                        <div className="relative aspect-[4/3] bg-neutral-900">
                          <Image
                            src={item.image}
                            alt=""
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>
                        <div className="p-4">
                          <p className="text-i-xs text-white/50">{item.date}</p>
                          <h3 className="mt-2 text-base font-medium leading-snug text-white">
                            {item.title}
                          </h3>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
