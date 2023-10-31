import express from 'express';
import cors from 'cors';

const app = express();


app.use(express.json());
app.use(cors({ origin: '*' }));

app.route('/').get((req, res) => {
  console.log('Hello World'); 
  return res.json({ message: 'Hello, World!' }); 
});

const port = process.env.PORT || 7000;
app.listen(port, () =>
 console.log(`Server listening on port ${port}!`)
);
