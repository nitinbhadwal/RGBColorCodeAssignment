
const Route = require("./RGB");
const appRouter = (app, fs) => {
// route test
  app.get("/", (req, res) => {
    res.send("Api endpoint route");
  });
  Route(app, fs);
};
module.exports = appRouter;