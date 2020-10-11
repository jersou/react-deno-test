#!/usr/bin/env -S deno run --allow-net --unstable --allow-read

export async function bundleClient() {
  const basePath = import.meta.url.replace(/\/[^/]*.(j|t)sx?$/, "");
  const lib = ["dom", "dom.iterable", "esnext"];
  const [diagnostics, js] = await Deno.bundle(`${basePath}/client.tsx`, undefined, { lib });
  console.log(diagnostics || "[Bundler] : no error ✅");
  return js;
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
