const { db } = require("../configs/database");

exports.addProduct = (req, res) => {
  const  q = "INSERT INTO products(`category_id`, `price`, `title`,`format`, `status`, `recordcompany`, `releasedate`, `img`) VALUES (?)";
  const values = [req.body.categoryId, req.body.price, req.body.title, req.body.format, req.body.status, req.body.recordCompany, req.body.releaseDate, req.body.image];

  db.query(q, [values], (err, result) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(); // no content returned.
  })
};
  
exports.getProductsByCategoryId = (req, res) => {
  const sql = 'SELECT * FROM products WHERE category_id = ?';
  db.query(sql, [req.params.id], (err, result) => {
    if (err) return res.status(500);
    res.status(200).json(result);
  })
};

