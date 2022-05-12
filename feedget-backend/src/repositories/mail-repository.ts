export interface SendMailData {
  subject: string;
  body: string;
}

export interface MailRepository {
  sendMail: (data: SendMailData) => void;
}
