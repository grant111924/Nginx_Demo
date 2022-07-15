const fastify = require('fastify')();

const { PORT } = process.env;

const config = {
  port: PORT,
  host: "0.0.0.0"
}
fastify.get('/', (req, reply) => {
  console.log('process pid =>', process.pid);
  reply.send(`Hello World ${PORT}`);
});

fastify.listen(config, (err,_) => {
  if (err) throw err;
  console.log('Server listening on port ' + PORT);
});