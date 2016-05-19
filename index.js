'use strict';
let tgConfig = require('tg-node-lib/lib/tg-config');

exports.handler = function(event, context, callback) {
    if (typeof event.key === 'undefined') {
        // grab the whole table
        tgConfig.getAllConfig()
            .then((config) => callback(null, config))
            .catch((err) => callback(err, null));
    } else {
        // grab just a single key
        tgConfig.getConfig(event.key)
            .then((value) => callback(null, value))
            .catch((err) => callback(err, null));
    }
};
