import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await request.json();
    const { email } = body;

    // Validate required field
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send confirmation email to the subscriber
    const { data: subscriberData, error: subscriberError } = await resend.emails.send({
      from: 'IMS Saigon <onboarding@resend.dev>',
      to: [email],
      subject: 'Welcome to IMS Saigon Newsletter',
      html: `
                <!DOCTYPE html>
                <html>
                  <head>
                    <meta charset="utf-8">
                    <style>
                      body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #1A1A2E; margin: 0; padding: 0; }
                      .container { max-width: 600px; margin: 0 auto; }
                      .header { background: linear-gradient(135deg, #0A2463 0%, #3E92CC 100%); color: white; padding: 40px 30px; text-align: center; }
                      .content { background: #ffffff; padding: 40px 30px; }
                      .footer { background: #f9fafb; padding: 30px; text-align: center; color: #6B7280; font-size: 14px; }
                      .button { display: inline-block; background: #3E92CC; color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; margin: 20px 0; }
                      h1 { margin: 0; font-size: 28px; }
                      p { margin: 15px 0; }
                    </style>
                  </head>
                  <body>
                    <div class="container">
                      <div class="header">
                        <h1>Welcome to Our Newsletter! 🎉</h1>
                      </div>
                      <div class="content">
                         <p>Thank you for subscribing to the IMS Saigon newsletter!</p>
                        <p>You'll now receive our latest insights, industry news, and updates on digital transformation, software engineering, and innovative technology solutions.</p>
                        <p>We're excited to have you as part of our community.</p>
                        <p style="margin-top: 30px;">
                           <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}" class="button">Visit Our Website</a>
                        </p>
                      </div>
                      <div class="footer">
                         <p>© 2026 IMS Saigon. All rights reserved.</p>
                        <p style="font-size: 12px; margin-top: 10px;">
                          You're receiving this email because you subscribed to our newsletter.
                        </p>
                      </div>
                    </div>
                  </body>
                </html>
            `,
    });

    if (subscriberError) {
      console.error('Resend error (subscriber):', subscriberError);
    }

    // Send notification to admin
    const { data: adminData, error: adminError } = await resend.emails.send({
      from: 'IMS Saigon Newsletter <onboarding@resend.dev>',
      to: ['support@ims-saigon.com'],
      subject: `New Newsletter Subscription`,
      html: `
                <!DOCTYPE html>
                <html>
                  <head>
                    <meta charset="utf-8">
                    <style>
                      body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                      .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                      .header { background: linear-gradient(135deg, #0A2463 0%, #3E92CC 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; }
                      .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
                      .field { margin-bottom: 20px; }
                      .label { font-weight: bold; color: #0A2463; margin-bottom: 5px; }
                      .value { background: white; padding: 10px; border-radius: 4px; border-left: 3px solid #3E92CC; }
                    </style>
                  </head>
                  <body>
                    <div class="container">
                      <div class="header">
                        <h1 style="margin: 0;">New Newsletter Subscription</h1>
                      </div>
                      <div class="content">
                        <div class="field">
                          <div class="label">Email:</div>
                          <div class="value"><a href="mailto:${email}">${email}</a></div>
                        </div>
                        <div class="field">
                          <div class="label">Subscribed at:</div>
                          <div class="value">${new Date().toLocaleString()}</div>
                        </div>
                      </div>
                    </div>
                  </body>
                </html>
            `,
    });

    if (adminError) {
      console.error('Resend error (admin):', adminError);
    }

    // Return success even if one email fails
    return NextResponse.json(
      {
        message: 'Successfully subscribed to newsletter',
        id: subscriberData?.id || adminData?.id
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing newsletter subscription:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
