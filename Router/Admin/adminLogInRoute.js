import express from "express";
import bcrypt from "bcrypt";
import { Admin, genAuthToken } from "../../Model/admin";


const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const user = await Admin.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({ message: "invalid credentials email" });
    }

    const passwordValidate = await bcrypt.compare(
      req.body.password,
      user.password
    );
    console.log(user);
    console.log(passwordValidate);
    if (!passwordValidate) {
      return res.status(404).json({ message: "invalid credentials password" });
    }
    const authToken = genAuthToken(user.id);

    res
      .status(200)
      .json({
        message: "User logged in successfully",
        token: authToken,
        user,
      });
  } catch (error) {
    console.log("error: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export const adminLoginRouter = router;
