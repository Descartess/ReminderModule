import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import moment from 'moment'
import * as reminderActions from '../actions/reminderActions'
import ConfirmArchiveDialog from './dialogs/confirmArchiveDialog'
import ConfirmOrderDialog from './dialogs/confirmOrderDialog'
import ExtendOrderDialog from './dialogs/extendOrderDialog'
import Customer from './customer'

class Reminders extends Component {
  state = {
    openArchiveDialog: false,
    openOrderMadeDialog: false,
    openOrderExtendedDialog: false,
  }

  handleClickOpen = customer  => {
    this.props.reminderActions.selectCustomer(customer)
    this.setState({ openArchiveDialog: true });
  };

  handleOrderMadeModal = customer => {
    this.props.reminderActions.selectCustomer(customer)
    this.setState({ openOrderMadeDialog: true });
  }

  handleOrderExtendedModal = customer => {
    this.props.reminderActions.selectCustomer(customer)
    this.setState({ openOrderExtendedDialog: true });
  }

  handleClose = () => {
    this.setState({ openArchiveDialog: false, openOrderMadeDialog: false, openOrderExtendedDialog: false});
  };

  archive = () => {
    const { selectedCustomer } = this.props.reminders
    this.props.reminderActions.orderArchived(selectedCustomer.id, {archive: !selectedCustomer.archive})
    this.handleClose()
  }

  makeOrder = () => {
    const { selectedCustomer } = this.props.reminders
    this.props.reminderActions.orderExtended(selectedCustomer.id, {
      prev_date: selectedCustomer.next_date,
      next_date: moment(selectedCustomer.next_date).add(selectedCustomer.frequency, 'days')
    })
    this.handleClose()
  }

  extendOrder = () => {
    const { selectedCustomer } = this.props.reminders
    this.props.reminderActions.orderMade(selectedCustomer.id, {
      prev_date: selectedCustomer.next_date,
      next_date: moment(selectedCustomer.next_date).add(selectedCustomer.frequency, 'days')
    })
    this.handleClose()
  }

  componentWillMount = () => {
    this.props.reminderActions.getDailyReminders()
  }

  renderDailyReminders() {
    const { reminder } = this.props.reminders
    const { reminderActions } = this.props

     if (reminder.length < 1) {
       return (<p>No reminders today</p>)
     }
     return reminder.map(customer => (
       <Customer 
       key={customer.id} 
       customer = {customer}
       {...reminderActions}
       openArchive={this.handleClickOpen}
       openOrderDialog={this.handleOrderMadeModal}
       openOrderExtendDialog={this.handleOrderExtendedModal}
       />
     ))
  }

  render() {
    const { selectedCustomer } = this.props.reminders
    const { reminderActions } = this.props
    return (
      <div className="container">
        {this.renderDailyReminders()}
        <ConfirmArchiveDialog
          open={this.state.openArchiveDialog}
          close={this.handleClose}
          confirm={() => this.archive()}
        />
        <ConfirmOrderDialog 
          open={this.state.openOrderMadeDialog}
          close={this.handleClose}
          confirm={() => this.makeOrder()}
          {...selectedCustomer}
          {...reminderActions}
        />
        <ExtendOrderDialog 
          open={this.state.openOrderExtendedDialog}
          close={this.handleClose}
          confirm={() => this.extendOrder()}
          {...selectedCustomer}
          {...reminderActions}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { reminders } = state
  return { reminders }
}

const mapDispatchToProps = dispatch => ({
  reminderActions: bindActionCreators(reminderActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Reminders)
