import express from "express"
import Gallery from "../../Model/Gallery.js";

const router=express.Router();


router.get("/", async (req, res) => {
    try {
      const products = await Gallery.find({});
      if (!products) {
        res.status(400).json({ message: "can't get the data" });
      }
      res.status(200).json(products);
    } catch (error) {
      console.log(error);
      res.status(500).json("Server Error");
    }
  });

  router.post("/", async (req, res) => {
    try {
      const cart = await Gallery.create(req.body);
      res.status(200).json("Products added Successfully");
    } catch (error) {
      console.log(error);
      res.status(500).json("Server Error");
    }
  });

  router.delete("/:id",async(req,res)=>{
    try {
        const deleteContent=await Gallery.findByIdAndDelete(
            {_id:req.params.id},
        )   
        if(!deleteContent){return res.status(400).json({message:"Couldn'nt delete your content"})}
        return res.status(200).json({message:"Deleted Successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"})
    }

    
})



  export const galleryRouter = router;
