#!/usr/bin/env -S deno run --allow-net --unstable --allow-read

import terser from "https://dev.jspm.io/terser@5.3.5";

export async function bundleClient(minify?: boolean) {
  const basePath = import.meta.url.replace(/\/[^/]*.(j|t)sx?$/, "");
  const protocol = basePath.replace(/^([^:/]+:\/\/).*/, "$1");
  const lib = ["dom", "dom.iterable", "esnext"];
  const [diagnostics, js] = await Deno.bundle(`${basePath}/client.tsx`, undefined, { lib });
  console.log(diagnostics || "[Bundler] : no error ✅");
  // FIXME: if the bundler is call from github, the bundle is invalid
  const jsFix = js.replace('__instantiate("/', `__instantiate("${protocol}`);
  // @ts-ignore
  return minify ? (await terser.minify(jsFix)).code : jsFix;
}

if (import.meta.main) {
  const js = await bundleClient();
  // if inside a worker, post the JS
  // @ts-ignore
  if (self.postMessage) {
    // @ts-ignore
    self.postMessage(js);
  }
}
