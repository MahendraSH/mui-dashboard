

import express, { json, urlencoded } from "express";

import cors from "cors";
import { config } from 'dotenv';
import helmet, { crossOriginResourcePolicy } from "helmet";
import morgan from "morgan";
// roues imports 
import clientRoutes from "./routes/clientRoutes.js"
import managementRoutes from "./routes/managementRoutes.js"
import generalRoutes from "./routes/generalRoutes.js"
import salesRoutes from "./routes/salesRoutes.js"
import DBconnect from "./config/dbConnect.js";

//  configurations
const app = express();
config({ path: "./.env" })
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("common"));
app.use(helmet());
app.use(crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(cors());

// routes 
app.use('/client', clientRoutes)
app.use('/management', managementRoutes)
app.use('/sales', salesRoutes)
app.use('/general', generalRoutes)


const PORT = 5000 | process.env.PORT;

DBconnect();

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`)
})