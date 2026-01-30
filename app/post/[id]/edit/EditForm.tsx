'use client';

import { updatePost } from '@/lib/post.api';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type Props = {
  id: number;
  initialTitle: string;
  initialDetail: string;
};

export default function EditForm({
  id,
  initialTitle,
  initialDetail,
}: Props) {
  const router = useRouter();
  const [title, setTitle] = useState(initialTitle);
  const [detail, setDetail] = useState(initialDetail);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!title.trim() || !detail.trim()) {
      alert('제목과 내용을 입력하세요.');
      return;
    }

    try {
      setLoading(true);
      await updatePost(id, { title, detail });
      router.push(`/post/${id}`);
    } catch (e) {
      alert('글 수정에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
        <div style={{ margin: 20 }}>글 수정</div>
        <div style={{ margin: 20 }}><input value={title} onChange={(e) => setTitle(e.target.value)} /></div>
        <div style={{ margin: 20 }}>
            <textarea value={detail} onChange={(e) => setDetail(e.target.value)} />
            <button onClick={handleSubmit} disabled={loading}>수정</button>
        </div>
    </div>
  );
}
