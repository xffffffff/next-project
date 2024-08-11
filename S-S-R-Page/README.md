# my-next-app

SSR 服务端渲染 
学了P-G-S-Page项目之后，发现一个问题，不管是SSG静态站点生成，还是ISG增量静态生成，都是不能即时生成用户的预想页面，要么是构建时生成(SSG)或者是运行时定期生成(ISG)。
所以要是有一种既可以随时接收用户请求(ISG无法做到)，又可以在服务端生成对应请求的html(又能保留服务端生成的技术)，响应给用户，这就要SSR来完成了。(由于SSR的即时性，它的SEO会比SSG或者ISG更有优势)

像 SSG 那样，有一个内置函数负责生成数据，然后返回 props 注入组件协助生成HTML，SSG是 getStaticProps ，而 SSR 服务端渲染的getServerSideProps 如下：
export default function getServerSideProps(context:any){
    return {
        props:{ ... }
    }
}
其中 context 相比于 SSG 的 getStaticProps 中的 context 参数来说，getServerSideProps 的context 是一个更多信息的上下文(比如 res req headers)。




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
