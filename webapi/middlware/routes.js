const error = require("../config/error");
const qouteRoutes = require("../routers/quote");

module.exports = (app) => {
  app.use("/v1", qouteRoutes);
  app.use(error);
}

