const { PrismaClient }= require ("@prisma/client");

const prisma=new PrismaClient()
module.exports= {
    async createImobi(request,response){
        try {
            const thumb=request.file.filename;
            console.log(request.file);
            const {id, slug,tipo,endereco,cidade,uf,valor,descricao}=request.body;


            const user=await prisma.user.findUnique({where:{id:Number(id)}});
            if(!user){
                return response.json({message:"Usuario não encontrado"});
            }
           /* const slugify=srt=>
                srt
                .toLowerCase()
                .trim()
                .replace(/[^\w\s-]/g,'')
                .replace(/[^\s_-]+/g,'-')
                .replace(/^-+|+$/g,'')
            
            const slug=slugify(tipo)
            */
            const imovel=await prisma.imobi.create({
                data:{
                   tipo,
                   endereco,
                   cidade,
                   uf,
                   valor,
                   descricao,
                   slug,
                   thumb,
                   userID:user.id,
                }
            })
            return response.json({imovel})
            
        } catch (error) {
            return response.json({message:error.message})
        }
    },
    async findAllImobi(request,response){
        try {
            const imoveis= await prisma.imobi.findMany();
            return response.json({imoveis})
        } catch (error) {
            return response.json({message:error.message})
        }
    },
    async findImobi(request,response){
        try {
            const {slug}=request.params;
            const imovel= await prisma.imobi.findFirst({where:{slug:slug}});
            if(!imovel){
                return response.json({message:"Não encontramos nenhum o imovel cadastro"});
            }
            return response.json({error:false,messege:"imovel",imovel})
        } catch (error) {
            return response.json({message:error.message})
        }
    },
    async findImovel(request,response){
        try {
            const {id}=request.params;
            const imovel= await prisma.imobi.findUnique({where:{id:Number(id)}});
            if(!imovel){
                return response.json({message:"Não encontramos nenhum o imovel cadastro"});
            }
            console.log(imovel)
            return response.json({error:false,messege:"imovel",imovel})
        } catch (error) {
            return response.json({message:error.message})
        }
    },
    async findImovelSearch(request,response){
        try {
            const {pesquisar,take}=request.query;
            const imovel= await prisma.imobi.findMany({
                where:{
                    tipo:{
                    contains:pesquisar.toString(),
                    mode:"insensitive"
                    }
                },
        });
            return  response.json({imovel});
           /* if(!imovel){
                return response.json({message:"Não encontramos nenhum o imovel cadastro"});
            }
            console.log(imovel)
            return response.json({error:false,messege:"imovel",imovel})
            */
        } catch (error) {
            return response.json({message:error.message})
        }
    },
}