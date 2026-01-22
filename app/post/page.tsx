import { apiFetch } from '@/lib/api';

export default async function PostsPage() {
  const posts = await apiFetch('/post');

  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
