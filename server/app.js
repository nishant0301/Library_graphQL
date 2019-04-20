const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();
const path = require('path');
app.use(cors())

mongoose.connect('mongodb+srv://ankit9899:ankit9899@libraryankit-wuabp.mongodb.net/test?retryWrites=true')
mongoose.connection.once('open', () => {
    console.log('conneted to database');
});
// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql : true,
}));
app.use(express.static(path.resolve(__dirname, '../build')));
const normalizePort = port => parseInt(port,10);
const PORT = normalizePort(process.env.PORT || 5000)

app.listen(PORT, () => {
    console.log('now listening for requests on port ' + PORT);
});