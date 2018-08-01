import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import moment from 'moment'
import Typography from '@material-ui/core/Typography';


const styles = {
  card: {
    minWidth: 275,
    maxWidth: 300,
    margin:6
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

const Customer = props => {
  const { classes } = props
  const { customer } = props
  return (
    <Card className={classes.card} >
      <CardContent>
      <Typography className={classes.title} color="textSecondary">
        {moment(customer.next_date).format("dddd, MMMM Do YYYY")}
      </Typography>
      <Typography variant="headline" component="h2">
         {customer.name}
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
          {customer.type} <br/>
          Previous Order date: {moment(customer.prev_date).format("ddd, MMM Do YY")}
      </Typography>
      <Typography className={classes.pos} component="p" color="textSecondary">
            {customer.quantity} bottles of {customer.bottleType} 
      </Typography>
      <Typography  color="textSecondary">
            Contact: {customer.contact}
      </Typography>
      </CardContent>
      <CardActions>
        <Button 
          size="small"
          onClick={() => props.openOrderDialog(customer)}>
          Order Made
        </Button>
        <Button 
          size="small"
          onClick={() => props.openOrderExtendDialog(customer)}>
          Order Extend
        </Button>
        <Button 
          size="small"
          onClick={() => props.openArchive(customer)}>
          Archive
        </Button>
      </CardActions>
    </Card>
  )
}
  
export default withStyles(styles)(Customer)