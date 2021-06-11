import connection from '../../database/connection';
import { Request, Response } from "express";

class esbChapters {
    async index(req: Request, res: Response){
        await connection('esb_chapters')
            .select('*')
            .orderBy('created_at','asc')
            .then(response=>{
                return res.json(response)
            })
            .catch(err=>{
                return res.json(err.message)
            });
    }
    async create(req: Request, res: Response){
        const { title, text } = req.body;
        const author = req.headers.id;
        await connection('esb_chapters')
            .insert({ title, text, author })
            .then(response=>{
                return res.json({action:"create",chapter:{title}});
            })        
    }
    async update(req: Request, res: Response){
        const { id } = req.params;
        const { title, text, author} = req.body;
        const updated_at = new Date().toISOString();
        await connection('esb_chapters')
            .where({id})
            .update({ title, text, author, updated_at})
            .then(response=>{
                return res.status(200).json({action:"update",chapter:{id,title}})
            })
            .catch(err=>{
                return res.status(err.statusCode).json(err.message)
            })
    }
    async delete(req: Request, res: Response){
        const { id } = req.params;
        await connection('esb_chapters')
            .where({id})
            .delete()
            .then(response=>{
                return res.status(204).send();
            })
            .catch(err=>{
                return res.status(err.statusCode).json(err.message)
            })
    }
    async search(req: Request, res: Response){
        const { id } = req.params;
        await connection('esb_chapters')
            .select('*')
            .where({id})
            .first()
            .then(response=>{
                return res.json(response)
            })
            .catch(err=>{
                return res.json(err.message)
            });
    }
    
}

export {
    esbChapters
}