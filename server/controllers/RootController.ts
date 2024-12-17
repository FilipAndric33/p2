import { Request, Response } from 'express';
import { controller } from './decorators/controller';
import { post } from '../routes/routeBinder';
import pool from '../postgres/poolSetup';

@controller('')
export class RootController {
  @post('/register')
  async userRegister(req: Request, res: Response): Promise<void> {
    const { username, password, email } = req.body;
    console.log(req.body);
    console.log(req.headers);

    try {
      if (!username || !password || !email) {
        res.status(400).json({ message: 'all of the fields are required.' });
      }

      const query = `
      INSERT INTO users (username, password, email) 
      VALUES ($1, $2, $3)
      RETURNING id, username, email
      `;

      const values = [username, password, email];
      const result = await pool.query(query, values);

      const newUser = result.rows[0];

      res.status(201).json({
        message: 'user created successfully.',
        user: {
          id: newUser.id,
          username: newUser.username,
          password: newUser.password,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }
}
