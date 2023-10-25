import type { NextApiRequest, NextApiResponse } from "next";
import { getData } from "@/lib/Getlinks";

interface Link {
  shortpath: string;
  orglink: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { code } = req.query;

  if (typeof code == "string") {
    const response = getData();

    response.then((data: Link[]) => {
       

      data.map((url: { shortpath: string; orglink: string }) =>
    //   console.log(url)
        res.redirect(url.orglink)
      );
    });
  }
}
