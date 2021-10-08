import React from "react";
import {
  Button,
    Divider,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import MailOutlineRoundedIcon from "@material-ui/icons/MailOutlineRounded";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import VisibilityOffOutlinedIcon from "@material-ui/icons/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
    "& .MuiSvgIcon-root": {
      color: "rgba(0,0,0,0.25)",
    },
  },
  forgot: {
    fontSize: 16,
    fontWeight: 600,
    cursor: "pointer",
    marginTop: 3,
  },
  dividers:{
      display:"grid",
      gridTemplateColumns:"1fr min-content 1fr",
      alignItems:'center'
  }
}));

const Login = () => {
  const classes = useStyles();
  const [show, setShow] = React.useState(false);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            color="primary"
            fullWidth
            type="email"
            placeholder="Enter email"
            InputProps={{
              startAdornment: <MailOutlineRoundedIcon />,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            placeholder="Password"
            type={!show ? "password" : "text"}
            InputProps={{
              startAdornment: <LockOutlinedIcon />,
              endAdornment: !show ? (
                <VisibilityOffOutlinedIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => setShow(true)}
                />
              ) : (
                <VisibilityOutlinedIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => setShow(false)}
                />
              ),
            }}
          />
          <Typography
            align="right"
            variant="h5"
            color="textSecondary"
            className={classes.forgot}
          >
            Forgot Password?
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth>
            Log in
          </Button>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.dividers}>
            <Divider />
            <Typography style={{margin:"0px 5px",   }}>OR</Typography>
            <Divider />
          </div>
        </Grid>
        <Grid item xs={12}>
            <Button variant="outlined" fullWidth>
                Sign up
            </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
