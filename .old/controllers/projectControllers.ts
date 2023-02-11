import connection from '../database/connection';
import { Request, Response } from 'express';

export default class ProjectsController {
  async index(req: Request, res: Response) {
    await connection('projects')
      .select('*')
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((err) => {
        return res.status(400).json(err);
      });
  }
  async addProject(req: Request, res: Response) {
    const { title, description, url, repository, image, tags } = req.body;
    await connection('projects')
      .insert({
        title,
        description,
        url,
        repository,
        image,
        tags,
      })
      .then((response) => {
        return res.status(201).json();
      })
      .catch((err) => {
        return res.status(400).json(err);
      });
  }
  async getProject(req: Request, res: Response) {
    const { id } = req.params;
    await connection('projects')
      .select('*')
      .where('id', id)
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((err) => {
        return res.status(400).json(err);
      });
  }
  async delProject(req: Request, res: Response) {
    const { id } = req.params;
    await connection('projects')
      .where('id', id)
      .delete()
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((err) => {
        return res.status(400).json(err);
      });
  }
}
