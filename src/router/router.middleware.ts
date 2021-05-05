import express from 'express';

class RouteMiddleware {
  logRoute = (request: express.Request, response: express.Response, next: () => void): void => {
    console.log('REQUEST: ');
    console.log(`${request.method} ${request.path}`);
    console.log(`Status Code: ${response.statusCode}`);

    next();
  };
}

export default RouteMiddleware;
