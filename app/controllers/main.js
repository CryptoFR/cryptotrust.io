/*jslint node: true, nomen: true, regexp: true, plusplus: true */
(() => {

    "use strict";

    const   express = require("express"),
            router = express.Router();

    /* GET home page. */
    router.get('/', (req, res) => {
        return res.render('index');
    });

    module.exports = router;

})();