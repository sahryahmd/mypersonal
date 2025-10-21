import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import Script from "next/script"
import { getAllPosts, getPostBySlug } from "@/lib/blog"

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  const url = `/blog/${post.slug}`
  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: `${post.title} | Blog`,
      description: post.excerpt,
      url,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Blog`,
      description: post.excerpt,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return notFound()

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ahmadbushairi.com"
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: { "@type": "Person", name: "Ahmad Bushairi" },
    mainEntityOfPage: `${baseUrl}/blog/${post.slug}`,
    url: `${baseUrl}/blog/${post.slug}`,
  }

  return (
    <main className="min-h-screen bg-gray-900 text-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Script id="article-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
        <nav className="text-sm text-gray-400 mb-6">
          <ol className="flex gap-2">
            <li><Link href="/" className="hover:underline">Beranda</Link></li>
            <li>/</li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            <li>/</li>
            <li className="text-white" aria-current="page">{post.title}</li>
          </ol>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold">{post.title}</h1>
        <p className="text-gray-400 text-sm mt-2">{new Date(post.date).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })}</p>
        <article className="prose prose-invert mt-6 max-w-none">
          {post.content.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </article>
        <div className="mt-8">
          <Link href="/services" className="text-indigo-400 hover:underline">Lihat paket layanan →</Link>
        </div>
      </div>
    </main>
  )
}
