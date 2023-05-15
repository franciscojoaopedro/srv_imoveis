const   bcrypt =require( "bcrypt");
const   prisma  = require ("../helpers/prisma");
 

module.exports={
    async createUser(request,response){
        try {
            const {nome,email,password}=request.body;
            let user= await prisma.user.findUnique({where:{email}});
            if(user){
               return response.json({error:true, message:"Usuário já existe"});
            }
            const HashPassword= await bcrypt.hash(password,8);
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