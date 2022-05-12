import { MailRepository, SendMailData } from "../mail-repository";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "f6eca05201dba1",
    pass: "a64aeefd16ab21",
  },
});

export class NodemailerRepository implements MailRepository {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Tiago Frioli <tiago.frioli@gmail.com>",
      subject,
      html: body,
    });
  }
}
