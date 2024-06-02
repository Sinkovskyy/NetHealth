import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import {Traceroute} from './traceroute';
import {IpInfo} from './ipInfo';

import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('trust proxy', true);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/download', (req, res) => {
  const file = `${__dirname}/../download/100MB.bin`;
  res.download(file);
});

app.post('/upload', (req, res) => {
  console.log(req.body);
  res.send('File uploaded successfully');
});

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.get('/traceroute', async (req: Request, res: Response) => {
  const ip = req.query.ip as string;

  try {
    const result = await Traceroute.trace(ip);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/ipInfo', async (req: Request, res: Response) => {
  const ip = req.query.ip as string;

  try {
    const response = await IpInfo.getInfo(ip);
    res.send(response);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/myIp', async (req: Request, res: Response) => {
  res.send(req.ip);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
