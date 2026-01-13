interface navigationsProps {
  setIsOpen: (IsOpen: boolean) => void;
  IsOpen: boolean;
}
export function Navigation({ IsOpen, setIsOpen }: navigationsProps) {
  return (
    <nav>
      <ul>
        <li>HOME</li>
      </ul>
      <ul>
        <li>ABOUT</li>
      </ul>
      <ul>
        <li>STUFF</li>
      </ul>
      <button onClick={() => setIsOpen(true)}>Log in</button>
      {IsOpen === true && <h2>hej</h2>}
    </nav>
  );
}
