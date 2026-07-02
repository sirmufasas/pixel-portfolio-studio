import { mkdir, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const outDir = "dist/client";
const assetsDir = join(outDir, "assets");

const files = await readdir(assetsDir);
const appScript = files.find((file) => /^index-[\w-]+\.js$/.test(file));
const stylesheet = files.find((file) => /^styles-[\w-]+\.css$/.test(file));

if (!appScript) {
  throw new Error("Could not find the built app script in dist/client/assets.");
}

await mkdir(outDir, { recursive: true });

await writeFile(
  join(outDir, "index.html"),
  `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Khomba Group of Companies</title>
    <meta name="description" content="A portfolio of premium brands and businesses under the Khomba Group of Companies." />
    ${stylesheet ? `<link rel="stylesheet" href="/assets/${stylesheet}" />` : ""}
    <script type="module" crossorigin src="/assets/${appScript}"></script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
`,
);