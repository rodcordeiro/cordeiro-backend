import connection from "../../database/connection";
import { v4 as uuid } from "uuid";
import { Request, Response } from "express";
import { cript } from '../../tools/crypto';
import { OngServices, iOng } from '../../Services/BTH/Ongs'
import { IncidentServices, iIncident} from "../../Services/BTH/Incidents"

class bthIncidentController{
    async profile_incidents(req: Request,res: Response){
        const Incidents = new IncidentServices();

        const { ong_id } : any = req.headers

        const incidents = await Incidents.list_profile_incidents(ong_id)
            .then(response=>{
                return res.status(200).json(response)
            })
            .catch(err=>{
                return res.status(400).json(err)
            })
    }
    async create_incident(req: Request,res: Response){
        const Incidents = new IncidentServices();
        const { ong_id } : any = req.headers

        const { title, description, value } = req.body;
        
        const incident = await Incidents.create_new_incident({ title, description, value, ong_id })
            .then(response=>{
                return res.status(201).json(response)
            })
            .catch(err=>{
                return res.status(400).json(err)
            })   
    }
    async delete_incident(req: Request,res: Response){
        const Incidents = new IncidentServices();
        const { ong_id } : any = req.headers

        await Incidents.delete_incident(req.params.id,ong_id)
            .then(response=>{
                return res.status(204).send()
            })
            .catch(err=>{
                return res.status(400).json(err)
            })

    }
}
export {
    bthIncidentController
};