import "./style.css";
import { useState } from "react";

export default function App(){

const [show, setShow] = useState(true);
  return (
    <div className="container">
      <button onClick={() => setShow((show) => !show)}> Press</button>
      {show ? <h1> Bom dia, paixão  </h1> : null}
    </div>
  );
}
