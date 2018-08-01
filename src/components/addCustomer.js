import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import moment from 'moment'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl';
import * as addCustomerActions from '../actions/customerActions'
import Button from '@material-ui/core/Button'

class AddCustomer extends Component {
  renderModal() {

  }
  onSubmitCustomer() {
    const {
      name,
      type,
      contact,
      frequency,
      bottleType,
      quantity
    } = this.props.customer

    const { addCustomer } = this.props.addCustomerActions

    if (name === "" || contact === "" || quantity === "") {
      console.log("Invalid data")
    } else {
      const customerData = {
        name,
        type,
        contact,
        frequency,
        bottleType,
        archive: false,
        quantity,
        prev_date: moment().format("YYYY-MM-DD"),
        next_date: moment().add(frequency, 'd')
      }
      
      addCustomer(customerData)
    }

  }
  render() {
    const { nameChange,
      frequencyChange,
      contactChange,
      bottleTypeChange,
      companyTypeChange,
      quantityChange } = this.props.addCustomerActions

    const { type,frequency, bottleType } = this.props.customer

    return (
      <div>
        <form>
          <TextField 
          id="name"
          label="Name" 
          onChange={nameChange} required /> <br />
          <FormControl>
            <InputLabel htmlFor="buyer-type">Buyer Type</InputLabel>
            <Select value={type} onChange={companyTypeChange} inputProps={{
                name: 'Buyer',
                id: 'buyer-type',
              }}>
              <MenuItem value="Household">Household</MenuItem>
              <MenuItem value="Reseller">Reseller</MenuItem>
              <MenuItem value="Business">Business</MenuItem>
            </Select>
          </FormControl><br />
          <FormControl>
            <InputLabel htmlFor="bottle-type">Bottle Type</InputLabel>
            <Select value={bottleType} onChange={bottleTypeChange} inputProps={{
                name: 'bottle',
                id: 'bottle-type',
              }}>
              <MenuItem value="18L">18 litres</MenuItem>
              <MenuItem value="20L">20 litres</MenuItem>
              <MenuItem value="20L with tap">20 litres with tap</MenuItem>
            </Select> 
          </FormControl><br />
          <TextField
            id="freq"
            label="Frequency" 
            type="number"
            onChange={frequencyChange}
            value={frequency}
            required /> <br />
          <TextField
            id="freq"
            label="Quantity"
            type="number"
            onChange={quantityChange}
            required /> <br />
          <TextField
            label="Contact"
            type="tel" 
            onChange={contactChange}
            required />
            <p style={{margin: 10}}></p>
          <Button  variant="contained" onClick={() => this.onSubmitCustomer()}>
            Submit
          </Button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { customer } = state
  return { customer }
}

const mapDispatchToProps = dispatch => ({
  addCustomerActions: bindActionCreators(addCustomerActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AddCustomer)
