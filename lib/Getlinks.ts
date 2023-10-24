// export async function GET() {
//         const res = await fetch('https://data.mongodb-api.com/...', {
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         })
//         const data = await res.json()

//         return new Response(JSON.stringify({ data }));
//         // return Response.json({ data })
//     }

export async function getData():Promise<any[]> {
  const res = await fetch('https://ap-south-1.aws.data.mongodb-api.com/app/data-walof/endpoint/geturl', {
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  // console.log(res.json());
  return await res.json();
}
