const db = require('../models')
const config = require('../configs/auth.config')

const USER = db.user
const Role = db.role

const Op = db.Sequelize.Op

var jwt = require('jsonwebtoken')
var bcrypt = require('bcryptjs')

exports.signup = (req, res) => {
  console.log('signup')
  USER.create({
    username: req.body.username,
    email: req.body.email,

    name: req.body.name,
    lastname: req.body.lastname,
    address: req.body.address,
    phonenumber: req.body.phonenumber,
    passward: bcrypt.hash(req.body.passward, 8),
  })
    .then((user) => {
      console.log('User created')
      if (req.body.roles) {
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles,
            },
          },
        }).then((roles) => {
          user.setRoles(roles).then(() => {
            res.send({ message: 'User successfully registerd' })
          })
        })
      } else {
        user.setRoles[1].then(() => {
          res.send({ message: 'User successfully' })
        })
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message })
    })
}

exports.signin = (req, res) => {
    
  User.findOne({
      where: {
          username: req.body.username
      }
  })
  .then(user => {
      //Checking if the username is valid
      if(!user) {
          return res.status(404).send({ message: "User not found"});
      }

      //Checking if the password entered is valid. 
      var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
      if(!passwordIsValid) {
          return res.status(401).send({
              message: "Invalid Password"
          })
      }

      //If both are valid, creating the token. 
      var token = jwt.sign({id: user.id}, config.secret, {
          expiresIn: 86400 //24 hours
      });

      res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          accessToken: token
      });
  })
  .catch(err => {
      res.status(500).send({ message: err.message });
  });
};

