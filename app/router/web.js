'use strict';
module.exports = app => {
  const { router, controller } = app;
  router.get('/web/index', controller.web.home.index);
  router.get('/web/getArticleList', controller.web.home.getArticleList);
  router.get('/web/getArticleById/:id', controller.web.home.getArticleById);
};
