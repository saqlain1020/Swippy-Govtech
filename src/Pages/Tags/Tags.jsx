import React from "react";
import {
  Button,
  Container,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    //   background: theme.colors.bg,
    minHeight:"calc(100vh - 70px)",
      background: "#E0E5EC",
      position:"absolute",
      top:70,
      width:"100%",

    //   top:-180
  },
  table: {
    // boxShadow: theme.custom.shadow.paper,
    boxShadow: "9px 9px 16px rgba(163, 177, 198, 0.6),-9px -9px 16px rgba(255, 255, 255, 0.6)",
    borderRadius: 20,
    overflow: "hidden",
    position: "relative",
    top: 50,
    background: theme.colors.bg,
  },
  tableHead:{
    //   background: theme.palette.primary.contrastText,
      boxShadow: "9px 9px 16px rgba(163, 177, 198, 0.6)",
  }
}));

const Tags = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Table className={classes.table}>
          <TableHead className={classes.tableHead}>
            <TableCell align="center">
              <Typography color="textSecondary">
                <b>Serial</b>
              </Typography>
            </TableCell>
            <TableCell align="center"><Typography color="textSecondary">
                <b>Type</b>
              </Typography></TableCell>
            <TableCell align="center"><Typography color="textSecondary">
                <b>Actions</b>
              </Typography></TableCell>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">abnsdbasjdbasd</TableCell>
              <TableCell align="center">Round Sticker</TableCell>
              <TableCell align="center">
                <Button><DeleteOutlineIcon  /></Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">abnsdbasjdbasd</TableCell>
              <TableCell align="center">Round Sticker</TableCell>
              <TableCell align="center">
                <Button><DeleteOutlineIcon  /></Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">abnsdbasjdbasd</TableCell>
              <TableCell align="center">Round Sticker</TableCell>
              <TableCell align="center">
                <Button><DeleteOutlineIcon  /></Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Container>
    </div>
  );
};

export default Tags;
