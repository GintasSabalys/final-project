const { db } = require("../configs/database");

exports.addProduct = (req, res) => {
  const  q = "INSERT INTO products(`category`, `price`, `title`,`format`, `status`, `recordcompany`, `releasedate`) VALUES (?)";
  const values = [req.body.name, req.body.price, 'Vinila', 'MP4', 'NEW', 'WARNERBROS', '2023-01-23'];
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
    console.log(result)
    if (err) return res.status(500);
    res.status(200).json(result);
    console.log('as cia')
  })
};

