import React from "react";
import Snackbar  from "@material-ui/core/Snackbar";
import MuiAlert from '@material-ui/lab/Alert'

import useStyles from './styles';

import React from 'react';

const CustomisedSnackbar = () => {
    const classes = useStyles();
  return (
  <div className={classes.root}>
      <Snackbar
      anchorOrigin={{vertical:'top',horizontal:"right"}}
      open={true}
      autoHideDuration={3000}
      onClose={handleClose}>
          <MuiAlert onClose={handleClose} severity="success" elevation={6} variant="filled">
              Transaction Successfully Created...
          </MuiAlert>
      </Snackbar>

  </div>
  )
};

export  CustomisedSnackbar;

