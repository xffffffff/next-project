# my-next-app

加载数据 -> 预生成静态页面

getStaticProps 是 Next.js 框架中的一个 API，在服务器端构建时获取数据，然后将这些数据作为 props（'props'作为返回数据{}中的键） 传递给 React 组件，生成预渲染的静态HTML页面，提供更快的加载时间和更好的SEO。

getStaticProps 适合生成静态路由的纯静态页面，即请求参数是不变的或者参数内容可选性较低时，构建所生成的静态页面不会给服务器过多的负载。

但是总有些时候需要根据不同的id，获取不同的数据（比如products/id中的商品id不同，注入到页面组件的数据就不同，以此来获得不同的商品详情页），这时应该怎么办？

那我们就把所有的id可能列出来，让next.js来逐一获取数据，注入页面组件，生成属于各个id的静态页面。next.js已经有这个方案了，那就是使用getStaticPaths来装载动态路由的参数（即不同id），如下详解：

getStaticPaths 与 getStaticProps 配合使用，动态生成静态页面的路由路径。当使用动态路由或带有参数的路由时，getStaticPaths 指定应该生成哪些路径的静态页面。
（返回数据为
{
    paths:[
        {params:'xx'}, 
        {params:'xx'} 
    ], 
    fallback:xxxx}
）
paths是给getStaticProps用的，很好理解。
而fallback可以理解为应急方案，如果用户输入的id不在预想之中，即输入的路由没有对应的静态页面，访问了项目构建时没有预生成的静态页面，fallback会指示应该怎么做。
1.如果是false，则表示没有应急方案，页面直接404，
2.如果是'blocking'，则表示阻塞等待，等待Next.js动态生成并保存该路由的静态页面，完成后返回页面给浏览器，用户的点击得到响应。
3.如果是true，需要return一个组件，用来过渡加载的时间，比如Loading...
'blocking'和true在下次请求该路由，可以复用。

当然，如果静态页面一直都是构建时的状态，那也不太符合实际使用，我要是可以每过几分钟（时间自己定），就可以重新获取一次新数据来生成静态页面，那我可以让静态页面随时间持续更新，称为ISG(增量静态生成)。如何实现？？？

- 前面说的getStaticProps，它除了返回一个props，还可以多返回一个revalidate变量，即{props:{...}, revalidate:second_time}，让浏览器来指导页面经过多久时间后，才能重新刷新页面数据来生成静态页面（如果没有主动刷新，则没啥影响），
- 比如revalidate:30，则在浏览器可以看到
- Cache-Control: s-maxage=30, stale-while-revalidate
  - shared max-age = 30，即共享最大年龄。告诉浏览器和其他中间缓存（如 CDN），该响应可以被缓存多久(30s)
  - stale-while-revalidate，允许浏览器在等待验证缓存是否仍然有效时，继续使用已经“过期”的缓存数据。默认通常是 5 分钟。

- 关于next/link中的Link组件 跟react-router库的差不多，但是页面中只要出现Link组件，不管有没有主动访问，网页都会主动进行href的url的数据抓取，实现预加载页面数据。还有就是，鼠标划过也会发起请求！

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
