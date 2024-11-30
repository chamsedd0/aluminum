import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const reqBody = await request.json();
    console.log('Received body:', reqBody); // Log the request body to see what is coming in

    const { name, email, message, quantity, company, mesurements, subscribe } = reqBody;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: 'Missing required fields' }),
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Ensure app password if using Gmail
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`, // Sender address
      to: 'sales@wellste.com',
      subject: `Quote Submission from ${company}`, // Subject line
      cc: 'marketing@wellste.com',
      text: `Dear Team,

      We have received a new quote request from the following contact:
  
      Full Name: ${name}
      Email Address: ${email}
      Company Name: ${company}
      Quantity: ${quantity}
      Critical Measurements: ${mesurements}
      Message: 
      ${message}
  
      Additional Information:
      Subscribe to our newsletter: ${subscribe ? 'Yes' : 'No'}
  
      Thank you for your attention.
  
      Best regards,
      WELLSTE
    `, // Plain text body
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: 'Email sent successfully!' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ message: 'Failed to send email.', error: error.message }),
      { status: 500 }
    );
  }
}
