import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { ServiceOption } from './ServiceOption'
import InteractiveList from './List'
import Table from './Table'
import info from './info'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: "90%",
    margin: 'auto',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  card2: {
    maxWidth: "90%",
    margin: 'auto',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  wrapperContent: {
    display: 'flex',
    flexWrap: 'wrap',
    alignIitems: "center",
    justifyContent: "center",
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(50),
      height: theme.spacing(16),
    },
  },
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.openTitle
  },
  media: {
    minHeight: 400
  },
  credit: {
    padding: 10,
    textAlign: 'left',
    backgroundColor: '#ededed',
    borderBottom: '1px solid #d0d0d0',
    '& a': {
      color: '#3f4771'
    }
  }
}))

export default function Home() {
  const classes = useStyles()
  return (
    <>
      <Card className={classes.card}>
        <Typography variant="h6" className={classes.title}>
          Invoicing mail system
        </Typography>

        <Typography variant="body2" component="div" className={classes.credit} color="textSecondary">Functionality test</Typography>
        <CardContent className={classes.wrapperContent}>
          <Typography variant="body1" component="div">
            <ServiceOption path_to="nodemailer" title="Nodemailer system" />
          </Typography>


          <Typography variant="body1" component="div">
            <ServiceOption path_to="sendgrid" title="SendGrid service" />
          </Typography>
          <Typography variant="body1" component="div">
            <ServiceOption path_to="mailgun" title="Mailgun service" />
          </Typography>
        </CardContent>

      </Card>
      <div style={{ margin: "0px auto", width: "90%", border: "1px solid lightgrey", minHeight: "1000px", color: "grey" }}>
        <CardContent className={classes.wrapperContent}>
          <Table />
        </CardContent>

      </div>

    </>
  )
}