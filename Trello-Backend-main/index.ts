import express, { Express } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import { Task } from './src/tasks/tasks.entity';
import { taskRouter } from './src/tasks/tasks.router';

// Instantiate express app
const app: Express = express();
dotenv.config();

app.use(bodyParser.json());

app.use(cors());

// Create Database Connection
export const AppDataSource = new DataSource({
  type: 'mysql',
  host: '172.16.34.21',
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  entities: [Task],
  synchronize: true,
});

// Define sever port
const port = process.env.PORT;

AppDataSource.initialize()
  .then(() => {
    // Start listenting to the requests on the defined port
    app.listen(port);
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error(
      'Error during Data Source initialization',
      err,
    );
  });
app.use('/', taskRouter);
