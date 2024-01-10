// emailService.js

const nodemailer = require('nodemailer');

// Create a nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // replace with your email
    pass: 'your-password', // replace with your password (for less secure apps, use an app password)
  },
});

// Function to send order confirmation email
function sendOrderConfirmationEmail(customerEmail, orderDetails) {
  const mailOptions = {
    from: 'your-email@gmail.com', // replace with your email
    to: customerEmail,
    subject: 'Order Confirmation',
    html: `
      <h1>Order Confirmation</h1>
      <p>Thank you for your order. Here are the details:</p>
      <ul>
        <li>Order Number: ${orderDetails.orderNumber}</li>
        <li>Product: ${orderDetails.productName}</li>
        <li>Total Price: ${orderDetails.totalPrice}</li>
        <!-- Add more order details as needed -->
      </ul>
      <p>We appreciate your business!</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending order confirmation email:', error);
    } else {
      console.log('Order confirmation email sent:', info.response);
    }
  });
}

module.exports = {
  sendOrderConfirmationEmail,
};
