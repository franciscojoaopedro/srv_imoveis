import multer from "multer";
import uploadConfig from "../middlewares/upload";

const upload=multer(uploadConfig);
export{upload}