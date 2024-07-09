const path = require('path');
const jsonServer = require('json-server');
const multer = require('multer');

const server = jsonServer.create();

server.use(formData.array());

server.listen(3004, () => {
  console.log('JSON Server is running');
});