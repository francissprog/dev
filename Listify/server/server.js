import express  from 'express';
import { config } from 'dotenv';
import cors from 'cors'
import connectDB from './db/DB.js';
import authRoutes from './routes/authRoutes.js'
import todoRoutes from './routes/todoRoutes.js'

// config
const PORT = 8080 || process.env.PORT;
const app = express();
config();

// database connection
connectDB();
// middlewares
app.use(cors({origin: "http://localhost:3000"}))
app.use(express.json());


// routes
app.use('/api',authRoutes );
app.use('/api',todoRoutes );


// development
app.listen(PORT, () => console.log(`http://localhost:${PORT}`))


