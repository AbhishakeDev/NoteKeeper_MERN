import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import noteRoutes from './routes/notes.js';
import userRoutes from './routes/user.js';

const app = express();

app.use(express.json({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello from NotekeeperAPI');
});

app.use('/notes', noteRoutes);
app.use('/user', userRoutes);


const CONNECTION_URL = 'mongodb+srv://abhishekt:abhishekt@cluster0.nfnec.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`)))
    .catch((error) => console.log(error));

