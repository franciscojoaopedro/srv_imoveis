const  {compare} = require ("bcrypt");
const  prisma  = require ("../helpers/prisma");
const jwt  =require ("jsonwebtoken");
module.exports={
    async createSession(request,response){
        try {
            const {email,password}=request.body;
            let user=await prisma.user.findUnique({where:{email}});
            if(!user){
                return response.json({ error:true, message:"Usuário ou senha incorreta / email"});
            }
            const checkPassword=await compare(password,user.password);
            if(!checkPassword){
                return response.json({ error:true, message:"Usuário ou senha incorretos/ senha"})
            }
            const token=jwt.sign({id:user.id},"827ccb0eea8a706c4c34a16891f84e7b",{
                expiresIn:'1d'
            });
            return response.json({error:false,user,token});
        } catch (error) {
            return response.json({message:error.message})
        }
    }
}