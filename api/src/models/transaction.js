const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "transaction",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      concept: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM,
        values: ["deposit", "withdrawal"],
      },
    },
    {
      timestamps: false,
    }
  );
};
