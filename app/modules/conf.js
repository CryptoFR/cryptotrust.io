/*jslint node: true, nomen: true, regexp: true, plusplus: true */
(function () {

    'use strict';

    var dev     = require("../conf/dev.js"),   // Dev conf
        prod    = require("../conf/prod.js"),  // Prod conf
        ci      = require("../conf/ci.js"),    // Continuous Integration conf
        conf;

    switch (process.env.NODE_ENV) {
        case 'development':
            conf = (process.env.CI == "true") ? ci : dev;
            conf.env = 'dev';
            break;
        case 'production':
            conf = prod;
            conf.env = 'prod';
            break;
        default:
            conf = prod;
            conf.env = 'prod';
    }

    module.exports = conf;
})();