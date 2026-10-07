import Link from "next/link";

export default function ArchitectureNotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center bg-black px-4 text-center text-white">
      <h1 className="text-2xl font-medium">Story not found</h1>
      <p className="mt-3 text-white/60">This architecture story may have been moved or removed.</p>
      <Link
        href="/architecture"
        className="mt-8 inline-flex bg-white px-6 py-3 text-i-xs font-medium uppercase tracking-[0.14em] text-black"
      >
        View all stories
      </Link>
    </main>
  );
}
