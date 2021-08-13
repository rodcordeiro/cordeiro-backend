import {Request, Response} from "express";
import { GHAuth, GHapi } from "../tools/api";

const redirect_uri = "http://rodcordeiro.herokuapp.com/gh/token"

class GithubAuth {
    async get_token(req : Request, res: Response){
        const origin = decodeURIComponent(String(req.query.origin));
        const state = Buffer.from(origin).toString('base64');
        const url =  `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUBAPP_CLIENT_ID}&redirect_uri=${encodeURIComponent(redirect_uri)}&scope=repo%20user%20delete_repo&state=${state}&allow_signup=false`;
        
        res.redirect(url)
    }
    async validateToken(req : Request,res: Response){
        const code : any = req.query.code;
        const state : any  = req.query.state;
        const origin : any = Buffer.from(state,"base64").toString('ascii');

        await GHAuth.post("/access_token",{
            "client_id": process.env.GITHUBAPP_CLIENT_ID,
            "client_secret": process.env.GITHUBAPP_CLIENT_SECRET,
            "code": code,
            "state":state,
            "redirect_uri":redirect_uri
          })
          .then((response: any)=>{
            const token = response.data.split("&")[0].split("=")[1]  
            res.redirect(`${origin}?token=${token}`)
            
          })
          .catch((err: any)=>{
            console.log({err})
            return res.status(400).json(err)
        })
    } 
}

class GithubController{
    async getRepos(req : Request, res: Response){
        const {token} = req.body
        await GHapi.get(`/user/repos`,{
            headers:{
                "authorization": token
              }
        })
        .then((response) => {
            return res.status(200).json(response.data)            
        })
        .catch(err=>{
            return res.status(400).json(err)
        })

    }
}
export {
    GithubAuth,
    GithubController
}