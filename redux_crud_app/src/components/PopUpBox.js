import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PopUpBox({ open, setOpen, selectedData }) {
  //   const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  useEffect(() => {
    console.log('selecteddata:: ', selectedData);

  }, [selectedData])

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle style={{ fontWeight: '700', fontSize: '35px' }}>{selectedData?.name?.toUpperCase()}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Typography sx={{ mb: 1.5 }} color="text.secondary">

              {selectedData?.age}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">

              {selectedData?.email?.toUpperCase()}
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>

          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}