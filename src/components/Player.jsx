import React from "react";

export default function Player() {
  const playerName = React.useRef();
  const [enteredPlayerName, setEnteredPlayerName] = React.useState(null);

  function handleClcik() {
    setEnteredPlayerName(playerName.current.value)
  }

  return (
    <section id="player">
       <h2>Welcome {enteredPlayerName ?? "unknown entity"}!</h2>
      <p>
        <input
          ref={playerName} 
          type="text" 
        />
        <button onClick={handleClcik}>Set Name</button>
      </p>
    </section>
  );
}
