// export const dynamic = 'force-dynamic';
export const revalidate = 420;

interface Post {
  title: string;
  content: string;
  slug: string;
}

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
    (res) => res.json()
    );

    return posts.map((post) => ({
      slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: Props) {

  const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
    (res) => res.json()
    );
    const post = posts.find((post) => post.slug === params.slug)!;

  return (
    <div className="bg-slate-50 h-screen text-slate-800 px-6 space-y-6">
      <h1 className="text-4xl pt-10">{post.title}</h1>
      <p className="text-lg">{post.content}</p>
    </div>
  )
}