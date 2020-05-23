import express from 'express';

const Router = express.Router();

Router.route('/').get(async (req, res) => {
  res.send('OK!');
});

// router.route('/clients').post(JSONWebToken.validate, Auth.isAdmin, async (req, res) => Client.create({ req, res }));
// router.route('/clients').get(JSONWebToken.validate, Auth.isAdmin, async (req, res) => Client.getAll({ req, res }));
// router.route('/clients/:client_id').get(JSONWebToken.validate, Auth.isAdmin, async (req, res) => Client.get({ req, res  }));
// router.route('/clients/:client_id').put(JSONWebToken.validate, Auth.isAdmin, async (req, res) => Client.update({ req, res }));

export default Router;
