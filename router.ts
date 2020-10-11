import { Router } from "https://deno.land/x/oak@v6.3.1/mod.ts";
import { clientHtml } from "./client_html.tsx";

export function createRouter(jsPromise: Promise<string>) {
  const router = new Router();

  router.get("/", async (ctx) => {
    ctx.response.body = clientHtml;
    ctx.response.type = "text/html";
  });

  router.get("/client.js", async (ctx) => {
    ctx.response.body = await jsPromise;
    ctx.response.type = "application/javascript";
  });

  router.post("/stop", () => Deno.exit(0));

  return router;
}
