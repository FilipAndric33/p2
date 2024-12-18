import { UserInterface } from '../interfaces/userInterface';
import { Request, Response } from 'express';
import { controller } from './decorators/controller';
import { post } from '../routes/routeBinder';
import pool from '../postgres/poolSetup';
import { hashPassword, matchPassword } from '../config/bcryptConfig';
import { QueryResult } from 'pg';

@controller('')
export class RootController {
  @post('/register')
  async userRegister(req: Request, res: Response): Promise<void> {
    const { username, password, email } = req.body;
    const hashedPass = await hashPassword(password);

    try {
      if (!username || !password || !email) {
        res.status(400).json({ message: 'all of the fields are required.' });
      }

      const query = `
      INSERT INTO users (username, password, email) 
      VALUES ($1, $2, $3)
      RETURNING id, username, email
      `;

      const values = [username, hashedPass, email];
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

  @post('/login')
  async postLogin(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;

    try {
      const query = `SELECT * FROM "users" WHERE email = $1`;

      const { rows }: QueryResult<UserInterface> = await pool.query(query, [
        email,
      ]);
      if (rows.length === 0) {
        res.status(404).json({ message: 'Incorrect credentials.' });
      }

      const hashedPass = rows[0].password;

      if (hashedPass && (await matchPassword(password, hashedPass))) {
        res.status(200).json({ message: 'logged in successfully.' });
      } else {
        res.status(400).json({ message: 'Incorrect credentials.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error.' });
    }
  }
}
