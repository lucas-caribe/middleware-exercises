const express = require('express');
const userRouter = require('./userRoutes');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use('/user', userRouter);

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
