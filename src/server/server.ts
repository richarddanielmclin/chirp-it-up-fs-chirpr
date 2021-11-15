import * as express from 'express';
import * as path from 'path';
import * as morgan from 'morgan';
import * as helmet from 'helmet';
import * as compression from 'compression';
import * as cors from 'cors';
import * as passport from 'passport';
import apiRouter from './routes';
import config from './config';

const app = express();

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));
app.use(passport.initialize());
app.use(config.app.prefix, apiRouter);
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

app.listen(config.app.port, () => console.log(`Server listening on port: ${config.app.port}`));