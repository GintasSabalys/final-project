const { db } = require("../configs/database");
const bcrypt = require("bcryptjs");

exports.register = (req, res) => {
    const  q = "SELECT * FROM users WHERE email = ?";
  
    db.query(q, [req.body.email], (err, data) => {
      if (err) return res.status(500).json(err);
      console.log(data)
      if (data.length) return res.status(409).json("Toks vartotojas jau egzistuoja!");
  
      const  hash = bcrypt.hashSync(req.body.password, 10);
  
      const  q = "INSERT INTO users(`name`, `lastname`, `email`,`password`) VALUES (?)";
      const values = [req.body.name, req.body.lastname, req.body.email, hash];
  
      db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("All good!");
      });
    });
  };
    
exports.login = (req, res) => {
  
};

exports.logout = (req,res) => {
  
}