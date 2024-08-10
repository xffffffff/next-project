import { useRouter } from 'next/router';
export default function About() {
  const router = useRouter()
  const {other} = router.query
  return (
    <main>
      <h1> {other} Not Found！ 请访问posts</h1>
    </main>
  );
}
