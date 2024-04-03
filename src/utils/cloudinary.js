import { v2 as cloudinary } from "cloudinary";
import exp from "constants";
import fs from 'fs'


cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
  });


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        // Uplad the file

        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been uploaded successfully
        // console.log("file is uploaded ", response.url);
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath)
        }
        
        console.log(response); //***testing...testing***
        
        return response
    } catch(err) {
        fs.unlinkSync(localFilePath) //remove the locally saved temp file as the upload operation got failed
        return null 
    }
}

export {uploadOnCloudinary}