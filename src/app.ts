import 'dotenv/config';
import express from 'express';
import cors from 'cors';
const PORT = process.env.PORT || 3001;
import {router} from './routes';
import db from './config/mongo'
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
db().then(()=> console.log('Conexion exitosa'));
app.listen(PORT,()=> console.log(`port using http://localhost:${PORT}`));

