const { db } = require("../configs/database");

exports.addCategory = (req, res) => {
  console.log(req.body);
  const  q = "INSERT INTO categories(`name`) VALUES (?)";
  const values = [req.body.name];

  db.query(q, [values], (err, _) => {
    if (err) return res.status(500);
    return res.status(200).json(); // no content returned.
  })
};
  
exports.getCategories = (req, res, next) => {
  const sql = 'SELECT * FROM categories';
  db.query(sql, [], (err, result) => {
    if (err) return res.status(500);
    res.status(200).json(result);
  })
};

