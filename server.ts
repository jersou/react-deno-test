#!/usr/bin/env -S deno run --allow-net --unstable --allow-read

import { Application } from "https://deno.land/x/oak@v6.3.1/mod.ts";
import { createRouter } from "./router.ts";
import { deferred } from "https://deno.land/std@0.74.0/async/deferred.ts";

const port = 8000;
const oakApp = new Application();
const jsDeferred = deferred<string>();

oakApp.addEventListener("error", (evt) => console.log(evt.error));
oakApp.addEventListener("listen", () => console.log(`Listening on: http://localhost:${port}`));
oakApp.use(createRouter(jsDeferred).routes());
oakApp.listen({ port });

const bundler = new Worker(new URL("client_bundler.ts", import.meta.url).href, { type: "module", deno: true });
bundler.onmessage = async (e) => jsDeferred.resolve(e.data);
