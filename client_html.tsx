// @deno-types="https://raw.githubusercontent.com/Soremwar/deno_types/4a50660/react/v16.13.1/react.d.ts"
import React from "https://dev.jspm.io/react@16.13.1";
import ReactDOMServer from "https://dev.jspm.io/react-dom@16.13.1/server";
import { App } from "./app.tsx";

export function clientHtml(js?: string) {
  return `<html>
    <body>
        <main id="root">${(ReactDOMServer as any).renderToString(<App loading={true} />)}</main>
        <p><button onclick="fetch('/stop', { method: 'POST'})">&#x23F9; Stop the Deno server</button></p>
        <script type="module"${js ? "" : ' src="/client.js"'}>${js ? js : ""}</script>
    </body>
</html>`;
}
