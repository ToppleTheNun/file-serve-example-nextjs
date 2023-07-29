import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: { simc: string } }
) {
    const file = await readFile(join(process.cwd(), "src", "data", params.simc), { encoding: "utf-8"});
    return new Response(file, { headers: { "content-type": "text/plain" }});
}
