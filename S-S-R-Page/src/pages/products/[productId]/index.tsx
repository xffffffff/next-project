import Image from "next/image"
import { useRouter } from "next/router"
export default function Product(props:any){
    const router = useRouter()
    const {productId} = router.query
    console.log(productId)
    console.log(props)
    const {data, dateTime} = props

    return (
        <main>
            <h2>{dateTime}</h2>
            <Image src={data.images[0]} priority width={200} height={200} alt="Error Net..."></Image>
            <h4>{data.description}</h4>
        </main>
    )
}

export async function getServerSideProps(context: any) {
    console.log(Object.keys(context))
    console.log(`url: ${context.resolvedUrl}\nquery: ${Object.values(context.query)} `)
    
    return ({
        props: {
            dateTime: (new Date()).toLocaleString(),
            data: await (await fetch(`https://dummyjson.com/products/${context.query.productId}`)).json()
        }
    })
}