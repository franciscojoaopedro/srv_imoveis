const jwt = require ("jsonwebtoken");
function auth(request,response,next){
    const {authorization}=request.headers;
    if(!authorization){
        response.json({message:"Usuario não autorizado"},401);
    }
    const token=authorization.replace("Bearer","").trim();
    try {
        const data=jwt.verify(token,"827ccb0eea8a706c4c34a16891f84e7b")
        const {id}=data;
        request.userId=id
        return next()
    } catch (error) {
        return response.json({message:error.message})
    }

}

module.exports=auth;