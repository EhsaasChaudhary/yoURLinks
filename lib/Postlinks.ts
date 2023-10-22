export async function Post(ShortPath: string, OrgLink: string) {
    const res = await fetch('https://data.mongodb-api.com/...', {
      method: 'POST',
      body: JSON.stringify({ shortpath: ShortPath, orgLink: OrgLink }),
      headers: {
        'Content-Type': 'application/json', // Specify the content type
      },
    });
  
    const data = await res.json();
  
    return data; // Return the parsed JSON data
  }
  