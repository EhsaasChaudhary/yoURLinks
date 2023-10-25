import MyForm from "@/Components/MyForm";
import { getData } from "@/lib/Getlinks";
import { Key } from "react";


export default async function URLpage() {
  const data = await getData();

  console.log(data);

  return (
    <>
      <MyForm />
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>Original URL</th>
            <th>Short URL</th>
          </tr>
        </thead>
        <tbody>
          {data.map(
            (
              url: { shortpath: string; orglink: string },
              index: Key | null | undefined
            ) => (
              <tr key={index}>
                <td>
                  <link href={`${url.orglink}`}>{url.orglink}</link>
                 
                </td>
                <td>
                  <a
                    href={`https://yourlinks.vercel.app/${url.shortpath}`}
                    target="_blank"

                  >yourlinks.vercel.app/{url.shortpath}</a>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>

      {/* <table>
        <thead>
          <tr>
            <th>Original URL</th>
            <th>Short URL</th>
          </tr>
        </thead>
        <tbody>
          {data.map(
            (
              url: { shortpath: string; orglink: string },
              index: Key | null | undefined
            ) => (
              <tr key={index}>
                <td>
                  <a href={`${url.orglink}`}></a>
                </td>
                <td>
                  <a
                    href="https://yourlinks.vercel.app/{url.orglink}"
                    target="_blank"
                  ></a>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table> */}
    </>
  );
}
