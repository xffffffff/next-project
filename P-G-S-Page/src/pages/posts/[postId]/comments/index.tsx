import '@/app/globals.css'
import { useRouter } from 'next/router';
export default function Comments() {
  const router = useRouter()
  const {postId} = router.query
  return (
    <main>
      <h1>postId 【{postId}】的 page 全部评论 ---追加 id值 可查看对应的评论</h1>
    </main>
  );
}
