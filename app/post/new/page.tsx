'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createPost } from '@/lib/post.api';
import Link from 'next/dist/client/link';

export default function NewPostPage() {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!title.trim() || !detail.trim()) {
      alert('제목과 내용을 입력하세요.');
      return;
    }

    try {
      setLoading(true);

      await createPost({
        title,
        detail,
      });

      // 글 작성 후 목록으로 이동
      router.push('/post');
    } catch (e) {
      alert('글 작성에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto' }}>
      <h1>글 작성</h1>

      <div style={{ marginBottom: 12 }}>
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: '100%', padding: 8 }}
        />
      </div>

      <div style={{ marginBottom: 12 }}>
        <textarea
          placeholder="내용"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          rows={8}
          style={{ width: '100%', padding: 8 }}
        />
      </div>

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? '작성 중...' : '작성'}
      </button>
      <div style={{ marginTop: 20 }}>
                <Link href="/post">목록으로 돌아가기</Link>
        </div>
    </div>
  );
}
