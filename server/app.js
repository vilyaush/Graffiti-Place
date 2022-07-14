require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const http = require('http');
// const uuid = require('uuid');
const uuid = require('uuid4');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const { WebSocketServer } = require('ws');

const map = new Map();

const arr = []

const sessionParser = session({
  name: 'sid',
  store: new FileStore(),
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true },
});

const PORT = process.env.PORT ?? 3003;

const userRouter = require('./routes/userRouter');
const painterCardRouter = require('./routes/painterCardRouter');
const orderCardRouter = require('./routes/orderRouter');
const personalareaRouter = require('./routes/personalareaRouter');
const responseRouter = require('./routes/responseRouter');
const cardRouter = require('./routes/cardRouter');
const responsesListRouter = require('./routes/responsesListRouter');

const app = express();
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000',

}));

app.use(morgan('dev'));

app.use(express.static(path.join(process.env.PWD, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(sessionParser);

app.use((req, res, next) => {
  res.locals.user = req.session?.user;
  next();
});
app.use('/user', userRouter);

app.use('/paintercard', painterCardRouter);
app.use('/ordercard', orderCardRouter);
app.use('/roles', personalareaRouter);
app.use('/response', responseRouter);
app.use('/card', cardRouter);
app.use('/responselist', responsesListRouter);

app.use((req, res) => {
  res.status(404).send('ooops');
});

const server = http.createServer(app);
const wss = new WebSocketServer({ clientTracking: false, noServer: true });

server.on('upgrade', (request, socket, head) => {
  console.log('Parsing session from request...');

  sessionParser(request, {}, () => {
    if (!request.session.userId) {
      socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
      socket.destroy();
      return;
    }

    console.log('Session is parsed!');

    wss.handleUpgrade(request, socket, head, (ws) => {
      wss.emit('connection', ws, request);
    });
  });
});
function generalInformation(){
  console.log('general');
  const messages = arr.map((el, i) => ({...el, id:i}))
  map.forEach(el => el.send(JSON.stringify({type:'postAll', payload:messages})))
  console.log('oooooooooffffffffffffffff');
}

 function postMess(payload){
  arr.push(payload)
  console.log('iiiiiiiiiiiiiiiiiiiiiiii', arr);
  generalInformation()
 
}

function postAll(){
  generalInformation()
  console.log('iiiiiiiiiiiiiiiiiiiiiiii');
}

let count = 0;
wss.on('connection', (ws, request) => {
  // const  userId  = request.session.userId;
  const userId  = uuid();

  map.set(userId, ws);
  console.log('map in conection --------->', map)
  console.log(userId);
  count += 1;
  console.log('count --------->', count);


 


  ws.on('message', (message) => {
    console.log(`Received message ${message} from user ${userId}`);
    const wbs = JSON.parse(message);
    const { type, payload } = wbs;

    switch (type) {
      case "getOne" :
        postMess(payload)
       
        break;
      case "postAll" :
       postAll()
      
        
        break;
      }
  });

  ws.on('close', () => {
    console.log('close start------->', map)
    map.delete(userId);
    console.log('close ------->', map)
  });
});

server.listen(PORT, () => {
  console.log('server start on', PORT);
});
