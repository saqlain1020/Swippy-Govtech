import React from "react";
import {
  Button,
  Dialog,
  Divider,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const ProfileValueDialog = ({ open, onClose }) => {
  const classes = useStyles();
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <Dialog disableBackdropClick open={open} onClose={onClose} className={classes.root}>
      <form onSubmit={submit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" color="primary">
              <b>Profile Details</b>
            </Typography>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Enter Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              required
              rows={5}
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography align="right">
              <Button variant="outlined" color="primary" onClick={onClose}>
                Cancel
              </Button>
              &nbsp;&nbsp;
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </Dialog>
  );
};

export default ProfileValueDialog;
