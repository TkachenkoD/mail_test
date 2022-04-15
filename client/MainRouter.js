import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LettersList from './letters/LettersList'
import SingleItem from './letters/SingleItem'
import SendLetter from './letters/SendLetter'
import Home from './core/Home'
import pro_cons from './core/pro_cons'
import ServiceOption from './core/ServiceOption'

// import Menu from './core/Menu'

const MainRouter = () => {
  return (<div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/nodemailer" render={() => (
        <React.Fragment>
          <SendLetter
            title="Nodemailer + Google SMTP"
            type_name="nodemailer"
            info={pro_cons.nm}
          />
        </React.Fragment>
      )} />
      <Route exact path="/sendgrid" render={() => (
        <React.Fragment>
          <SendLetter
            title="SendGrid"
            type_name="sendgrid"
            info={pro_cons.sg}
          />
        </React.Fragment>
      )} />
      <Route exact path="/mailgun" render={() => (
        <React.Fragment>
          <SendLetter
            title="MailGun"
            type_name="mailgun"
            info={pro_cons.mg}
          />
        </React.Fragment>
      )} />

      {/* <Menu /> */}
      {/* <Route exact path="/inbox/:id" component={SingleItem} /> */}
      {/* <Route exact path="/send_letter" component={SendLetter} /> */}
      {/* <Route exact path="/list" component={LettersList} /> */}

    </Switch>
  </div>)
}

export default MainRouter