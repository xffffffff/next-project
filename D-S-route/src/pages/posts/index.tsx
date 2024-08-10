import { useRouter } from 'next/router';
export default function About() {
  const router = useRouter()
  const {aboutId} = router.query
  return (
    <main>
      <h1>全部的 post --- 追加 id值 可查看对应 post</h1>
    </main>
  );
}
