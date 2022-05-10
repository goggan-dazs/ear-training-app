import * as Tone from "tone";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";

// const synth = new Tone.Synth().toDestination();

const synth = new Tone.PolySynth().toDestination();
// set the attributes across all the voices using 'set'
synth.set({ detune: -1200 });
// play a chord
//randomizing function for chords




function Chords() {
  // let [tone, setTone] = useState([]);
  let tone =[ ["D4", "F#4", "A5"], ["D4", "F4", "A5"], ["D4", "F#4", "A#5"], ["D4", "F4", "Ab5"], ["C4", "E4", "G4"], ["C4", "Eb4", "G4"], ["C4", "Eb4", "Gb4"], ["C4", "E4", "G#4"] ]
  
  tone = tone.sort(() => Math.random() - 0.5);
  
  function playSynth() {
    synth.triggerAttackRelease(tone[0], 1);
    console.log(tone)
  } 
 
  return (
    <>
    <div className="playChordButton">
      <Button variant="outlined" onClick={playSynth}>
            Play Chord
      </Button>
    </div>
    <div className="chords-wrapper">
      <Stack className="chord-btns" spacing={2} direction="row">
        
        
        
        <Button className="btn-mobile" variant="outlined">Major</Button>
        <Button className="btn-mobile" variant="outlined">Minor</Button>
        <Button className="btn-mobile" variant="outlined">Diminished</Button>
        <Button className="btn-mobile" variant="outlined">Augmented</Button>
      </Stack>
    </div>
    </>
  );
}

export default Chords;
