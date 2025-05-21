import  express  from 'express'; 
import cors  from 'cors';
import postgresConnect from './db/';
import { allNumsRouter } from './routes';
import { LOCAL_ORIGINS } from './utils/constants';


const startServer = () => {
  const app = express();
  const port = process.env.PORT || 5000; 


  app.listen(port, () => console.log(`Listening on port ${port}`)); 
  
  app.use(
      cors({
          credentials: true,  
          origin: [...LOCAL_ORIGINS],
      })
  );

  
  /*app.get('/express_backend', (req, res) => { 
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); 
}); */
  app.use('/api', allNumsRouter);

}


postgresConnect()
  .then(result => {
    startServer();
})



