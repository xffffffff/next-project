import '@/app/globals.css'
import { useRouter } from 'next/router';
export default function Comments() {
  const router = useRouter()
  const {commentId, postId} = router.query
  return (
    <main>
      <h1>postId 【{postId}】的 page 第 {commentId} 条评论</h1>
    </main>
  );
}
