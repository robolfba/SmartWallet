var express = require("express");
var router = express.Router();
const { Transaction } = require("../db");

// Devolver todas las transacciones
router.get("/", async (req, res) => {
  try {
    const myDb = await Transaction.findAll({});
    return res.status(200).json(myDb);
  } catch (err) {
    return res.status(500).send(err);
  }
});

// Crear una transaccion
router.post("/", async (req, res) => {
  // Recibo datos por body para crear una nueva transacción
  const { concept, amount, date, type } = req.body;
  // Chequeo que los campos obligatorios esten completos, sino retorno un msj de error
  if (!concept || !amount || !date || !type)
    return res.status(500).send("There are incomplete fields");
  try {
    const newTransaction = await Transaction.create({
      concept,
      amount,
      date,
      type,
    });
    return res.status(200).json(newTransaction);
  } catch (err) {
    return res.status(500).send(err);
  }
});

// Eliminar una transaccion
router.delete("/", async (req, res) => {
  // Recibo id de transaccion por query
  const { id } = req.query;
  try {
    await Transaction.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json({
      data: null,
      message: "mensaje de success en ingles",
    });
  } catch (err) {
    res.status(500).json({
      data: err,
      message: "mensaje de error en ingles",
    });
  }
});

// Modificar una transaccion
router.put("/", async (req, res) => {
  // Recibo id de transaccion por query
  const { id } = req.query;
  // Recibo campos modificados por body
  const { concept, amount, date } = req.body;
  if (id) {
    try {
      let modified = await Transaction.findOne({
        where: {
          id: id,
        },
      });
      if (modified) {
        modified.concept = concept;
        modified.amount = amount;
        modified.date = date;
        res.status(201).json({
          data: modified,
          message: "Edit success",
        });
      } else {
        res.status(500).send("The transaction id is not recognized");
      }
    } catch (err) {
      res.status(500).json({
        data: err,
        message: "mensaje de error en ingles",
      });
    }
  } else {
    res.status(500).json({
      data: null,
      message: "The transaction id is null",
    });
  }
});

module.exports = router;
