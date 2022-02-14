import cors = require('cors');
import express = require('express');
import { createConnection } from 'typeorm';
import { errorHandlerMiddleware } from './middleware/errorHandler.middleware';
import bookRoutes from './routes/book.routes';
import saleRoutes from './routes/sale.routes';


const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/book', bookRoutes);
app.use('/sale', saleRoutes);

app.use(errorHandlerMiddleware);

createConnection().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on Port: ${PORT}`);
    });
}, err => {
    console.log('Houve um erro ao conectar com o banco!', err);
})