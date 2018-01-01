import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import  router  from './services/router';

const app = express();


mongoose.connect('mongodb://localhost:27017/names', { useMongoClient: true });

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use('/api', router);

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, function(){
  console.log('listening on port :' + PORT);
});
