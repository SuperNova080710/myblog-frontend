import { getPostById } from "@/lib/post.api";
import Link from "next/link";

type Post = {
    id: number;
    title: string;
    detail: string;
    createdAt: string;
}

export default async function PostPage({ params }: { params: { id: string } }) {
    const {id} = await params;
    const post: Post = await getPostById(Number(id));

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.detail}</p>
            <small>작성일: {new Date(post.createdAt).toLocaleDateString()}</small>
            <div style={{ marginTop: 20 }}>
                <Link href="/post">목록으로 돌아가기</Link>
            </div>
        </div>
    );
}