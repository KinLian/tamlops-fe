// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { promptResponse } from "@/types/components";
import axios, { AxiosResponse } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AxiosResponse<promptResponse, promptResponse>>
) {
  const response = await axios.post(
    "http://34.42.105.222:8000/inference/generate/",
    req.body,
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  res.status(200).json(response.data);
}
