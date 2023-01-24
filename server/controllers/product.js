const { db } = require("../configs/database");

exports.addProduct = (req, res) => {
  const  q = "INSERT INTO products(`category_id`, `title`, `price`,`format`, `status`, `recordcompany`, `releasedate`) VALUES (?)";
  const values = [req.body.name, req.body.price, 'Vinila', 'MP4', 'NEW', 'WARNERBROS', '2023-01-23'];

  db.query(q, [values], (err, result) => {
    if (err) return res.status(500);
    return res.status(200); // no content returned.
  })
};
  
exports.getProducts = (req, res) => {
  const sql = 'SELECT * FROM products';
  db.query(sql, [], (err, result) => {
    if (err) return res.status(500);
    res.status(200).json(result);
  })
};