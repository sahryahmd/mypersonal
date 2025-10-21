import Link from "next/link"
import { getAllPosts } from "@/lib/blog"

export default function BlogLatest() {
  const latest = getAllPosts().slice(0, 3)
  if (!latest.length) return null

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-bold">Artikel Terbaru</h2>
          <Link href="/blog" className="text-indigo-400 hover:underline">Lihat semua</Link>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {latest.map((p) => (
            <article key={p.slug} className="glass rounded-xl p-5">
              <h3 className="font-semibold">
                <Link href={`/blog/${p.slug}`} className="hover:underline">{p.title}</Link>
              </h3>
              <p className="text-gray-400 text-sm mt-1">{new Date(p.date).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })}</p>
              <p className="text-gray-300 mt-2 line-clamp-3">{p.excerpt}</p>
              <div className="mt-3">
                <Link href={`/blog/${p.slug}`} className="text-indigo-400 hover:underline">Baca →</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
