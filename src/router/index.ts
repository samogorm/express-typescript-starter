import express from 'express';

const Router = express.Router();

Router.route('/').get((req, res) => {
  res.send('OK!');
});

export default Router;
