#!/usr/bin/env -S deno run --unstable --allow-net --allow-read --allow-write

import { clientHtml } from "./client_html.tsx";
import { bundleClient } from "./client_bundler.ts";

async function bundle() {
  await Deno.mkdir("./dist", { recursive: true });
  await Deno.writeTextFile("dist/index.html", clientHtml);
  await Deno.writeTextFile("dist/client.js", await bundleClient());
}

if (import.meta.main) {
  await bundle();
}
