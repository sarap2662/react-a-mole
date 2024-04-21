import React, { useEffect } from "react";
import yesMole from "../mole.png";

function Mole(props) {
  useEffect(() => {
    let randSeconds = Math.ceil(Math.random() * 5000);
    let timer = setTimeout(() => {
      props.toggle(false);
    }, randSeconds);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <img
        style={{ width: "30vw" }}
        src={yesMole}
        onClick={props.handleBop}
        alt="mole"
      />
    </div>
  );
}
export default Mole;
