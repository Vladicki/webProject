// emailTemplates.js
export const getRegistrationEmail = (username, dashboardLink) => {
    return `
      <!DOCTYPE html>
      <html>
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Thank You for Registering!</title>
          <style>
              body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
              .container { max-width: 600px; background: #ffffff; margin: 30px auto; padding: 20px; border-radius: 10px; 
                           box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); text-align: center; }
              .header { background: #007bff; color: white; padding: 20px; border-radius: 10px 10px 0 0; }
              .header h1 { margin: 0; font-size: 24px; }
              .content { padding: 20px; color: #333; }
              .content p { font-size: 16px; line-height: 1.6; }
              .button { display: inline-block; padding: 12px 20px; margin-top: 15px; background: #007bff; color: white; 
                        text-decoration: none; font-size: 16px; border-radius: 5px; }
              .footer { margin-top: 20px; padding: 15px; font-size: 14px; color: #777; background: #f4f4f4; 
                        border-radius: 0 0 10px 10px; }
              .footer a { color: #007bff; text-decoration: none; }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="header">
                  <h1>Welcome to Our Platform!</h1>
              </div>
              <div class="content">
                  <p>Hi <b>${username}</b>,</p>
                  <p>Thank you for registering on our platform. We’re excited to have you on board!</p>
                  <p>Get started by exploring all the amazing features we have to offer.</p>
                  <a href="${dashboardLink}" class="button">Go to Dashboard</a>
              </div>
              <div class="footer">
                  <p>If you have any questions, feel free to <a href="mailto:support@example.com">contact us</a>.</p>
                  <p>Best Regards, <br><b>The Team</b></p>
              </div>
          </div>
      </body>
      </html>
    `;
  };
  