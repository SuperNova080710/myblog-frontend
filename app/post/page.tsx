import { getPosts } from '@/lib/post.api';
import Link from 'next/link';

type Post = {
  id: number;
  title: string;
};

export default async function PostsPage() {
  const posts: Post[] = await getPosts();

  return (
    <div style={{ maxWidth: 600, margin: '0 auto' }}>
      {/* 상단 영역 */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
        <h1>게시글 목록</h1>
        <Link href="/post/new">글쓰기</Link>
      </div>

      {/* 목록 */}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}