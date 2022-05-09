import React from 'react'
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';



const Home = () => {
  return (
    <div className='home-container'>
        <div>
            <h1 className='landing-h1'>Ear Training</h1> <br/>
        </div> 
            
            <Stack spacing={2} direction="row">
                <Button href='/chords' variant="outlined">Chords</Button>
                <Button href='/intervals' variant="outlined">Intervals</Button>
                <Button href='/chordprogressions' variant="outlined">Chord Progressions</Button>
            </Stack>

            
    </div>
  )
}

export default Home