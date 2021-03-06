const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const con = require("../config/connection/connection");
const validations = require("../config/validations/validation");
require("dotenv").config();


  /**
 * @api {post} /api/v1/user/add add a user
 * @apiVersion 1.0.0
 * @apiName add a user
 * @apiGroup user
 * @apiDescription add a user
 * @apiPermission true
 * 
 * @apiParam no
*/

exports.registerUser = (req, res, _next) => {
 
  let hashedPassword = validations.generateHash(req.body.password);
  let email = validations.emailValidation(req.body.email);

  if (!email) {
    res.status(500).send("Incorrect email format!");
  } else {
    const checkEmail =
      "SELECT email from users WHERE email = " + mysql.escape(req.body.email);
    con.query(checkEmail, (err, result, fields) => {
      if (err) {
        return res.status(500).send("something went wrong");
      }
      
      if (result[0]) {
        return res.status(500).send("Duplicate email found");
      } else {
        const sql =
          "INSERT INTO users (userId , firstName , lastName , street , suburb , postalcode , state  , email , password ) VALUES ('" +
          0 +
          "','" +
          req.body.firstName +
          "','" +
          req.body.lastName +
          "','" +
          req.body.street +
          "','" +
          req.body.surburb +
          "','" +
          req.body.postalcode +
          "','" +
          req.body.state +
          "','" +
          req.body.email +
          "','" +
          hashedPassword +
          "')";

        con.query(sql, (error, result, fields) => {
          
          if (error) return res.status(500).send("something went wrong");
          const user = {
            userId: result.insertId,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
          };
          const token = jwt.sign(JSON.stringify(user), process.env.SECRETKEY);
          return res.status(200).json(token);
        });
      }
    });
  }
};


  /**
 * @api {post} /api/v1/user/login user login using email and password
 * @apiVersion 1.0.0
 * @apiName login a user
 * @apiGroup user
 * @apiDescription login a user to system
 * @apiPermission true
 * 
 * @apiParam no
*/

exports.userLogin = (req, res, _next) => {
  const sql = "SELECT * FROM users WHERE email= " + mysql.escape(req.body.email);
  con.query(sql, (err, result, fields) => {
    if (err) return res.status(500).send("something went wrong");
    if (result.length == 0) {
      return res.status(500).send("Incorrect user!");
    } else {
      const userPassword = result[0].password;
      if (validations.verifyPassword(req.body.password, userPassword)) {
        const user = {
          userId: result[0].userId,
          firstName: result[0].firstName,
          lastName: result[0].lastName,
          email: result[0].userId.email,
        };
        const token = jwt.sign(JSON.stringify(user), process.env.SECRETKEY);
        return res.status(200).json(token);
      } else {
        return res.status(500).send("something went wrong");
      }
    }
  });
};
