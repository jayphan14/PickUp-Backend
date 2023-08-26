import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import pool from '../config/db';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT

const app = express();

// MIDDLEWARE
app.use(cors({
    credentials: true,
}))
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).json({ content: 'app ran successfully'});
})
const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
})