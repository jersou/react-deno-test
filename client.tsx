import React from "https://dev.jspm.io/react@16.13.1";
import ReactDOM from "https://dev.jspm.io/react-dom@16.13.1";
import { App } from "./app.tsx";

// @ts-ignore
const root = document.getElementById("root");
(ReactDOM as any).hydrate(<App />, root);
console.log("→ client.js loading is done");
