import style from "./modal.module.scss";

interface modelProp {
  setIsOpen: (IsOpen: boolean) => void;
  IsOpen: boolean;
}

export function Modal({ setIsOpen, IsOpen }: modelProp) {
  return (
    IsOpen === true && (
      <section className={style.mainModal}>
        <button onClick={() => setIsOpen(false)}>Close</button>
      </section>
    )
  );
}
