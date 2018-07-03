/*jslint node: true, nomen: true, regexp: true, plusplus: true */
(function () {

    "use strict";

    const express           = require("express"),
          path              = require("path"),
          logger            = require("morgan"),
          lessMiddleware    = require("less-middleware"),
          git               = require("git-rev"),

          main              = require("./app/controllers/main"),
          conf              = require("./app/modules/conf"),

          app = express();

    // view engine setup
    app.set("views", path.join(process.cwd(), "app", "views"));
    app.set("view engine", "ejs");

    app.use(logger("dev"));

    app.use(lessMiddleware(path.join(__dirname, "public")));
    app.use(express.static(path.join(__dirname, "public")));

    // Add git hash to locals
    app.use((req, res, next) => {
        git.short((shortHash) => {
            res.locals.gitHash = shortHash;
            next();
        });
    });

    app.use("/", main);

    // catch 404 and forward to error handler
    app.use((req, res, next) => {
      const err = new Error("Not Found");
      err.status = 404;
      next(err);
    });

    // error handler
    app.use((err, req, res, next) => {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get("env") === "development" ? err : {};

      // render the error page
      res.status(err.status || 500);
      res.render('error');
    });

    module.exports = app;

})();