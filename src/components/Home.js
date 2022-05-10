import React from 'react'
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';



const Home = () => {
  return (
    
      <>
      <h1 className='home-h1'>Ear Training</h1>
    <div className='home-container'>
      
           
            <Stack spacing={2} direction="column">
                <Button href='/chords' variant="outlined">Chords</Button>
                <Button href='/intervals' variant="outlined">Intervals</Button>
                <Button href='/chordprogressions' variant="outlined">Chord Progressions</Button>
            </Stack>
            
    </div>
    </>
  )
}

export default Home