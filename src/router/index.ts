import express from 'express';

const Router = express.Router();

Router.route('/').get(async (req, res) => {
  res.send('OK!');
});

export default Router;
