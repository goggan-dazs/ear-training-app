import * as Tone from "tone";

import Button from "@mui/material/Button";
import { Stack } from "@mui/material";

function Intervals() {
    const synth = new Tone.Synth().toDestination();
    // use an array of objects as long as the object has a "time" attribute
    const part = new Tone.Part(((time, value) => {
        // the value is an object which contains both the note and the velocity
        synth.triggerAttackRelease(value.note, "8n", time, value.velocity);
    }), 
    
    [
        { 
            time: 0, 
            note: "G5", 
            velocity: 0.9 
        },
    { 
        time: "0:2", 
        note: "D6", 
        velocity: 0.5 
    }
],
[{ 
    time: 0, 
    note: "C3", 
    velocity: 0.9 
},
    { 
        time: "0:2", 
        note: "C4", 
        velocity: 0.5 
    }
], ).start(0);
   function playInterval(){
    Tone.Transport.start();
    console.log("im working")
   
   }
        
    
    

    return (
        <>
        <div className="playChordButton">
          <Button onClick={playInterval} variant="outlined" >
                Play Inverval
          </Button>
        </div>
        <div className="chords-wrapper">
          <Stack className="chord-btns" spacing={2} direction="row">
            
            
            
            <Button className="btn-mobile" variant="outlined">m2</Button>
            <Button className="btn-mobile" variant="outlined">M2</Button>
            <Button className="btn-mobile" variant="outlined">m3</Button>
            <Button className="btn-mobile" variant="outlined">M3</Button>
            <Button className="btn-mobile" variant="outlined">P4</Button>
            <Button className="btn-mobile" variant="outlined">P5</Button>
          </Stack>
        </div>
        </>
      );

}

export default Intervals;
