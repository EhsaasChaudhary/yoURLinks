// export async function POST(ShortPath: string, OrgLink: string) {
//     const res = await fetch('https://data.mongodb-api.com/...', {
//       method: 'POST',
//       body: JSON.stringify({ shortpath: ShortPath, orgLink: OrgLink }),
//       headers: {
//         'Content-Type': 'application/json', // Specify the content type
//       },
//     });
  
//     const data = await res.json();
  
//     return Response.json(data)
//     return data; 

//   }
  

  export async function postData(ShortPath: string, OrgLink: string) {
  
    try {
      const res = await fetch('https://ap-south-1.aws.data.mongodb-api.com/app/data-walof/endpoint/posturl', {
        method: 'POST',
        body: JSON.stringify({ shortpath: ShortPath, orglink: OrgLink }),
        headers: {
          'Content-Type': 'application/json', // Specify the content type
        },
      });
  
      if (!res.ok) {
        throw new Error("Failed to send data");
      }
  
      return res.json();
      
    } catch (error) {
      console.error("An error occurred:", error);
      throw error; 
    }
  }
  