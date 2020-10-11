// @deno-types="https://raw.githubusercontent.com/Soremwar/deno_types/4a50660/react/v16.13.1/react.d.ts"
import React from "https://dev.jspm.io/react@16.13.1";

export function Example() {
  const [count, setCount] = React.useState(0);
  return (
    <p>
      <button onClick={() => setCount(count + 1)}>&#x2795; click count = {count}</button>
    </p>
  );
}

export const App = ({ loading = false }) => {
  return (
    <>
      <div>{loading ? "---CHARGEMENT---" : "+++OK+++"}</div>
      <Example />
    </>
  );
};
