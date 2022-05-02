import connection from '../database/connection';
import { Request, Response } from 'express';
import { iWebhook, WebhookServices } from '../Services/Webhook';

import { HabiticaService } from '../Services/Habitica';

class WebhooksController {
  async create(req: Request, res: Response) {
    const Services = new WebhookServices();
    const webhook = await Services.create_webhook(req.body)
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((err) => {
        return res.status(400).json(err);
      });
  }
  async update(req: Request, res: Response) {
    const Services = new WebhookServices();
    const { id } = req.params;
    const { name, origin, webhook } = req.body;
    await Services.update({ id, origin, webhook, name })
      .then((response) => {
        return res.status(204).json();
      })
      .catch((err) => {
        return res.status(400).json(err);
      });
  }

  async delete(req: Request, res: Response) {
    const Services = new WebhookServices();
    const { id }: any = req.params;
    await Services.delete(id)
      .then((response) => {
        return res.status(204).json();
      })
      .catch((err) => {
        return res.status(400).json(err);
      });
  }

  async get_webhooks(req: Request, res: Response) {
    const Services = new WebhookServices();
    const webhook = await Services.list_webhooks()
      .then((response: Array<iWebhook>) => {
        return res
          .status(200)
          .header('TOTAL-X-COUNT', response.length.toString())
          .json(response);
      })
      .catch((err) => {
        return res.status(400).json(err);
      });
  }
  async get_webhook(req: Request, res: Response) {
    const { origin } = req.params;
    const Services = new WebhookServices();
    const webhook = await Services.list_by_origin(origin)
      .then((response: Array<iWebhook>) => {
        return res
          .status(200)
          .header('TOTAL-X-COUNT', response.length.toString())
          .json(response);
      })
      .catch((err) => {
        return res.status(400).json(err);
      });
  }
  async run_webhook(req: Request, res: Response) {
    const { origin, webhook } = req.params;
    if (origin == 'habitica') {
      const service = new HabiticaService();
      await service
        .webhookHandler(req.body)
        .then((response) => {
          return res.status(204).json();
        })
        .catch((err) => {
          return res.status(400).json(err);
        });
    }
    return res.status(200).send();
  }
  async validate_webhook(req: Request, res: Response) {
    const { origin, webhook } = req.params;
    const Services = new WebhookServices();
    const hook = await Services.list_by_origin(origin)
      .then((response: Array<iWebhook>) => {
        if (webhook) {
          return response.filter((item) => item.name === hook);
        }
        return response;
      })
      .catch((err) => {
        return res.status(400).json(err);
      });
    if (hook) return res.status(200).json({ webhooks: hook });
  }
}

export { WebhooksController };
