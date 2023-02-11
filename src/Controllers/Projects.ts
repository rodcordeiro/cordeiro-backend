import { Request, Response } from 'express';
import connection from '../database/connection';
import { v4 as uuid } from 'uuid';

interface iProject {
  id?: string;
  title: string;
  description: string;
  tags: Array<string>;
  image: string;
  url?: string;
  repository?: string;
}

class ProjectController {
  async index(req: Request, res: Response) {
    await connection('projects')
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((err) => {
        return res.status(400).json(err);
      });
  }
  async create(req: Request, res: Response) {
    const id = uuid();
    const { title, description, tags, image, url, repository }: iProject =
      req.body;
    await connection('projects')
      .insert({ id, title, description, tags, image, url, repository })
      .then((response) => {
        return res.status(200).json({ id, title, description });
      })
      .catch((err) => {
        return res.status(400).json(err);
      });
  }
  async get_project(req: Request, res: Response) {
    const { id }: any = req.params;
    await connection('projects')
      .select('*')
      .where({ id })
      .first()
      .then((response) => {
        if (response) return res.status(200).json(response);
        return res.status(400).json({ err: 'Projeto não encontrado' });
      })
      .catch((err) => {
        return res.status(400).json(err);
      });
  }
  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { title, description, tags, image, url, repository }: iProject =
      req.body;
    await connection('projects')
      .update({ title, description, tags, image, url, repository })
      .where('id', id)
      .then((response) => {
        return res.status(200).json({ title, description });
      })
      .catch((err) => {
        return res.status(400).json(err);
      });
  }
  async delete(req: Request, res: Response) {
    const { id }: any = req.params;
    await connection('projects')
      .select('*')
      .where({ id })
      .first()
      .delete()
      .then((response) => {
        if (response) return res.status(204).json();
        return res.status(400).json({ err: 'Projeto não encontrado' });
      })
      .catch((err) => {
        return res.status(400).json(err);
      });
  }
}

export { ProjectController };
