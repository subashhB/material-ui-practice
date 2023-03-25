import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles, TextField } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

export default function Create() {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false)
    setDetailsError(false)

    if(title == ''){
      setTitleError(true)
    }
    if(details == ''){
      setDetailsError(true)
    }
    if (title && details) {
      console.log(title, details);
    }
  };

  return (
    <Container size="sm">
      <Typography
        className={classes.title}
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className={classes.field}
          label="Note Title"
          variant="outlined"
          color="secondary"
          error={titleError}
          fullWidth
          required
        />
        <TextField
          onChange={(e) => {
            setDetails(e.target.value);
          }}
          className={classes.field}
          label="Details"
          variant="outlined"
          multiline
          minRows="3"
          color="secondary"
          error={detailsError}
          fullWidth
          required
        />
        <Button
          className={classes.btn}
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
