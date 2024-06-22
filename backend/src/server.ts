import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import faqRoutes from './routes/faqRoutes';
import chatRoutes from './routes/chatRoutes';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.use('/api', faqRoutes);
app.use('/api', chatRoutes);

const PORT = process.env.PORT || port;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});