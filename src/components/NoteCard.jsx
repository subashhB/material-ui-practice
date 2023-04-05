import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import { DeleteOutlined } from '@material-ui/icons'
import { IconButton, makeStyles, Typography } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import { yellow, pink, blue, green } from '@material-ui/core/colors'

const useStyles = makeStyles({
  avatar:{
    backgroundColor: (note)=>{
      if(note.category == 'work'){
        return yellow[700]
      }
      if(note.category == 'reminders'){
        return pink[500]
      }
      if(note.category == 'todos'){
        return green[500]
      }
      return blue[500]
    }
  }
})

const NoteCard = ({ note, handleDelete }) => {
  const classes = useStyles(note)
  return (
    <Card elevation={1}>
        <CardHeader
            avatar={
              <Avatar className={classes.avatar}>{note.category[0].toUpperCase()}</Avatar>
            }
            action={
                <IconButton onClick={()=>{handleDelete(note.id)}}>
                    <DeleteOutlined/>
                </IconButton>
            }
            title={note.title}
            subheader={note.category}
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary'>{note.details}</Typography>
        </CardContent>
    </Card>
  )
}

export default NoteCard;
