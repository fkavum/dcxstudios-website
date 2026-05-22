export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { name, email, subject, message } = body

  if (!name || !email || !subject || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'All fields are required'
    })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid email format'
    })
  }

  const resendApiKey = process.env.RESEND_API_KEY

  if (!resendApiKey) {
    console.warn('RESEND_API_KEY not set, simulating email send')
    await new Promise(resolve => setTimeout(resolve, 500))
    return { success: true, message: 'Email sent successfully (simulated)' }
  }

  // Admin notification email
  const adminEmailResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: 'DCX Studios Contact <noreply@dcxstudios.org>',
      to: ['dcxstudios@gmail.com'],
      reply_to: email,
      subject: `[Contact Form] ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head><meta charset="utf-8"></head>
          <body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Inter',sans-serif;background:#f8f8f5;">
            <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
              <tr><td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:24px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,0.05);">
                  <tr>
                    <td style="background:linear-gradient(135deg,#181811,#23220f);padding:40px;text-align:center;">
                      <div style="width:48px;height:48px;background:#ffdb2d;border-radius:50%;display:inline-block;line-height:48px;margin-bottom:16px;">
                        <span style="font-size:24px;">📧</span>
                      </div>
                      <h1 style="margin:0;color:#fff;font-size:28px;font-weight:900;">New Contact Form</h1>
                      <p style="margin:8px 0 0;color:rgba(255,255,255,0.7);font-size:14px;">DCX Studios Website</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:40px;">
                      <div style="background:#f8f8f5;border-radius:16px;padding:24px;margin-bottom:24px;">
                        <p style="margin:0 0 4px;font-size:12px;font-weight:600;color:#666;text-transform:uppercase;letter-spacing:0.5px;">From</p>
                        <p style="margin:0;font-size:18px;font-weight:700;color:#181811;">${name}</p>
                        <p style="margin:4px 0 0;font-size:14px;"><a href="mailto:${email}" style="color:#ffdb2d;text-decoration:none;">${email}</a></p>
                      </div>
                      <div style="margin-bottom:24px;">
                        <p style="margin:0 0 8px;font-size:12px;font-weight:600;color:#666;text-transform:uppercase;letter-spacing:0.5px;">Subject</p>
                        <p style="margin:0;font-size:16px;font-weight:600;color:#181811;">${subject}</p>
                      </div>
                      <div style="margin-bottom:32px;">
                        <p style="margin:0 0 12px;font-size:12px;font-weight:600;color:#666;text-transform:uppercase;letter-spacing:0.5px;">Message</p>
                        <div style="background:#f8f8f5;border-left:4px solid #ffdb2d;border-radius:8px;padding:20px;line-height:1.6;">
                          <p style="margin:0;color:#181811;font-size:15px;white-space:pre-wrap;">${message}</p>
                        </div>
                      </div>
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr><td align="center">
                          <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" style="display:inline-block;background:#ffdb2d;color:#181811;text-decoration:none;padding:14px 32px;border-radius:999px;font-weight:700;font-size:15px;">Reply to ${name}</a>
                        </td></tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="background:#f8f8f5;padding:32px;text-align:center;border-top:1px solid #e6e6db;">
                      <p style="margin:0;color:#666;font-size:13px;">Sent from <strong style="color:#181811;">DCX Studios</strong> contact form</p>
                      <p style="margin:8px 0 0;color:#999;font-size:12px;">${new Date().toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'short' })}</p>
                    </td>
                  </tr>
                </table>
              </td></tr>
            </table>
          </body>
        </html>
      `
    })
  })

  if (!adminEmailResponse.ok) {
    const error = await adminEmailResponse.json()
    console.error('Failed to send admin email:', error)
    throw createError({ statusCode: 500, statusMessage: 'Failed to send email' })
  }

  // Confirmation email to user
  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'DCX Studios <noreply@dcxstudios.org>',
        to: [email],
        subject: 'We received your message - DCX Studios',
        html: `
          <!DOCTYPE html>
          <html>
            <head><meta charset="utf-8"></head>
            <body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Inter',sans-serif;background:#f8f8f5;">
              <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
                <tr><td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:24px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,0.05);">
                    <tr>
                      <td style="background:linear-gradient(135deg,#181811,#23220f);padding:48px 40px;text-align:center;">
                        <div style="width:64px;height:64px;background:#ffdb2d;border-radius:50%;display:inline-block;line-height:64px;margin-bottom:20px;">
                          <span style="font-size:32px;">✓</span>
                        </div>
                        <h1 style="margin:0;color:#fff;font-size:32px;font-weight:900;">Message Received!</h1>
                        <p style="margin:12px 0 0;color:rgba(255,255,255,0.8);font-size:16px;">We'll get back to you within 24 hours</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:40px;">
                        <p style="margin:0 0 24px;color:#181811;font-size:16px;line-height:1.6;">Hi <strong>${name}</strong>,</p>
                        <p style="margin:0 0 24px;color:#181811;font-size:16px;line-height:1.6;">Thank you for reaching out to DCX Studios! We've received your message and our team will review it shortly.</p>
                        <div style="background:#f8f8f5;border:2px solid #e6e6db;border-radius:16px;padding:24px;margin-bottom:32px;">
                          <p style="margin:0 0 12px;font-size:12px;font-weight:600;color:#666;text-transform:uppercase;letter-spacing:0.5px;">Your Message</p>
                          <div style="background:#fff;border-left:4px solid #ffdb2d;border-radius:8px;padding:16px;">
                            <p style="margin:0;color:#181811;font-size:14px;line-height:1.6;white-space:pre-wrap;">${message}</p>
                          </div>
                        </div>
                        <div style="background:linear-gradient(135deg,#181811,#23220f);border-radius:16px;padding:32px;text-align:center;margin-bottom:32px;">
                          <p style="margin:0 0 20px;color:#fff;font-size:18px;font-weight:700;">While you wait, check out Crossle!</p>
                          <a href="https://apps.apple.com/tr/app/crossle/id6751605835" style="display:inline-block;background:#ffdb2d;color:#181811;text-decoration:none;padding:14px 32px;border-radius:999px;font-weight:700;font-size:15px;margin:0 8px 8px 0;">🍎 App Store</a>
                          <a href="https://play.google.com/store/apps/details?id=com.dcxstudios.dcm" style="display:inline-block;background:#ffdb2d;color:#181811;text-decoration:none;padding:14px 32px;border-radius:999px;font-weight:700;font-size:15px;">🤖 Google Play</a>
                        </div>
                        <p style="margin:0 0 8px;color:#181811;font-size:16px;">Best regards,</p>
                        <p style="margin:0;color:#181811;font-size:16px;font-weight:700;">The DCX Studios Team</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="background:#f8f8f5;padding:32px;text-align:center;border-top:1px solid #e6e6db;">
                        <p style="margin:0 0 8px;color:#181811;font-size:14px;font-weight:700;">DCX Studios</p>
                        <p style="margin:0 0 16px;color:#666;font-size:13px;">Crafting games that matter</p>
                        <p style="margin:16px 0 0;color:#999;font-size:12px;line-height:1.5;">This is an automated confirmation email.<br>Please do not reply to this message.</p>
                      </td>
                    </tr>
                  </table>
                </td></tr>
              </table>
            </body>
          </html>
        `
      })
    })
  } catch (err) {
    console.error('Failed to send confirmation email:', err)
  }

  return { success: true, message: 'Email sent successfully' }
})
