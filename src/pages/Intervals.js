import * as Tone from "tone";
import { useState } from "react";
import Button from "@mui/material/Button";

const answerObj = { chordAnswer: [], correctAns: "" };

const scoreObj = { score: 0, totalQs: 0 };

function Intervals() {
  const [answer, setAnswer] = useState(answerObj);
  const [scoreboard, setScoreboard] = useState(scoreObj);

  const synth = new Tone.Synth().toDestination();
  // use an array of objects as long as the object has a "time" attribute

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

  const intervals = {
    minor2: Tone.Frequency(`${randomNote}3`).transpose(1),
    Major2: Tone.Frequency(`${randomNote}3`).transpose(2),
    minor3: Tone.Frequency(`${randomNote}3`).transpose(3),
    Major3: Tone.Frequency(`${randomNote}3`).transpose(4),
    P4: Tone.Frequency(`${randomNote}3`).transpose(5),
    P5: Tone.Frequency(`${randomNote}3`).transpose(6),
    minor6: Tone.Frequency(`${randomNote}3`).transpose(7),
    Major6: Tone.Frequency(`${randomNote}3`).transpose(8),
    minor7: Tone.Frequency(`${randomNote}3`).transpose(9),
    Major7: Tone.Frequency(`${randomNote}3`).transpose(10),
    Unison: Tone.Frequency(`${randomNote}3`).transpose(11),
  };

  const intervalKeys = Object.keys(intervals);

  console.log(Tone.context.state);

  function playSound() {
    const intervalQuality =
      intervalKeys[Math.floor(Math.random() * intervalKeys.length)];

    console.log(intervalQuality);
    console.log(randomNote);

    let currentInterval = intervals[intervalQuality];

    synth.triggerAttackRelease(currentInterval, "2n");
    Tone.start();

    setAnswer({ interval: currentInterval, correctAns: intervalQuality });
    setScoreboard((prev) => ({ ...scoreboard, totalQs: prev.totalQs + 1 }));
    console.log(Tone.context.state);
  }

  // const part = new Tone
  //    function playInterval(){
  //     Tone.Transport.start();
  //     console.log("im working")
  //     console.log(part);

  //    }
  function playTonic() {
    synth.triggerAttackRelease(`${randomNote}3`, "8n");
  }

  function playSoundAgain() {
    synth.triggerAttackRelease(answer.interval, "2n");
    Tone.start();
  }

  function intervalSelection({ target: { value } }) {
    if (value === answer.correctAns) {
      setScoreboard((prev) => ({ ...scoreboard, score: prev.score + 1 }));
    } else alert("INCORRECT");
  }

  return (
    <div className="pageContainer">
      <div className="scoreBoard">
        <h3>
          Score: {scoreboard.score} out of {scoreboard.totalQs}
        </h3>
      </div>

      <div className="playTonic">
        <Button
          variant="outlined"
          className="the-one-button"
          onClick={playTonic}
        >
          Tonic
        </Button>
      </div>

      <div className="playButtons">
        <Button
          variant="outlined"
          className="the-one-button"
          onClick={playSound}
        >
          Ascending Interval
        </Button>
      </div>

      <div className="answerOptions">
        <h2>What interval just played??</h2>
        <div className="form">
          {intervalKeys.map((interval) => {
            const correctedName = interval.split("_");
            const corrected =
              correctedName[0][0].toUpperCase() +
              correctedName[0].substring(1) +
              " " +
              (correctedName.length === 2
                ? correctedName[1][0].toUpperCase() +
                  correctedName[1].substring(1)
                : "");

            return (
              <Button
                variant="outlined"
                className="button"
                key={interval}
                value={interval}
                name={interval}
                onClick={intervalSelection}
              >
                {corrected}
              </Button>
            );
          })}
        </div>
      </div>

      <div className="playAgainButton">
        <Button variant="outlined" className="button" onClick={playSoundAgain}>
          One more time pls
        </Button>
      </div>
    </div>
  );
}
//

export default Intervals;

