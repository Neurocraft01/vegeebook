import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  organization: string;
  phone: string;
  inquiryType: string;
  vegetableType: string;
  weight: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  organization,
  phone,
  inquiryType,
  vegetableType,
  weight,
  message,
}) => (
  <div>
    <h1>New Contact Form Submission</h1>
    <p><strong>Name:</strong> {firstName} {lastName}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Phone:</strong> {phone}</p>
    <p><strong>Organization:</strong> {organization}</p>
    <p><strong>Inquiry Type:</strong> {inquiryType}</p>
    <p><strong>Vegetable Type:</strong> {vegetableType}</p>
    <p><strong>Weight Required:</strong> {weight}</p>
    <p><strong>Message:</strong></p>
    <p>{message}</p>
  </div>
);
