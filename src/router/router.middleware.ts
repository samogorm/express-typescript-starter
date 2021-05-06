import express from 'express';

import Logger from '../utils/logger';
import colours from './../constants/colours';

class RouteMiddleware {
  logRoute(request: express.Request, response: express.Response, next: () => void): void {
    Logger.text(`REQUEST: ${request.method} ${request.path} [${response.statusCode}]`, colours.foreground.green);

    next();
  }
}

export default RouteMiddleware;
