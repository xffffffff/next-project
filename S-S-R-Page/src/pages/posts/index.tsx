import '@/app/globals.css'
import Link from 'next/link';
export default function Posts(props: any) {
  return (
    <main>
      <h1>全部的 post --- 点击标题 可查看对应 post</h1>
      <h2>{props.dateTime}</h2>
      <ul>
        {
          props.data?.map((item: any, index: number) => {
            return (
              <li key={index}>
                <h3><Link href={`posts/${index+1}`} >{item.title}</Link></h3>
              </li>
            )
          })
        }
      </ul>
    </main>
  );
}

//next.js内置函数 在构建时获取数据，装载到props里，作为组件属性 传给页面级的组件(pages下的页面) 注入页面后生成完整的静态页面 访问时无需任何数据请求 
export async function getStaticProps() {
  return ({
    props: {
      dateTime: (new Date()).toLocaleString(),
      data: (await (await fetch('https://dummyjson.com/posts')).json()).posts
    }
  })
}
