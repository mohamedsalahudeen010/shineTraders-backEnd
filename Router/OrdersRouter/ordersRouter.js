import express from "express"
import obj from "mongodb"
import Order from "../../Model/Order.js";
const objectId = obj.ObjectId;

const router=express.Router();


router.post("/", async (req, res) => {
    try {
      const cart = await Order.create(req.body);
      res.status(200).json("Products added Successfully");
    } catch (error) {
      console.log(error);
      res.status(500).json("Server Error");
    }
  });

  router.put("/:id", async (req, res) => {
    
    
    try {
      const cart = await Order.findOneAndUpdate(
        { _id: req.params.id },
      { $set: req.body },
      { new: true });
      res.status(200).json("Products Updated Successfully");
    } catch (error) {
      console.log(error);
      res.status(500).json("Server Error");
    }
  });




    router.get("/", async (req, res) => {
        console.log(req.query)
        try { 
          const cart = await Order.find({
            userMail:"virat123@gmail.com"});
          if (!cart) {
            res.status(400).json({ message: "can't get the Cart data" });
          }
          res.status(200).json(cart);
        } catch (error) {
          console.log(error);
          res.status(500).json("Server Error");
        }
      });



      router.delete("/:id",async(req,res)=>{
        try {
            const deleteContent=await Order.findByIdAndDelete(
                {_id:req.params.id},
            )   
            if(!deleteContent){return res.status(400).json({message:"Couldn'nt delete your content"})}
            return res.status(200).json({message:"Deleted Successfully"})
        } catch (error) {
            console.log(error);
            res.status(500).json({message:"Internal server error"})
        }
    
        
    })

    router.delete("/",async(req,res)=>{
      try {
          const deleteWholeOrder=await Order.deleteMany(
              {},
          )   
          if(!deleteWholeOrder){return res.status(400).json({message:"Couldn'nt delete your content"})}
          return res.status(200).json({message:"Deleted Successfully"})
      } catch (error) {
          console.log(error);
          res.status(500).json({message:"Internal server error"})
      }
  
      
  })


export const orderRouter=router