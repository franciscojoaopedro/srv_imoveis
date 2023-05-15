const  multer =require ("multer");
const  uploadConfig =require( "../middlewares/upload");

const upload=multer(uploadConfig);
module.exports=upload