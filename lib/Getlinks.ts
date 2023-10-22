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

export async function getData() {
  const res = await fetch("https://data.mongodb-api.com/...", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
