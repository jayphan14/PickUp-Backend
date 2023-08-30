import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';
import syncModel from '../config/syncModels'
dotenv.config();

import authRoutes from "./routes/authRoutes";
const port = process.env.PORT

const app = express();

// MIDDLEWARE
app.use(cors({
    credentials: true,
}))
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.use("/auth", authRoutes);

// SYNC DATABASE:
// const wantToSync = true;
// if (wantToSync) {
//     syncModel();
// }

const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
})