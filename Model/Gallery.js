import mongoose from "mongoose";

const galleryScheme= mongoose.Schema({
    siteName:{
        type:String,
        required:true,
        trim:true
    },
    images:{
        type:[], 
    },
    location:{
        type:Strin
    },
    description:{
        type:String
    }

})

const Gallery=mongoose.model("gallery",galleryScheme)

export default Gallery