import React from "react";
import {
  Button,
  Dialog,
  Divider,
  Grid,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { v4 as uuid } from "uuid";
import { connect } from "react-redux";
import { addSocial, updateSocials } from "src/Redux/user/userActions";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const socials = [
  "instagram",
  "snapchat",
  "twitter",
  "facebook",
  "linkedin",
  "message",
  "spotify",
  "tiktok",
  "whatsapp",
  "link",
];

const AddSocialDialog = ({
  open,
  onClose,
  social,
  addSocial,
  updateSocials,
  edit = false,
}) => {
  const classes = useStyles();
  const [icon, setIcon] = React.useState(social?.icon || "");
  const [url, setUrl] = React.useState(social?.url || "");
  const [title, setTitle] = React.useState(social?.title || "");

  const submit = async (e) => {
    e.preventDefault();
    let obj = {
      icon,
      url,
      title,
    };

    if (edit) {
      // update
      await updateSocials(obj, social.index);
    } else {
      await addSocial(obj);
    }
    onClose();
  };

  return (
    <Dialog
      disableBackdropClick
      open={open}
      onClose={onClose}
      className={classes.root}
      maxWidth="sm"
    >
      <form onSubmit={submit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography color="primary" variant="h5">
              <b>Add Social</b>
            </Typography>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              fullWidth
              label="Title"
            />
          </Grid>
          <Grid item xs={12}>
            <Select
              value={icon}
              onChange={(e) => setIcon(e.target.value)}
              required
              fullWidth
              label="Link Type"
              labelWidth={200}
            >
              {socials.map((item) => (
                <MenuItem key={uuid()} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={url}
              type="url"
              inputProps={{
                pattern: "(http|https)://(.)+[.](.)+",
              }}
              placeholder="eg.  https://facebook.com/me"
              onChange={(e) => setUrl(e.target.value)}
              required
              fullWidth
              label="URL"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography align="right">
              <Button variant="outlined" color="primary" onClick={onClose}>
                Close
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

const actions = {
  addSocial,
  updateSocials,
};

export default connect(null, actions)(AddSocialDialog);
