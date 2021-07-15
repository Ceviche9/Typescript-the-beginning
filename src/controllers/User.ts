/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Request, Response } from 'express';
import { EmailService } from '../services/EmailService';

const users = [
  { name: 'Tunde', email: 'ayo@hotmail.com' },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailservice = new EmailService();

    emailservice.sendMail({
      to: {
        name: 'Tundê Cavalcante',
        email: 'ayotunde@email.com',
      },
      message: {
        subject: 'Welcome to this test',
        body: 'Welcome',
      },
    });
    return res.send();
  },
};
