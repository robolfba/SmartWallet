const app = require("./config/server.js");
const { conn } = require("./src/db.js");
const port = app.get("PORT");

conn.sync({ force: false }).then(() => {
  app.listen(port, () => console.log(`Listen on port ${port}`));
});
