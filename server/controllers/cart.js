const { db } = require("../configs/database");

exports.addToCart = (req, res) => {
  const sql = 'SELECT id, price FROM products WHERE id = ?';
  db.query(sql, [req.body.productId], (err, product) => {
    if (err) return res.status(500).json(err);
    const totalPrice = product[0].price * req.body.quantity;
    const  q = "INSERT INTO user_bag(`user_id`, `product_id`, `quantity`, `status`, `total_price`) VALUES (?)";
    const values = [req.id, product[0].id, req.body.quantity, 'UNPAID', totalPrice];

    db.query(q, [values], (err, _) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(); // no content returned.
    })
  })
};

exports.getProductsByCategoryId = (req, res) => {
  const sql = 'SELECT * FROM products WHERE category_id = ?';
  db.query(sql, [req.params.id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(result);
  })
};

exports.getMyCart = (req, res) => {
  const sql = 'SELECT c.id, c.quantity, c.total_price, p.img, p.title FROM user_bag as c INNER JOIN products as p ON c.product_id = p.id WHERE c.user_id = ? AND c.status = "UNPAID"';

  db.query(sql, [req.id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(result);
  })
};

exports.deleteCartItem = (req, res) => {
  const sql = 'UPDATE user_bag SET status = "DELETED" WHERE id = ?';
  db.query(sql, [req.params.id], (err, _) => {
    if (err) return res.status(500).json(err);
    res.status(200).json();
  })
};

exports.payCart = (req, res) => {
  const sql = 'SELECT total_price FROM user_bag WHERE user_id = ? AND status = "UNPAID" ';
  
  db.query(sql, [req.id], (err, result) => {
    if (err) return res.status(500).json(err);
    
    let totalSum = 0;
    
    result.forEach(x => {
      totalSum = totalSum + x.total_price;
    });

    const isPaidSuccessfuly = pay();

    if (isPaidSuccessfuly) {
      const sql = 'UPDATE user_bag SET status = "PAID" WHERE user_id = ? AND status = "UNPAID"';
      db.query(sql, [req.id], (err, _) => {
        if (err) return res.status(500).json(err);
        res.status(200).json();
      })
    }
  })
};

const pay = () => true
