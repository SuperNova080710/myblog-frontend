import { apiFetch } from './api';

export function getPosts() {
  return apiFetch('/post');
}

export function getPostById(id: number) {
    return apiFetch(`/post/${id}`);
}

export function createPost(data: {
  title: string;
  detail: string;
}) {
  return apiFetch('/post', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export function updatePost(id: number, data: Partial<{
  title: string;
  content: string;
}>) {
  return apiFetch(`/post/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  });
}

export function deletePost(id: number) {
  return apiFetch(`/post/${id}`, {
    method: 'DELETE',
  });
}
