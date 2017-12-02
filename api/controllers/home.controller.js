
module.exports.home = (req, res) => {
  const isUserAuthenticated = req.session.authenticated;
  const userIdNotUndefined = req.session.userId;

  console.log(isUserAuthenticated);
  console.log(userIdNotUndefined);

  if (!isUserAuthenticated && userIdNotUndefined === undefined) {
    return res.render('index', {
      validation: ``,
      ok: ``,
      error: `User not authenticated`, 
      userInfo: ``
    });
  }
  return res.status(200).render('home');
};
