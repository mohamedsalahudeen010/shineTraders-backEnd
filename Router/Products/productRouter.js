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




  export const productsRouter = router;