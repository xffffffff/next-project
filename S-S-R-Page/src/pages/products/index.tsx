import Link from "next/link"
import Image from "next/image"
export default function Products(props: any) {
    return (
        <main>
            <h1>Product page</h1>
            <h2>{props.dateTime}</h2>
            <ul>
                {props.data.map((item: any) => {
                    return (
                        <li key={item.id}>
                            <Link href={`products/${item.id}`}>{item.title}</Link>
                            <h4>{item.description}</h4>
                            <Image src={item.images[0]} priority width={200} height={200} alt="Error Net..."></Image>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}


export async function getServerSideProps(context: any) {
    // console.log(Object.keys(context))
    // console.log(`url: ${context.resolvedUrl}\nquery: ${Object.keys(context.query)} `)
    return ({
        props: {
            dateTime: (new Date()).toLocaleString(),
            data: (await (await fetch('https://dummyjson.com/products')).json()).products
        }
    })
}