import express from 'express';
import userRoute from './routes/userRoute.js';

const app = express();
app.set('view engine', 'ejs');
app.use('/users', userRoute);

app.get('/', (req, res) => {
  res.render("index", { text: "World" });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
