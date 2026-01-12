import { useState } from "react";
import style from "./counter.module.scss";

export function Counter() {
  // - En måde at tjekke hvad count er på

  // - En button HTML tag
  // - Noget tekst der viser hvor mange vi har trykket på knappen
  const [count, setCount] = useState(0);

  console.log("Count: ", count);

  return (
    <>
      <button className={style.minButton} onClick={() => setCount(count + 1)}>
        Click
      </button>
      <p> Du har klikket på knappen x antal gange: {count}</p>
    </>
  );
}
