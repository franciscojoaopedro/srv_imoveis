const   bcrypt =require( "bcrypt");
const   prisma  = require ("../helpers/prisma");
 

module.exports={
    async createUser(request,response){
        try {
            const {nome,email,password,contacto}=request.body;
            let user= await prisma.user.findUnique({where:{email}});
            if(user){
               return response.json({error:true, message:"Usuário já existe"});
            }
            const HashPassword= await bcrypt.hash(password,8);
            user=await prisma.user.create({
                data:{
                    nome,
                    email,
                    contacto,
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
    },
    async User(request,response){
        try {
            const {id}=request.params;
            const user=await prisma.user.findUnique({where:{id:Number(id)}});
            const {nome,email,contacto}=user
            return response.json({nome,email,contacto,id}); 
        } catch (error) {
            return response.json({message:error.message})
        }
    },
   
    
} 