import "./App.css";
import { useState } from "react";
import { Greeting } from "./componenter/greeting/greeting.tsx";
import { Counter } from "./componenter/counter/counter.tsx";
import { Modal } from "./componenter/modal/modal.tsx";
import { ModalWrapper } from "./componenter/modalwrapper/modalwrapper.tsx";
import { Navigation } from "./componenter/navigation/navigation.tsx";

export function App() {
  const [IsOpen, setIsOpen] = useState(false);
  return (
    <>
      <Greeting />
      {/* Component som kan tælle op (counter) */}
      <Counter />
      {/* Modal Komponent som kan åbne og lukke */}
      <Navigation IsOpen={IsOpen} setIsOpen={setIsOpen} />
      {IsOpen === true && (
        <>
          <ModalWrapper></ModalWrapper>
          <Modal IsOpen={IsOpen} setIsOpen={setIsOpen}></Modal>
        </>
      )}
    </>
  );
}

export default App;
