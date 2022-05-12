import "../App.css";
import * as Tone from "tone";
import { AMSynth } from "tone";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
const answerObj = { chordAnswer: [], correctAns: "" };

const scoreObj = { score: 0, totalQs: 0 };

function Chords() {
  const [answer, setAnswer] = useState(answerObj);
  const [scoreboard, setScoreboard] = useState(scoreObj);

  const synth = new Tone.PolySynth(AMSynth).toDestination();

  const notes = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "Ab",
    "A",
    "Bb",
    "B",
  ];
  let randomNote = notes[Math.floor(Math.random() * notes.length)];

  const chords = {
    major: Tone.Frequency(`${randomNote}3`).harmonize([0, 4, 7]), // major
    minor: Tone.Frequency(`${randomNote}3`).harmonize([0, 3, 7]), // minor
    augmented: Tone.Frequency(`${randomNote}3`).harmonize([0, 4, 8]), // augmented
    diminished_triad: Tone.Frequency(`${randomNote}3`).harmonize([0, 3, 6]), // diminished
    major_7th: Tone.Frequency(`${randomNote}3`).harmonize([0, 4, 7, 11]), // major 7th
    dominant_7th: Tone.Frequency(`${randomNote}3`).harmonize([0, 4, 7, 10]), // dominant 7th
    minor_7th: Tone.Frequency(`${randomNote}3`).harmonize([0, 3, 7, 10]), // minor 7th
    diminished: Tone.Frequency(`${randomNote}3`).harmonize([0, 3, 6, 9]), // diminished
    half_diminished: Tone.Frequency(`${randomNote}3`).harmonize([0, 3, 6, 10]), // half diminished
  };

  const chordsKeys = Object.keys(chords);

  console.log(Tone.context.state);

  function playSound() {
    const chordQuality =
      chordsKeys[Math.floor(Math.random() * chordsKeys.length)];

    console.log(chordQuality);
    console.log(randomNote);

    let currentChord = chords[chordQuality];

    synth.triggerAttackRelease(currentChord, "2n");
    Tone.start();

    setAnswer({ chord: currentChord, correctAns: chordQuality });
    setScoreboard((prev) => ({ ...scoreboard, totalQs: prev.totalQs + 1 }));
    console.log(Tone.context.state);
  }

  function playSoundAgain() {
    synth.triggerAttackRelease(answer.chord, "2n");
    Tone.start();
  }

  function chordSelection({ target: { value } }) {
    if (value === answer.correctAns) {
      setScoreboard((prev) => ({ ...scoreboard, score: prev.score + 1 }));
    } else alert("INCORRECT");
  }

  return (
    <div className="pageContainer">
      <div className="chordBlurb">
        <Typography className="intervalsDescription">
          <strong>Chords:</strong> In this exercise, you will hear a chord. Your goal is to identify the type of chord that you heard.
        </Typography>
      </div>
      <div className="scoreBoard">
        <h3>
          Score: {scoreboard.score} out of {scoreboard.totalQs}
        </h3>
      </div>

      <div className="playButtons">
        <Button
          variant="outlined"
          className="the-one-button"
          onClick={playSound}
        >
          play next chord
        </Button>
      </div>

      <div className="playAgainButton">
        <Button variant="outlined" className="button" onClick={playSoundAgain}>
          Hear Again
        </Button>
      </div>

      <div className="answerOptions">
        <h2>What is the chord's quality?</h2>
        <div className="chordForm" >
          {chordsKeys.map((chord) => {
            const correctedName = chord.split("_");
            const corrected =
              correctedName[0][0].toUpperCase() +
              correctedName[0].substring(1) +
              " " +
              (correctedName.length === 2
                ? correctedName[1][0].toUpperCase() +
                  correctedName[1].substring(1)
                : "");

            return (
              <div className="chordButtons">
            
              <Button
                
                variant="outlined"
                className="button"
                key={chord}
                value={chord}
                name={chord}
                onClick={chordSelection}
              >
                {corrected}
              </Button>
              </div>
            );
          })}
        </div>
      </div>
      
    </div>
  );
}

export default Chords;
