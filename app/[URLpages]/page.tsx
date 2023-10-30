import { getData } from "@/lib/Getlinks"

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
    const url = await getData()
   
    return url.map((url: { slug: any }) => ({
      slug: url.slug,
    }))
  }

  export async function getorg(targetValue: any) {
    const url = await getData()
    return url
      .filter((item: { secondString: any; }) => item.secondString === targetValue)
      .map((item: { slug: any; }) => item.slug);
  }
   


  // Multiple versions of this page will be statically generated
  // using the `params` returned by `generateStaticParams`
  export default function Page({ params }: { params: { slug: string } }) {
    const datas= getorg(params)
    console.log(datas);
    console.log(params)
    const { slug } = params
    // ...
  }