const { createConnection } = require("mysql");
const { db } = require("../configs/database");

exports.addProduct = (req, res) => {
  const  q = "INSERT INTO products(`category`, `price`, `title`,`format`, `status`, `recordcompany`, `releasedate`, `img`) VALUES (?)";
  const values = [req.body.category, req.body.price, req.body.title, req.body.format, req.body.status, req.body.recordcompany, req.body.releasedate, req.body.productImg];
  console.log(values)

  db.query(q, [values], (err, result) => {
    console.log(result)
    if (err) return res.status(500);
    return res.status(200); // no content returned.
  })
};
  
exports.getProducts = (req, res, next) => {
  const sql = 'SELECT * FROM products';
  db.query(sql, [], (err, result) => {
    if (err) return res.status(500);
    res.status(200).json(result);
    console.log(result)
  })
};

