import React, { Component} from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { connect } from 'react-redux'
import Badge from '@material-ui/core/Badge';
import { NavLink } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 960,
    margin: 0 ,
    padding: 20
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`,
  },
});
class Navigation extends Component {
  render() {
    const { classes } = this.props;
    const { reminder } = this.props.reminders
    const no_delivery_reminders = reminder.length
    return (
      <div className={classes.root}>
          <Tabs>
            <Tab label={ <Badge 
                            badgeContent={no_delivery_reminders} 
                            className={classes.padding}
                            color="secondary"> 
                              Delivery Reminders 
                          </Badge>}  
                  component={NavLink} to='/' />
            <Tab label="Add Customer" component={NavLink} to='/add'   />
            <Tab label="Archives" component={NavLink} to='/archives' />
          </Tabs>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { reminders } = state
  return { reminders}
}
export default connect(mapStateToProps)(withStyles(styles)(Navigation))
