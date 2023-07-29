import type { NextApiRequest, NextApiResponse } from 'next'
import {readFile} from "node:fs/promises";
import {join} from "node:path";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const simc = Array.isArray(req.query.simc) ? req.query.simc.at(0) : req.query.simc;
    const file = await readFile(join(process.cwd(), "src", "data", simc ?? ""), { encoding: "utf-8"});
    res.status(200).setHeader("content-type", "text/plain").send(file);
}
