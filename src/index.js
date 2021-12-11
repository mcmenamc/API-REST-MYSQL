const express = require('express');
const app = express();

//Setting
app.set('port', process.env.PORT || 3000);

//Middleware
app.use(express.json());
//Routes
app.use(require('./routes/employees'));
//Server

app.listen(app.get('port'), () => {
  console.log('Server is running on port ', app.get('port'));
});


