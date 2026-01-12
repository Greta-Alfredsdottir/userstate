// import style from "./greeting.module.scss";

import { useState } from "react";

export function Greeting() {
  const [name, setName] = useState("ven");

  return (
    <>
      <p>Send en hilsen til {name}</p>
      <input
        type="text"
        placeholder="Indtast et navn"
        // Skal bruge event="onChange, target="input feldet, value"= Det vi taster ind i input feldet(name værdi)
        onChange={(event) => setName(event.target.value)}
      />
    </>
  );
}
