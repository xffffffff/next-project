import { useRouter } from 'next/router';
export default function Posts() {
  const router = useRouter()
  const {postId} = router.query
  return (
    <main>
      <h1>第 {postId} 条 post ---追加访问 comments 可查看评论</h1>
    </main>
  );
}
