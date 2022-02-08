const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM ListaDeTareas', (err, rows) => {
     if (err) {
      res.json(err);
     }
     console.log(rows)
     res.render('customers', {
        data: rows
     });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO ListaDeTareas set ?', data, (err, rows) => {
      if (err) {
        res.json(err);
       }
      res.redirect('/');
    })
  })
};

controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM ListaDeTareas WHERE id = ?", [id], (err, rows) => {
      if (err) {
        res.json(err);
       }
      res.render('customers_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {
    conn.query('UPDATE ListaDeTareas set ? where id = ?', [newCustomer, id], (err, rows) => {
      if (err) {
        res.json(err);
       }
      res.redirect('/');
    });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM ListaDeTareas WHERE id = ?', [id], (err, rows) => {
      if (err) {
        res.json(err);
       }
      res.redirect('/');
    });
  });
}

controller.listo = (req, res) => {
  const { id } = req.params;
  var estado = "Terminada"
  req.getConnection((err, conn) => {
    conn.query('UPDATE ListaDeTareas set estado = ? where id = ?', [estado, id], (err, rows) => {
      if (err) {
        res.json(err);
       }
      res.redirect('/');
    });
  });
}

module.exports = controller;
