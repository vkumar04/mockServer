import express, { Router } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(morgan('combined'));
const port = 3001;
const users = [
   {id: 101, name: "Vick", amount: 1999, rating: 8.1},
   {id: 102, name: "Tate", amount: 2010, rating: 8.7},
   {id: 103, name: "Andres", amount: 2008, rating: 9},
];

//Routes will go here
app.get('/', (_, res) => {
    res.send(users);
});

app.get('/:id', (req, res) => {
    const { id } = req.params;
    console.log("triggered!", id)
    const user = users.filter(x => x.name === id);
    res.send(user)
})


app.listen(port, () => console.log(`app listening on port ${port}!`))