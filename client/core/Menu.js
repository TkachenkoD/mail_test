import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
// import HomeIcon from '@material-ui/icons/Home'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Button from '@material-ui/core/Button'

import { Link, withRouter } from 'react-router-dom'

const isActive = (history, path) => {
  if (history.location.pathname == path)
    return { color: '#ff4081' }
  else
    return { color: '#ffffff' }
}
const Menu = withRouter(({ history }) => (
  <AppBar position="static">
    <Toolbar >
      <Typography variant="h6" color="inherit">
        imapFlow exploring
      </Typography>
      <Link to="/send_letter">
        <IconButton aria-label="Home" style={isActive(history, "/send_letter")}>
          {/* COMPOSE NEW */}
          <AddCircleOutlineIcon />
        </IconButton>
      </Link>
      <Link to="/">
        <Button style={isActive(history, "/")}>INBOX MAIL</Button>
      </Link>
      <Link to="/">
        <Button style={isActive(history, "/sent")}>SENT</Button>
      </Link>
    </Toolbar>
  </AppBar>
))

export default Menu