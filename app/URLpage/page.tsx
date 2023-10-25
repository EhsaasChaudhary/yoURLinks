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
      {/* <table>
        <thead>
          <tr>
            <th>Original URL</th>
            <th>Short URL</th>
          </tr>
        </thead>
        <tbody> */}
          {data.map(
            (
              url: { shortpath: string; orglink: string },
              index: Key | null | undefined
            ) => (
              <ul key={index}>
                <li>
                  <a href="www.google.com" className="text-black"></a>
                </li>
                <li>
                <a href="https://yourlinks.vercel.app/{url.orglink}" target="_blank"></a>
                </li>
              </ul>
            )
          )}
        {/* </tbody>
      </table> */}
    </>
  );
}
