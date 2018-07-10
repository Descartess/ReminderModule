import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import moment from 'moment'
import * as addCustomerActions from '../actions/customerActions'

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

    if (name === "" || contact === "") {
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
        prev_date: moment(),
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
    return (
      <div>
        <form>
          Name: <br />
          <input type="text" onChange={nameChange} required /> <br />
          Type: <br />
          <select name="" id="" onChange={companyTypeChange}>
            <option value="Individual">Individual</option>
            <option value="Company">Company</option>
          </select><br />
          Bottle Type: <br />
          <select name="" id="" onChange={bottleTypeChange}>
            <option value="18L">18 litres</option>
            <option value="20L">20 litres</option>
            <option value="20L with tap">20 litres with tap</option>
          </select> <br />
          Frequency <br />
          <input type="number" onChange={frequencyChange} required /> <br />
          Quantity <br />
          <input type="number" onChange={quantityChange} required /> <br />
          Contact <br />
          <input type="tel" onChange={contactChange} required /> <br />
          <button onClick={() => this.onSubmitCustomer()}>
            Submit
          </button>
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
