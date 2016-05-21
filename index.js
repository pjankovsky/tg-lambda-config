'use strict';
let config = require('tg-node-lib/lib/config');

exports.handler = function(event, context, callback) {
    if (typeof event.key === 'undefined') {
        // grab the whole table
        config.getAllConfig()
            .then((config) => callback(null, config))
            .catch((err) => callback(err, null));
    } else {
        // grab just a single key
        config.getConfig(event.key)
            .then((value) => callback(null, value))
            .catch((err) => callback(err, null));
    }
};
