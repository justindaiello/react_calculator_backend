require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');
const server = createServer();

server.start({
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL    
  }    
}, res => {
    console.log(`Up and running on http://localhost:${res.port}`);
    
})