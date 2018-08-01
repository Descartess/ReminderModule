import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as archiveActions from '../actions/archiveActions'
import Customer from './customer'

class ArchivedCustomers extends Component {
  componentWillMount = () => {
    this.props.archiveActions.getArchivedCustomer()
  }
  
  renderArchivedCustomers() {
    const { customers } = this.props.archived

     if (customers.length < 1) {
       return (<p>No archived customers</p>)
     }
     return customers.map(archive => (
       <Customer key={archive.id} customer={archive} />
     ))
  }

  render() {
    return (
      <div className="container" >
        {this.renderArchivedCustomers()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { archived } = state
  return { archived }
}

const mapDispatchToProps = dispatch => ({
  archiveActions: bindActionCreators(archiveActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ArchivedCustomers)
