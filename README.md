Mail invoicing system 

In this project we made an attempt to cover functionality with sending mails, using different approaches.
This is - Simple Mail Transfer Protocol (SMTP) - technology for sending outgoing emails across networks and Transactional email services. The most popular ones include SendGrid, Mailgun. So at this 2 we focused most.
Also we implemented functionality to receive mails via imap protocol. Endpoints represented in test.http file.

### Setup
1. Install the correct node.js version (specified in package.json under engines)
2. npm install.
3. Insert .env file into project directory , to set up all needed environment variables.
4. npm run development - app will run on localhost 5001