// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import nodemailer from 'nodemailer';

// Zod schema for input validation
const ContactFormSchema = z.object({
  name: z.string().trim().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().trim().min(10, { message: "Message must be at least 10 characters" })
});

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  // Add these options to resolve any potential issues
  secure: true,
  port: 465
});

export async function POST(request: NextRequest) {
  try {
    // Parse the incoming JSON body
    const body = await request.json();

    // Validate the parsed body
    const validatedData = ContactFormSchema.parse(body);

    // Prepare email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: 'deveradillon@gmail.com', // Recipient address
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Message:</strong></p>
          <p>${validatedData.message}</p>
        </div>
      `,
      // Add reply-to to make it easy to respond
      replyTo: validatedData.email
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Log successful submission
    console.log('Email sent successfully', validatedData);

    // Successful response
    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully' 
    }, { status: 200 });

  } catch (error) {
    // Handle Zod validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json({ 
        success: false, 
        errors: error.errors.map(e => e.message) 
      }, { status: 400 });
    }

    // Log and handle email sending errors
    console.error('Error in form submission:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to submit form' 
    }, { status: 500 });
  }
}