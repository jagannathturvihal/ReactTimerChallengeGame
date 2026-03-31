import React from "react";

export default function Player() {
  const playerName = React.useRef();
  const [enteredPlayerName, setEnteredPlayerName] = React.useState(null);
  // const [submitted, setSubmitted] = React.useState(false);

  // function handlePlayerNameChange(event) {
  //   setSubmitted(false);
  //   setEnteredPlayerName(event.target.value);
  // }

  function handleClcik() {
    // setSubmitted(true);
    setEnteredPlayerName(playerName.current.value)
  }

  return (
    <section id="player">
      {/* <h2>Welcome {submitted ? enteredPlayerName : "unknown entity"}!</h2> */}
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}!</h2>
      <p>
        <input
          ref={playerName} 
          type="text" 
          // onChange={handlePlayerNameChange} 
          // value={enteredPlayerName} 
        />
        <button onClick={handleClcik}>Set Name</button>
      </p>
    </section>
  );
}
