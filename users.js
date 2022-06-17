import express from 'express';
const router = express.Router();
const movies = [
   {id: 101, name: "Vick", amount: 1999, rating: 8.1},
   {id: 102, name: "Tate", amount: 2010, rating: 8.7},
   {id: 103, name: "Andres", amount: 2008, rating: 9},
];

//Routes will go here
router.get('/', (_, res) => {
    res.send(movies);
});

export default router