import multer from "multer";
import crypto from "crypto";
import path from "path";


const tempFolder=path.resolve(__dirname,"../","../","uploads");
const tempUpload=path.resolve(tempFolder,"uploads");


export default{
    derectory:tempFolder,
    uploadFolder:tempUpload,
    storage:multer.diskStorage({
        destination:tempFolder,
        filename(request,file,callback){
            const hashfile=crypto.randomBytes(10).toString("hex");
            const nameFile=`${hashfile}-${file.originalname}`;
            return callback(null,nameFile);
        }
    })
}