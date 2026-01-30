import { getPostById } from '@/lib/post.api';
import EditForm from './EditForm';

export default async function EditPage({ params }: { params: { id: string }}) {
    const {id} = await params;
    const post = await getPostById(Number(id));

  return (
    <EditForm
      id={Number(post.id)}
      initialTitle={post.title}
      initialDetail={post.detail}
    />
  );
}
