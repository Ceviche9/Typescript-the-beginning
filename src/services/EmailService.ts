/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
interface IMailTo {
  name: string;
  email: string;

}

interface IMailMessage {
  subject: string;
  body: string;
  attachment?: string[];

}

interface ImessageDTO {
  to: IMailTo;
  message: IMailMessage;
}

// DTO => DATA TRANSFER OBJECT

class EmailService {
  sendMail({ to, message }: ImessageDTO) {
    console.log(`Email sended to ${to.name}: ${message.subject}`);
  }
}

export { EmailService };
