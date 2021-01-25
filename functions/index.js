const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const nodeMailer = require('nodemailer');
let transporter = nodeMailer.createTransport({
   service: 'gmail',
   auth: {
      user: 'yourgmailaccount@gmail.com',
      pass: 'yourgmailaccpassword'
   }
});

exports.sendEmail = functions.https.onCall((data, context) => {
   const emailData = {};

});