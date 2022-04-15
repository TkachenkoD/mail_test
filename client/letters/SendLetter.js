import React, { useState } from "react";
import { sendLetterNodemailer, sendLetterSendgrid, sendLetterMailgun } from '../mail/mail-api'
import { useHistory } from 'react-router-dom'

import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
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
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';


const useStyles = makeStyles(theme => ({
  root: theme.mixins.gutters({
    padding: theme.spacing(1),
    margin: theme.spacing(5)
  }),
  title: {
    margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`,
    color: theme.palette.openTitle
  },
  wrapperContent: {
    display: 'flex',
    width: "90%",
    flexWrap: 'wrap',
    alignIitems: "center",
    justifyContent: "center",
    margin: "0px auto",
    // '& > *': {
    //   margin: theme.spacing(1),
    //   width: theme.spacing(50),
    //   height: theme.spacing(16),
    // },
  },
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.openTitle
  },
  card: {
    maxWidth: "90%",
    margin: 'auto',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    paddingBottom: theme.spacing(5)
  },
  formControl: {
    // margin: theme.spacing(1),
    marginTop: "35px",
    minWidth: "95%",
  },
}))

const SendLetter = (props) => {
  const classes = useStyles()
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [recipient, setRecipient] = useState("");
  const [sender, setSender] = useState("");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onRecipientChanged = (e) => setRecipient(e.target.value);
  const onSenderChanged = (e) => setSender(e.target.value);

  const history = useHistory()

  const canSend =
    [title, content, recipient].every(Boolean);

  const handleServiceType = name => data => {
    switch (name) {
      case "nodemailer":
        return sendLetterNodemailer(data)
      case "sendgrid":
        return sendLetterSendgrid(data)
      case "mailgun":
        return sendLetterMailgun(data)
    }
  }


  const onSemdClicked = async () => {
    if (canSend) {
      try {

        const letter = {
          message: {
            to: recipient,
            subject: title,
            text: content,
          }
        }

        if (!!sender) {
          letter.message.from = sender
        }

        handleServiceType(props.type_name)(letter)
        // sendLetter(letter)
        setTitle("");
        setContent("");
        setRecipient("");
        setSender("");
      } catch (err) {
        console.error("Failed to send: ", err);
      } finally {
        console.log("finaly");
      }
    }
  };

  const handleChange = (event) => {
    // const name = event.target.name;
    setRecipient(event.target.value);
  };


  const onBackClicked = async () => {
    setTitle("");
    setContent("");
    setRecipient("");
    history.push(`/`)
  };

  return (
    <Card className={classes.card}>
      <section className={classes.wrapperContent}>
        <div style={{ flexGrow: 1 }}>
          <Typography variant="h5" className={classes.title}>
            Compose new letter with {props.title}
          </Typography>
          <form noValidate autoComplete="off">
            <div>
              {props.type_name === "mailgun"
                ? <>
                  <TextField
                    required
                    id="outlined-required1"
                    label="From"
                    variant="outlined"
                    value={sender}
                    onChange={onSenderChanged}
                    style={{ width: '650px' }}
                  />
                  <br />
                  <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="age-native-simple" required>
                      Recivers
                    </InputLabel>
                    <Select
                      native
                      value={recipient}
                      onChange={handleChange}
                      inputProps={{
                        name: 'Recivers',
                        id: 'age-native-simple',
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option value={"yarikpetrovsk@gmail.com"}>yarikpetrovsk@gmail.com</option>
                      <option value={"bachinsky1@gmail.com"}>bachinsky1@gmail.com</option>
                    </Select>
                  </FormControl>
                </>
                : <TextField
                  required
                  id="outlined-required2"
                  label="To"
                  variant="outlined"
                  value={recipient}
                  onChange={onRecipientChanged}
                  style={{ width: '650px' }}
                />

              }
            </div>
            <br />
            <div>
              <TextField
                required
                id="outlined-required3"
                label="Subject"
                variant="outlined"
                name="postTitle"
                value={title}
                onChange={onTitleChanged}
                style={{ width: '650px' }}
              />
            </div>
            <div>
              <br />
              <TextField
                id="outlined-multiline-static"
                label="Message"
                multiline
                rows={10}
                // defaultValue="Default Value"
                variant="outlined"
                value={content}
                onChange={onContentChanged}
                style={{ width: '650px' }}

              />
            </div>
            <br />
            <br />
            <button onClick={onSemdClicked} type="button" disabled={!canSend}>
              Send letter with {props.title}
            </button>
            <button onClick={onBackClicked} type="button">
              Back to options
            </button>
          </form>
        </div>

        <div style={{ flexGrow: 1 }}>
          <div>
            <Typography variant="h6" className={classes.title}>
              Advantages
            </Typography>

            {props.info.pro.map((i, index) => {
              return (
                <Typography
                  variant="body1"
                  component="p"
                  key={index}
                  dangerouslySetInnerHTML={{ __html: i }}
                >
                  {/* - {i} */}
                </Typography>
              )
            })}
          </div>

          <div>
            <Typography variant="h6" className={classes.title}>
              Drawbacks
            </Typography>

            {props.info.cons.map((i, index) => {
              return (
                <Typography key={index} variant="body1" component="p">
                  - {i}
                </Typography>
              )
            })}
          </div>

        </div>
      </section>
    </Card>
  );
};


export default SendLetter