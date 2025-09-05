import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandler, notfound } from './Middleware/error.middleware.notfound.js';
import authRoute from "./routes/auth.routes.js";
import productRoute from "./routes/product.route.js";
const app = express();

//cors
app.use(cors());

// json body
app.use(express.json());

// cookie-parser
app.use(cookieParser());

// Routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/products", productRoute);

// Error middleware
app.use(notfound);
app.use(errorHandler);

// 
export default app;
