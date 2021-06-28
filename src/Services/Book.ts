import connection from "../database/connection";
import { v4 as uuid } from "uuid";

interface iBook{
    id: string;
    title: string;
    author?: string;
    serie?: string;
    serieOrder?: string;
    created_at: Date;
    updated_at: Date;
}

class BookService{
    async list_book(){
        return new Promise (async (resolve,reject)=>{
            await connection('books')
                .select('*')
                .orderBy('serie','asc')
                .orderBy('serieOrder','asc')
                .then((response: Array<iBook>)=>{
                    resolve(response)                    
                })
                .catch(err=>{
                    reject(err)                    
                })
        })
    }
    async create_book(data : iBook){
        const id = uuid();
        const {title,author,serie,serieOrder} = data 
        return await connection('books')
          .insert({
              id,title,author,serie,serieOrder
          })
          .then(response=>{
            return {
                message: "success",
                data: {
                    id,
                    title,
                    author
                }
            }
          })
          .catch(err=>{
              console.log(err)
            return {
                message: "failed",
                data: err
            }
          })
            
    }
    async get_book(id : string){
        const book = await connection('books')
        .select('*')
        .where("id",id)
        .first()
        .then(response=>{
            return response
        })
        if (book){
            return {
                message: "success",
                data: book
            }
        }else {
            return {
                message: "failed",
                data: "Book not found"
            }
        }
    }
    async delete(id: string){
        return await connection('books')
            .where("id",id)
            .delete()
            .then(response=>{
                return {
                    message: "success",
                    data: "Book deleted successfully"
                }
            })
            .catch(err=>{
                return {
                    message: "failed",
                    data: err
                }
            })
    }
}

export {
    BookService,
    iBook
}