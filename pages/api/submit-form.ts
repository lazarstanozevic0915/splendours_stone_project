import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import connectToDatabase from "@/lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const {
      name,
      email,
      phone,
      date,
      stoneService,
      stoneProduct,
      stonePhase,
      specialRequests,
      role,
    } = req.body;

    console.log("req.body-1----->", req.body);

    // if (!name || !email || !phone) {
    //   return res.status(400).json({ error: "Missing required fields" });
    // }

    // Save to MongoDB
    const db = await connectToDatabase();
    const collection = db.collection("formSubmissions");
    await collection.insertOne({
      name,
      email,
      phone,
      date,
      stoneService,
      stoneProduct,
      stonePhase,
      specialRequests,
      role,
      createdAt: new Date(),
    });

    // Send Email
    // const transporter = nodemailer.createTransport({
    //     host: process.env.SMTP_HOST,
    //     port: parseInt(process.env.SMTP_PORT!, 10),
    //     secure: true,
    //     auth: {
    //         user: process.env.SMTP_USER,
    //         pass: process.env.SMTP_PASS,
    //     },
    // });

    console.log(req.body);

    if (req.body.role == "4") {
      console.log("req.body-2---->", req.body);

      const transporter = nodemailer.createTransport({
        host: "smtp.hostinger.com",
        port: 465,
        secure: true,
        auth: {
          user: "mailer@splendourinstone.com.au",
          pass: "K~ZxuQYw]8p",
        },
      });

      const mailOptions = {
        from: "mailer@splendourinstone.com.au",
        to: "sherehiyandriy@gmail.com",
        replyTo: email,
        subject: "New Booking Submission",
        text: `
                  Name: ${name}
                  Email: ${email}
                  Phone: ${phone}
                  Date: ${date}
                  Stone Service: ${stoneService}
                  Stone Product: ${stoneProduct}
                  Stone Phase: ${stonePhase}
                  Special Requests: ${specialRequests}
              `,
      };
      console.log("mailoptions:-->", mailOptions);

      await transporter.sendMail(mailOptions);
    }

    res.status(200).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error handling form submission:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the request." });
  }
}
