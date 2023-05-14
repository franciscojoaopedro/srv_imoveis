import { hash } from "bcrypt";
import { prisma } from "../helpers/prisma";
export default{
    async createUser(request,response){
        try {
            const {nome,email,password}=request.body;
            let user= await prisma.user.findUnique({where:{email}});
            if(user){
               return response.json({error:true, message:"Usuário já existe"});
            }
            const HashPassword= await hash(password,8);
            user=await prisma.user.create({
                data:{
                    nome,
                    email,
                    password:HashPassword
                }
            })

            return response.json({error:false,message:"Cadastrado com sucesso", user})
        } catch (error) {
            return response.json({ error:true, message:`${error}`})
        }
    },
    async findAllUser(request,response){
        try {
            const user=await prisma.user.findMany()
            return response.json(user);
        } catch (error) {
            return response.json({message:error.message})
        }
    }
} 