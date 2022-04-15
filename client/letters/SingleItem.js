import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles'
import { list, getEmailById } from '../mail/mail-api'
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
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  root: theme.mixins.gutters({
    padding: theme.spacing(1),
    margin: theme.spacing(5)
  }),
  title: {
    margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`,
    marginLeft: '20px',
    color: 'black'
    // color: theme.palette.openTitle
  }
}))

const SingleItem = ({ match }) => {
  console.log("matxj", match)
  const { id } = match.params;
  const [item, setItem] = useState(null);
  const classes = useStyles()
  const history = useHistory();

  useEffect(() => {
    getEmailById(id).then((data) => {
      console.log("in effect ", id)
      if (data && data.error) {
        console.log(data.error)
      } else {
        console.log("getEmailById()", data)
        setItem(data.mails)
      }
    })

    return function cleanup() {
      console.log('cleaned')
    }
  }, [])

  if (!item) {
    return (
      <section>
        <h2>loading...</h2>
      </section>
    );
  }

  const setLetterDate = () => {
    let d = new Date(item.date);
    let date = d.getDate() + "." + d.getMonth() + "." + d.getFullYear();
    return `Date: ${date}`;
  }

  return (

    <section>
      <Typography variant="h4" className={classes.title}>
        {item.subject}
        <Chip label="INBOX" style={{ marginLeft: '18px' }} />
        <span style={{ marginLeft: '25px', fontSize: "16px" }}>{setLetterDate()}</span>
      </Typography>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AssignmentIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={item.from.text} />
      </ListItem>
      <Paper className={classes.root} elevation={4}>
        <article className="rec">
          <p>{item.text}</p>
          <p
            dangerouslySetInnerHTML={{ __html: item.html }}
          />
        </article>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {/* <TemplateBtn
          actionName={t("duplicate")}
          onActionClicked={handleEditClick}
          icon={pencilIcon}
        />
        <ViewPdfBtn letterId={recordId} /> */}
        </div>
      </Paper>
    </section>

  );
};

export default SingleItem