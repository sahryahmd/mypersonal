import fs from "fs"
import path from "path"
import matter from "gray-matter"

export type Post = {
  slug: string
  title: string
  date: string
  excerpt: string
  tags?: string[]
  cover?: string
  content: string
}

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog")

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""))
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(BLOG_DIR, `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null
  const file = fs.readFileSync(fullPath, "utf-8")
  const { data, content } = matter(file)
  return {
    slug,
    title: data.title || slug,
    date: data.date || new Date().toISOString(),
    excerpt: data.excerpt || "",
    tags: data.tags || [],
    cover: data.cover || undefined,
    content,
  }
}

export function getAllPosts(): Post[] {
  const slugs = getAllSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is Post => Boolean(p))
    .sort((a, b) => (a.date < b.date ? 1 : -1))
  return posts
}
