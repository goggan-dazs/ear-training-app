import * as Tone from "tone";




// const synth = new Tone.Synth().toDestination();
      
const synth = new Tone.PolySynth().toDestination();
// set the attributes across all the voices using 'set'
synth.set({ detune: -1200 });
// play a chord

function playSynth() {
  synth.triggerAttackRelease(["G4", "B5", "D5"], 1);
}

function Chords() {
  return (
    <div className="App">
      <div id="wrapper">
        <button id="button" onClick={playSynth}>click me</button>
      </div>
    </div>
  );
}




export default Chords;
