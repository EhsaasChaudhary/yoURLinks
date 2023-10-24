export async function getData(): Promise<any> {
  const response = await fetch('https://ap-south-1.aws.data.mongodb-api.com/app/data-walof/endpoint/geturl');
  const json = await response.json();
  return json;
}
// export async function getData():Promise<any[]> {
//   const res = await fetch('https://ap-south-1.aws.data.mongodb-api.com/app/data-walof/endpoint/geturl', {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return await res.json();
// }
