#!/usr/bin/env -S deno run --unstable --allow-net --allow-read --allow-write

import { clientHtml } from "./client_html.tsx";
import { bundleClient } from "./client_bundler.ts";

async function bundle() {
  await Deno.writeTextFile("script.html", clientHtml(await bundleClient(true)));
}

if (import.meta.main) {
  await bundle();
}
