import MyForm from "@/Components/MyForm";
import { getData } from "@/lib/Getlinks";
import { Key } from "react";
import Link from "next/link";

// Opt out of caching for all data requests in the route segment
export const dynamic = 'force-dynamic'
export default async function URLpage() {
  const data = await getData();

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
          {data?.map(
            (
              item: {
                shortpath: string | undefined;
                orglink: string | undefined;
              },
              index: Key | null | undefined
            ) => (
              <tr key={index}>
                <td>
                  <a href={item.orglink}>{`https://yourlinks.vercel.app/${item.orglink}`}</a>
                </td>
                <td>
                  <Link href={`${item.shortpath}`}>{item.shortpath}</Link>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  );
}
