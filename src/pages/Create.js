import React from 'react'
import Typography from '@mui/material/Typography';
import {Button} from '@mui/material';
import { Container } from '@mui/system';

const Create = () => {
  return (
    <Container>
      <Typography
          variant='h6'
          component='h2'
          color='textSecondary'
      >
          Create a New Note
      </Typography>
      <Button 
        onClick={() =>{console.log('You Clicked Me!')}}
        type='Submit' 
        color='secondary' 
        variant='contained'
      >
        SUBMIT
      </Button>
    </Container>
  )
}

export default Create