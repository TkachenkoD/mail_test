import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import ArrowForward from '@material-ui/icons/ArrowForward'
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from 'react-router-dom'

import { list, getEmailById } from '../mail/mail-api'

const useStyles = makeStyles(theme => ({
  root: theme.mixins.gutters({
    padding: theme.spacing(1),
    margin: theme.spacing(5)
  }),
  title: {
    margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`,
    color: theme.palette.openTitle
  }
}))

export default function LettersList() {
  const classes = useStyles()
  const [inbox, setInbox] = useState([]);

  useEffect(() => {

    list().then((data) => {
      if (data && data.error) {
        console.log(data.error)
      } else {
        console.log("data()", data.mails)
        setInbox(data.mails)
      }
    })

    return function cleanup() {
      console.log('cleaned')
    }
  }, [])


  if (inbox.length == 0) {
    return (
      <section>
        <h2>loading...</h2>
      </section>
    );
  }

  return (
    <Paper className={classes.root} elevation={4}>
      <Typography variant="h6" className={classes.title}>
        All inbox
      </Typography>
      <List dense>
        {inbox.map((item, i) => {
          return <Link to={"/inbox/" + item.id} key={i}>
            <ListItem button>
              <ListItemAvatar>
                <Avatar>
                  <AssignmentIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.envelope.subject} />
              <span style={{ marginRight: "55px" }}>{item.envelope.from[0].address}</span>
              <ListItemSecondaryAction>
                <IconButton>
                  <ArrowForward />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Link>
        })
        }
      </List>
    </Paper>
  )
}