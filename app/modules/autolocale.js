/*jslint node: true, nomen: true, regexp: true, plusplus: true */
(function () {

    'use strict';

    const   Negotiator      = require('negotiator'),
            moment          = require('moment'),
            conf            = require('./conf'),
            langs           = {
                fr          : require('../intl/fr'),
                en          : require('../intl/en')
            };

    module.exports = function (req, res, next) {

        const   negotiator = new Negotiator(req),
                protocol = 'http' + (req.connection.encrypted ? 's' : '') + '://',
                availableLanguages = conf.available_langs,
                domain = req.headers.host,
                domainParts = domain.split('.'),
                baseDomain = conf.domain,
                baseDomainParts = baseDomain.split('.'),
                language = negotiator.language(availableLanguages);

        if ((domainParts.length !== baseDomainParts.length + 1) || (availableLanguages.indexOf(domainParts[0]) === -1)) {

            const   host = language + '.' + baseDomain,
                    href = protocol + host + req.url;

            res.statusCode = 302;
            res.setHeader('Location', href);
            res.write('Redirecting to ' + href + '');
            res.end();

        } else {

            req.lang = domainParts[0];
            res.locals.intlStrings = langs[req.lang];
            moment.locale(domainParts[0]);
            next();

        }

    };

})();