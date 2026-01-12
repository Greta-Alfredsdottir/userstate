import { Greeting } from "./componenter/greeting/greeting.tsx";
import { Counter } from "./componenter/counter/counter.tsx";

function App() {
  // Component som kan tælle op (counter)

  // Modal Komponent som kan åbne og lukke

  return (
    <>
      <Greeting />
      <Counter />
    </>
  );
}

export default App;
