const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

/* mailer */
const nodeMailer = require('nodemailer');
const transporter = nodeMailer.createTransport({
   service: 'gmail',
   auth: {
      user: 'gsbirring7@gmail.com',
      pass: 'rbtkkfbjpmihtzko'
   }
});

/* string sanitizer */
const sanitizeHtml = require('sanitize-html');
const sanitizeString = (dirty) => {
   dirty = dirty.trim();
   return sanitizeHtml(dirty, {
      allowedTags: [],
      allowedAttributes: {}
   });
};

/* FUNCTION: send email to my gmail account */
exports.sendEmail = functions.https.onCall((data, context) => {
   /* throw error if arguments missing */
   const errMissingRequiredArgument = (argName) => {
      throw new functions.https.HttpsError('invalid-argument',
      `Failed to run. You are missing a required argument: '${argName}'.`
          )
   };
   if (!data.firstName) errMissingRequiredArgument('firstName');
   if (!data.lastName) errMissingRequiredArgument('lastName');
   if (!data.emailAddress) errMissingRequiredArgument('emailAddress');
   if (!data.message) errMissingRequiredArgument('emailAddress');
   /* santize data */
   const emailData = {
     firstName:  sanitizeString(data.firstName),
     lastName:  sanitizeString(data.lastName),
     emailAddress:  sanitizeString(data.emailAddress),
     message:  sanitizeString(data.message),
   };
   /* throw error if sanitized data is 0 */
   const errInvalidData = (argName) => {
      throw new functions.https.HttpsError('invalid-argument',
          `Failed to run. Invalid argument: '${argName}'.`
          )
   };
   if (!emailData.firstName) errInvalidData('firstName');
   if (!emailData.lastName) errInvalidData('lastName');
   if (!emailData.emailAddress) errInvalidData('emailAddress');
   if (!emailData.message) errInvalidData('message');
   /* form the email message */
   const mailOptions = {
      from: `${emailData.emailAddress}`,   // By default, gmail will automatically replace this with the authenticated sender account :(
      replyTo: `${emailData.emailAddress}`,   // By default, gmail will automatically replace this with the authenticated sender account :(
      to: 'gsbirring7@gmail.com',
      subject: `Hi from ${emailData.firstName} ${emailData.lastName} via 'gsbirring.com'`,
      text:
`
   ${emailData.firstName} ${emailData.lastName} wrote:

         "
            ${emailData.message}
         "
`
   };
   /* send */
   transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
         throw new functions.https.HttpsError('unknown', `Failed to send email message!`, error);
      }
      else {
         return info.response();
      }
   });
});