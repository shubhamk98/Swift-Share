import express from 'express';
import { uploadImage, downlaodImage } from '../controller/image-controller.js';
import upload from '../utils/upload.js';



const router = express.Router();

router.post("/upload",upload.single('file'), uploadImage);
router.get('/file/:fileId', downlaodImage);



export default router; 