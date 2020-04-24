const app = require('./app');
console.log(`Server started at http://localhost:${process.env.PORT}`)
app.listen(process.env.PORT);

