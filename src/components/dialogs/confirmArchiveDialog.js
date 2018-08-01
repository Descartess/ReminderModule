import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const ConfirmArchiveDialog = (props) => (
  <Dialog
      open={props.open}
      onClose={props.close}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Confirm"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to archive this customer ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.confirm} color="primary">
          Confirm
        </Button>
        <Button onClick={props.close} color="primary" autoFocus>
          Cancel
        </Button>
      </DialogActions>
  </Dialog>
)
 
export default  ConfirmArchiveDialog
