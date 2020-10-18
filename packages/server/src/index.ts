import express from 'express';
import logger from './utilities/logger.util';

const PORT = 5000;
const app = express();

app.get('/', (req, res) => res.send('Welcome to i18n-organizer'));

app.listen(PORT, () => {
  logger.info(`Server is running at http://localhost:${PORT}`);
});
