const app = require('./app');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`API en puerto ${port}`);
});

process.on('unhandledRejection', () => {
  server.close(() => { process.exit(1);});
});