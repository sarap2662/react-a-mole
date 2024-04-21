import EmptySlot from "./emptySlot";
import Mole from "./mole";
import React, { useState } from "react";

function MoleContainer(props) {
  const [displayMole, setDisplayMole] = useState(false);

  function handleBop(e) {
    props.setScore(props.score + 1);
    setDisplayMole(false);
  }

  let moleDisplay = displayMole ? (
    <Mole
      setScore={props.setScore}
      toggle={setDisplayMole}
      handleBop={handleBop}
    />
  ) : (
    <EmptySlot toggle={setDisplayMole} />
  );

  return <div>{moleDisplay}</div>;
}

export default MoleContainer;
