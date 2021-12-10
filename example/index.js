import fs from "node:fs/promises";
import path from "node:path";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
// @ts-ignore
import { preserveReferenceCharacetersPlugin } from "remark-plugin-preserve-reference-characters";

main();

async function main() {
  const data = await fs.readFile(path.join(process.cwd(), "data.md"));
  const file = await unified()
    .use(remarkParse)
    .use(preserveReferenceCharacetersPlugin)
    .use(remarkStringify)
    .process(data);
  console.log(String(file));
}
