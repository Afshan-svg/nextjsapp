// pass: "fcmm drfu dxwk atbl",
import { NextResponse } from "next/server";

import nodemailer from "nodemailer";

export async function POST(req: Request) {
  if (req.method === "POST") {

    try {

    const {
      first_name,
      last_name,
      email,
     
      company_name,
      help,
      services,
      info,
    } = await req.json();


      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "jahafbl101@gmail.com",
          pass: "fcmm drfu dxwk atbl",
        },
      });

      const mailOptions = {
        from: email,
        to: "jahafbl101@gmail.com",
        subject: "Contact Form Submission",
        html: `
                    <h1>Contact Form</h1>
                    <p>First Name: ${first_name}</p>
                    <p>Last Name: ${last_name}</p>
                    <p>Work Email: ${email}</p>
                
                    <p>Company Name: ${company_name}</p>
                    <p>Services: ${services}</p>
                    <p>Help: ${help}</p>
                
                    <p>Info: ${info}</p>
                `,
      };

 
      await transporter.sendMail(mailOptions);

      return NextResponse.json("email has been sent");
    } catch (error) {
      return NextResponse.json("email has not been sent");
    }
  } else {
    return NextResponse.json('method not allowed');
  }

}