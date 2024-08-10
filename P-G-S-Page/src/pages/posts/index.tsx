import { useEffect, useState } from "react"
import '@/app/globals.css'
export default function About() {

  const [data, setData] = useState<any[]>()
  const [dateTime, setDateTime] = useState<any>()
  const fetchData = ()=>{
    fetch('https://dummyjson.com/posts')
    .then((res)=>{
      return res.json()
    })
    .then((data):void=>{
      console.log(data)
      setData(data.posts)
      setDateTime((new Date()).toLocaleString())
    })
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <main>
      <h1>全部的 post --- 追加 id值 可查看对应 post</h1>
      <h3>{dateTime}</h3>
      <ul>
        {
          data?.map(item=>{
            return (
              <li>
                <h4>{item.title}</h4>
              </li>
            )
          })
        }
      </ul>
    </main>
  );
}
