import express from "express"
import Products from "../../Model/Product.js";

const router=express.Router();


router.get("/", async (req, res) => {
    try {
      const products = await Products.find({});
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
      const product = await Products.findOne({$and:[{name:req.body.name},{quantity:req.body.quantity}]});
      if(product){
        return  res.status(409).json({message:"Product Already Exist"})
      }
      product=await Products.create(req.body)
      res.status(200).json("Products added Successfully");
    } catch (error) {
      console.log(error);
      res.status(500).json("Server Error");
    }
  });



  router.put("/:id", async (req, res) => {
    try {
      const updatedContent = await Products.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { new: true }
      );
      if (!updatedContent) {
        return res.status(400).json({ message: "Couldn'nt update your content" });
      }
      return res.status(200).json("updated Successfully");
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  });


  export const productsRouterAdmin = router;
