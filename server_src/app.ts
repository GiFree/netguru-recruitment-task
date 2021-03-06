import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import * as db from './models';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

import { getMovies, postMovies } from './routes/movies';
app.post('/movies', postMovies);
app.get('/movies', getMovies);

import { getComments, postComments } from './routes/comments';
app.post('/comments', postComments);
app.get('/comments', getComments);

// app.post('/sync', (req, res, next) => {
//   if (req.body.table && req.body.table === 'comments') {
//     db.resetComments()
//       .then(() => {
//         res.status(200).send({ message: 'sucessfully synced comments!' });
//       });
//   } else if (req.body.table && req.body.table === 'movies') {
//     db.resetMovies()
//       .then(() => {
//         res.status(200).send({ message: 'sucessfully synced movies!' });
//       });
//   } else {
//     res.status(400).send({ message: 'specify what u want to sync (movies, comments)' });
//   }
// });

app.get('*', (req, res, next) => {
  res.status(200).redirect('/');
});

export default app;
