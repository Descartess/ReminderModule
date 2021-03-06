import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import moment from 'moment'
import FormControl from '@material-ui/core/FormControl';

const ExtendOrderDialog = (props) => (
  <Dialog
          open={props.open}
          onClose={props.close}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Confirm {props.name} extension </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to extend this order?
            </DialogContentText>
          <TextField
            id="date"
            label="Delivery Date"y
            type="date"
            defaultValue={moment().format('YYYY-MM-DD')}
            onChange={props.orderDateChange}
            required /> <br/>
          <FormControl>
            <InputLabel htmlFor="bottle-type">Bottle Type</InputLabel>
            <Select value={props.bottleType} onChange={props.orderBottleTypeChange} inputProps={{
                name: 'bottle',
                id: 'bottle-type',
              }}>
              <MenuItem value="18L">18 litres</MenuItem>
              <MenuItem value="20L">20 litres</MenuItem>
              <MenuItem value="20L with tap">20 litres with tap</MenuItem>
            </Select> 
          </FormControl> <br />
          <TextField
            id="freq"
            label="Quantity"
            type="number"
            onChange={props.orderQuantityChange}
            required />
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

export default ExtendOrderDialog