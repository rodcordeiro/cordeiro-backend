import { Request, Response } from "express";
import { Encrypt } from "../tools/crypto";
import { UserService, iUser } from "../Services/User";

class UserController {
  async index(req: Request, res: Response) {
    const services = new UserService();
    const users = await services
      .list_users()
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((err) => {
        return res.status(400).json(err);
      });
  }
  async create(req: Request, res: Response) {
    const services = new UserService();
    const cript = new Encrypt();
    const { username, email, password: pwd }: iUser = req.body;

    const password: string = await cript
      .cript(pwd)
      .then((response) => response);

    const user = await services
      .create_user({ username, email, password })
      .then((response: any) => {
        return res.status(200).json(response);
      })
      .catch((err) => {
        return res.status(400).json(err);
      });
  }
  async update(req: Request, res: Response) {
    const services = new UserService();
    const id = req.params.id ? req.params.id : req.headers.id;
    const { username, email, password } = req.body;
    const user = await services.update_user({ id, username, email, password });
    return res.status(200).json(user);
  }

  async delete(req: Request, res: Response) {
    const services = new UserService();
    const response = await services
      .delete_user(req.params.id)
      .then((response) => {
        if (response !== 0) return res.status(201).json({ response });
        return res.status(400).json({ error: "Usuário não encontrado" });
      })
      .catch((error) => {
        return res.status(400).json({ error });
      });
  }

  async login(req: Request, res: Response) {
    const services = new UserService();
    const cript = new Encrypt();

    const { username, email, password }: iUser = req.body;

    let user: any;
    if (!username) {
      user = await services
        .login_email(email, password)
        .then((response) => {
          return res.status(200).json(response);
        })
        .catch((error) => {
          return res.status(400).json({ error });
        });
    } else {
      user = await services
        .login_username(username, password)
        .then((response) => {
          return res.status(200).json(response);
        })
        .catch((error) => {
          return res.status(400).json({ error });
        });
    }
  }
}

export { UserController };
