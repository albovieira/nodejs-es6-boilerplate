import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import winston from 'winston';
import expressWinston from 'express-winston';
import requestMetadata from './middleware/request-metadata';
import router from './router';

const PORT = process.env.PORT || 3000;

const app = express();

app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(compression());
app.use(requestMetadata());
app.use('/', router);

/**
 * Configuração de log de requisições.
 */
app.use(expressWinston.logger({
  winstonInstance: new winston.transports.Console(),
  meta: true,
  expressFormat: true,
  dynamicMeta: req => ({}),
}));

app.listen(PORT, () => {
  console.info(`Server listening on port ${PORT}!`);
});

/**
 * Trata o evento de shutdown enviado pelo sistema operacional.
 */
process.on('SIGINT', async () => {
  try {
    process.exit(0);
  } catch (err) {
    process.exit(1);
  }
});
