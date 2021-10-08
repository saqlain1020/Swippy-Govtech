import React from "react";
import {
  Button,
  Dialog,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { v4 as uuid } from "uuid";
import { connect } from "react-redux";
import { addSocial, updateSocials } from "src/Redux/user/userActions";
import { userNameToUrl } from "./../../Util/socialFunctions";

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

  const handleSelect = (e) => {
    setIcon(e.target.value);
    if (title === "") setTitle(e.target.value);
    urlFocusOut();
  };

  const urlFocusOut = () => {
    if (!url.includes("http")) {
      let link = userNameToUrl(url, icon);
      setUrl(link);
    }
  };

  return (
    <Dialog
      disableBackdropClick
      open={open}
      onClose={onClose}
      className={classes.root}
      maxWidth="xs"
    >
      <form onSubmit={submit}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Typography color="primary" variant="h5">
              <b>Add Social</b>
            </Typography>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Social Media*</InputLabel>
              <Select
                value={icon}
                onChange={handleSelect}
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
            </FormControl>
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
            <TextField
              value={url}
              type="text"
              inputProps={
                {
                  // pattern: "(http|https)://(.)+[.](.)+",
                }
              }
              placeholder="eg.  https://facebook.com/me"
              onChange={(e) => setUrl(e.target.value)}
              required
              fullWidth
              onBlur={urlFocusOut}
              label="Username"
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
