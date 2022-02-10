const mongoose = require('mongoose');
// CONNECT YOUR APP TO THE MONGODB
mongoose
  //       Atlas link   cats-app-dev is the name of our database
  //            |            |
  .connect(' XXXXXXX  /cats-app-dev')
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error('Error connecting to mongo', err));
