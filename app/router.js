

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/regist', controller.regist.create)
  router.post('/login', controller.login.login)
  // app.resources('users', '/users', app.controller.user);
};
