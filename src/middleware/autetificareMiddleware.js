import expressAsyncHandler from "express-async-handler";

import db from "../config/db.js";
import jwt from "jsonwebtoken";
// import { errorMonitor } from "mysql2/typings/mysql/lib/Connection";

const protect = expressAsyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await db.models.User.findByPk(decoded.id);

      next();
    } catch (e) {
      console.log(e);
      res.status(401);
      throw new errorMonitor("Not authorized,token failed!");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized,no token!");
  }
});

export default protect;
