import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

const generate = (data) => {
  return data.map((i) => (
    <ListItem>
      <ListItemText
        primary={i}
      />
    </ListItem>
  ))
}

const InteractiveList = (props) => {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  // const [secondary, setSecondary] = React.useState(false);

  return (
    <div className={classes.root}>

      {/* <Grid container spacing={2}> */}
      {/* <Grid item xs={12} md={6}> */}
      <Typography variant="h6" className={classes.title}>
        {props.tname}
      </Typography>
      <div className={classes.demo}>
        <List dense={dense}>
          {generate(props.info)}
        </List>
      </div>
      {/* </Grid> */}


      {/* </Grid> */}
    </div>
  );
}
export default InteractiveList