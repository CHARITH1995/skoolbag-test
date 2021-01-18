const mysql = require("mysql");
const con = require("../config/connection/connection");
const validations = require("../config/validations/validation");
/**
 * @api {post} /api/v1/school/add info 2.add school info
 * @apiVersion 1.0.0
 * @apiName school add info
 * @apiGroup school
 * @apiDescription add basic school informations.
 * @apiPermission true
 * 
 * @apiParam no
*/

exports.schoolAdd = (req, res, _next) => {
    
  let email = validations.emailValidation(req.body.email);
  if (!email) {
    res.status(500).send("Incorrect email format!");
  } else {
    const checkEmail =
      "SELECT email from schools WHERE email = " + mysql.escape(req.body.email);
    con.query(checkEmail, (err, result, fields) => {
      if (err) {
        return res.status(500).send("something went wrong");
      }
      
      if (result[0]) {
        return res.status(500).send({ error : "Duplicate email found" });
      } else {
        const sql =
          "INSERT INTO schools (schoolId  , schoolName  , principalName  , street , suburb , postalcode , state  , email , studentCount  ) VALUES ('" +
          0 +
          "','" +
          req.body.schoolName +
          "','" +
          req.body.principalName +
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
          req.body.studentCount +
          "')";

        con.query(sql, (error, result, fields) => {
          if (error) return res.status(500).send("something went wrong");

          return res.status(200).send("Successfully Inserted!");
        });
      }
    });
  }
};

/**
 * @api {get} /api/v1/school/get   get school info
 * @apiVersion 1.0.0
 * @apiName  get school info
 * @apiGroup school
 * @apiDescription get basic school informations.
 * @apiPermission true
 * 
 * @apiParam no
*/


exports.getSchools = (req, res, _next) => {
    const sql = "SELECT * FROM schools";
    con.query(sql, (err, result, fields) => {
      if (err) return res.status(500).send("something went wrong");
      if (result.length == 0) {
        return res.status(500).send("something went wrong");
      } else {
        return res.status(200).json(result)
      }
    });
  };


  /**
 * @api {get} /api/v1/school/get/:id get school data by id
 * @apiVersion 1.0.0
 * @apiName get school data by id
 * @apiGroup school
 * @apiDescription get basic information about a school
 * @apiPermission true
 * 
 * @apiParam yes
*/

  exports.getSchoolById = (req, res, _next) => {
    const sql = "SELECT * FROM schools where schoolId = "+ mysql.escape(req.params.id);
    con.query(sql, (err, result, fields) => {
      if (err) return res.status(500).send("something went wrong");
      if (result.length == 0) {
        return res.status(500).send("something went wrong");
      } else {
        return res.status(200).json(result[0])
      }
    });
  };

/**
 * @api {get} /api/v1/school/gets/recent  get recently added schools
 * @apiVersion 1.0.0
 * @apiName get recently added schools
 * @apiGroup school
 * @apiDescription get basic information about recently added schools
 * @apiPermission true
 * 
 * @apiParam no
*/


  exports.getRecentlyAddSchools = (req, res, _next) => {
    const sql = "SELECT * FROM schools ORDER BY schoolId DESC LIMIT 3";
    con.query(sql, (err, result, fields) => {
      if (err) return res.status(500).send("something went wrong");
      if (result.length == 0) {
        return res.status(500).send("something went wrong");
      } else {
        return res.status(200).json(result)
      }
    });
  };

