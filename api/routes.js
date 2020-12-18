module.exports = router => {
  require('./routes/users')(router);
  require('./routes/books')(router);
  require('./routes/sessions')(router);

  return router;
};