import express from 'express'
import cors from 'cors'
import { routes } from './routes';

const app = express();

app.use(cors()) // controle de segurança no backend para que o frontend possa acessar a informação correta
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log(`Server started on port 3333`);
});

