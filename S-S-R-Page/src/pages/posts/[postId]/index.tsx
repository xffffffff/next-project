import { useRouter } from "next/router";
export default function Posts(props: any) {
  const router = useRouter()
  console.log(props)
  if(router.isFallback){
    return (
      <h1>Loading...</h1>
    )
  }
  return (
    <main>
      <h1>追加访问 comments 可查看评论</h1>
      <h2>时间：{props.dateTime}</h2>
      <h3>标题：{props.data.title}</h3>
      <h4>内容：{props.data.body}</h4>
    </main>
  );
}

//next.js内置函数 在构建时返回不同请求参数的数据给getStaticProps，相当于模拟用户请求，得到结果，协助getStaticProps提供数据给页面，以便生成完整的静态页面
export async function getStaticPaths() {
  return {
    paths: [
      { params: {postId: '1'}},
      { params: {postId: '2'}},
    ],
    fallback: true
  }
}

//next.js内置函数 在构建时获取数据，装载到props里，作为组件属性 传给页面级的组件(pages下的页面) 注入页面后生成完整的静态页面 访问时无需任何数据请求 
export async function getStaticProps(paths:any) {
  const params = paths.params
  return ({
    props: {
      dateTime: (new Date()).toLocaleString(),
      data: await (await fetch('https://dummyjson.com/posts/'+params.postId)).json()
    },
    revalidate: 30
  })
}


