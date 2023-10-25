'use client'

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
          {data.map(
            (
              url: { shortpath: string; orglink: string },
              index: Key | null | undefined
            ) => (
              <tr key={index}>
                <td>
                  <a href={`${url.orglink}`} target="_blank">
                    {url.orglink}
                  </a>
                </td>
                <td>
                  <Link href="/[URLpages]">a</Link>
                  {/* <a
                    href={`http://yourlinks.vercel.app/${url.shortpath}`}
                    target="_blank"
                    onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
                      event.preventDefault();
                      RedirectLink(
                        url.shortpath,
                        url.orglink
                      )(event as any as NextRequest);
                    }}
                  >
                    yourlinks.vercel.app/{url.shortpath}
                  </a> */}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>

    </>
  );
}