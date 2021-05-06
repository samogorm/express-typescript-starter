import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import Router from './../router';
import RouteMiddleware from './../router/router.middleware';
import Logger from '../utils/logger';
import colours from './../constants/colours';

class Server {
  static start(port: number | string): void {
    Logger.text(`Starting ${process.env.NODE_ENV} server...`, colours.foreground.blue);

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
    Logger.text(`Running API on port: ${port}`, colours.foreground.blue);
    Logger.text(`Visit: http://localhost:${port}/api/v${process.env.APP_VERSION}`, colours.foreground.blue);
  }
}

export default Server;
