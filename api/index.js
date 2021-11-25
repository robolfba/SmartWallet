const app = require("./config/server.js");

const port = app.get("PORT");

app.listen(port, () => console.log(`Listen on port ${port}`));
