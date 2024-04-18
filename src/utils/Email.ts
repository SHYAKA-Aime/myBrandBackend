import nodemailer from 'nodemailer';

export const sendPasswordResetEmail = async (email: string, token: string): Promise<void> => {
  // Create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'blair.yost70@ethereal.email',
        pass: '4246kWYZsEawEsRP1f'
    }
});

  // Send the email Lupe Mraz
  await transporter.sendMail({
    from: 'shyakaaime@gmail.com',
    to: "shyakaaime@gmail.com",
    subject: 'Password Reset',
    text: `Click this link to reset your password: http://MyBrand.com/reset-password?token=${token}`,
}).then(info => {
    console.log('Email sent:', info.messageId);
    console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
  }).catch(error => {
    console.error('Error sending email:', error);
  })
   };

