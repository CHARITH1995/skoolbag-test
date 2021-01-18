const mysql = require("mysql");
const con = require("../config/connection/connection");
const validations = require("../config/validations/validation");

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

  exports.getSchoolById = (req, res, _next) => {
    const sql = "SELECT * FROM schools where id = "+ mysql.escape(req.params.id);
    con.query(sql, (err, result, fields) => {
      if (err) return res.status(500).send("something went wrong");
      if (result.length == 0) {
        return res.status(500).send("something went wrong");
      } else {
        return res.status(200).json(result)
      }
    });
  };

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

