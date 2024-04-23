// import nodemailer from 'nodemailer';
// import { SubscriptionDocument } from '../models/Subscription';
// const { google } = require('googleapis');


// const OAuth2Client = new google.auth.OAuth2(
//   '311702030000-k86b2dnnk4b68us7lqlpjrg7i9bfpc3h.apps.googleusercontent.com',
//   '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',
//   'https://developers.google.com/oauthplayground'
// );

// OAuth2Client.setCredentials({
//   refresh_token: '1//04NO9Dsrahbz5CgYIARAAGAQSNwF-L9IrV03LXMc5LSGS8RZiJRlUvJdqa89nIyP3oqYlUx6-WB_r_TTrXpHMbIgAsOH_aL9mEsA'
// });



// // export const sendPasswordResetEmail = async (email: string, token: string): Promise<void> => {
// //   // Create a nodemailer transporter
// //   const transporter = nodemailer.createTransport({
// //     host: 'smtp.ethereal.email',
// //     port: 587,
// //     auth: {
// //         user: 'blair.yost70@ethereal.email',
// //         pass: '4246kWYZsEawEsRP1f'
// //     }
// // });

// //   // Send the email Lupe Mraz
// //   await transporter.sendMail({
// //     from: 'shyakaaime@gmail.com',
// //     to: "shyakaaime@gmail.com",
// //     subject: 'Password Reset',
// //     text: `Click this link to reset your password: http://MyBrand.com/reset-password?token=${token}`,
// // }).then(info => {
// //     console.log('Email sent:', info.messageId);
// //     console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
// //   }).catch(error => {
// //     console.error('Error sending email:', error);
// //   })
// //    };




//    export const sendEmailToSubscribers = async (subscriberEmails: string[], blogTitle: string): Promise<void> => {
//     try {
//       const accessToken = await OAuth2Client.getAccessToken();
  
//       const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           type: 'OAuth2',
//           user: 'blogshyaka@gmail.com',
//           clientId: '311702030000-k86b2dnnk4b68us7lqlpjrg7i9bfpc3h.apps.googleusercontent.com',
//           clientSecret: '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',
//           refreshToken: '1//04NO9Dsrahbz5CgYIARAAGAQSNwF-L9IrV03LXMc5LSGS8RZiJRlUvJdqa89nIyP3oqYlUx6-WB_r_TTrXpHMbIgAsOH_aL9mEsA',
//           accessToken: accessToken
//         }
//       });
  
//       await Promise.all(subscriberEmails.map(async (email: string) => {
//         await transporter.sendMail({
//           from: 'blogshyaka@gmail.com',
//           to: email,
//           subject: 'New Blog Created',
//           text: `A new blog "${blogTitle}" has been created on our website. Check it out! https://mybrandwebaime.netlify.app/blogs`,
//         });
//       }));
  
//       console.log('Emails sent to subscribers.');
//     } catch (error) {
//       console.error('Error sending emails:', error);
//     }
//   };