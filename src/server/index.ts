import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import Router from './../router';
import RouteMiddleware from './../router/router.middleware'

class Server {
  static start(port: number | string): void {
    const app = express();
    const routeMiddleware = new RouteMiddleware();

    app.use(cors());
    app.use(routeMiddleware.logRoute);
    app.use(bodyParser.json());
    app.use(`/api/v${process.env.APP_VERSION}`, Router);

    mongoose.connect(`${process.env.MONGO_LOCAL_CONN_URL}${process.env.MONGO_DB}` || '', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    app.listen(port);
    console.log(`Running API on port: ${port}`);
    console.log(`Visit http://localhost:${port}/api/v${process.env.APP_VERSION}`);
  }
}

export default Server;
