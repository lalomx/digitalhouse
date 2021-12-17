function authenticate(req, res, next) {
  
    const usr = req.query.user;
    
    let allowedUsers = ['Tim' ,'Ada','Greta','Vim'];
    const foundUser = allowedUsers.find(element => element == usr);
    if (foundUser){

      req.user = usr;
      next();

    } else {
      res.send('No tienes los privilegios para ingresar');
    }
  }

  module.exports = authenticate;