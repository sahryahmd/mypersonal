import Link from "next/link"
import type { Metadata } from "next"
import { getAllPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Blog | Artikel seputar IT Support, Web Development, dan Remote Support",
  description:
    "Kumpulan artikel praktis seputar IT Support Onsite/Remote, pembuatan website modern dengan Next.js, dan tips optimasi untuk UMKM & kantor di Jabodetabek.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Artikel seputar IT Support, Web Development, dan Remote Support",
    description:
      "Artikel praktis dan studi kasus untuk meningkatkan keandalan IT serta performa website Anda.",
    url: "/blog",
    type: "website",
  },
}

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen bg-gray-900 text-white py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold">Blog</h1>
        <p className="text-gray-300 mt-2">
          Insight singkat, studi kasus, dan panduan yang relevan dengan layanan IT Support, Web Development, dan Remote Support.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <article key={p.slug} className="glass rounded-xl p-5">
              <h2 className="text-xl font-semibold">
                <Link href={`/blog/${p.slug}`} className="hover:underline">
                  {p.title}
                </Link>
              </h2>
              <p className="text-gray-400 text-sm mt-1">{new Date(p.date).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })}</p>
              <p className="text-gray-300 mt-3">{p.excerpt}</p>
              <div className="mt-4">
                <Link href={`/blog/${p.slug}`} className="text-indigo-400 hover:underline">
                  Baca selengkapnya →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
