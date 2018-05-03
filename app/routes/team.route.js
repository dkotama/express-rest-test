module.exports = (app) => {
    const teamCtrl = require('../controllers/team.controller');

    app.post('/team', teamCtrl.create);

    app.get('/team', teamCtrl.findAll);

    app.get('/team/:teamId', teamCtrl.findOne);

    app.put('/team/:teamId', teamCtrl.update);

    app.delete('/team/:teamId', teamCtrl.delete);
};