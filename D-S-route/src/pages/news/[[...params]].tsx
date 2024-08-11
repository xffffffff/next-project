import { useRouter } from 'next/router';
export default function News() {
  const router = useRouter()
  const params:string|string[] = router.query.params! as string[]
  console.log(params)
  return (
    <main>
      <h1> 这里是新闻频道 请求的分别参数为 {params? params.join(' ') : null}</h1>
    </main>
  );
}
