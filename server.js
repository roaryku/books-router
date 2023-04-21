const express = require('express');
const app = express();

const booksRoute = require('./router/FetchBooks');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api/books', booksRoute)


app.listen(8080, () => {
    console.log(`IT'S WORKING - PORT 5000`)
})