import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';

const Notes = () => {
  const [notes, setNotes] = useState([])
  useEffect(()=>{
    fetch('http://localhost:8000/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
  },[])
  return (
    <Container>
      <Grid container>
        {notes && notes.map(note=>(
          <Grid item key={note.id} xs='12' md='6' lg='4'><Paper>{note.title}</Paper></Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Notes