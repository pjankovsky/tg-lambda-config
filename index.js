'use strict';
const tgConfig = require('tg-node-lib/lib/tg-config');

exports.handler = function(event, context, callback) {
    var res;
    if (typeof event.key === 'undefined') {
        // grab the whole table
        res = tgConfig.getAllConfig();
        callback(res[0], res[1]);
        // dynamodb.scan({
        //     TableName: 'TokenGoodsConfig'
        // }, function(err, data){
        //     if (err)
        //         callback(err);
        //     else {
        //         var config = {};
        //         for (var i=0; i < data.Items.length; i++) {
        //             config[data.Items[i].key.S] = data.Items[i].value.S;
        //         }
        //         callback(null, config);
        //     }
        // });
    } else {
        // grab just a single key
        res = tgConfig.getConfig(event.key);
        callback(res[0], res[1]);
        // dynamodb.getItem({
        //     Key: {
        //         key: {
        //             S: String(event.key)
        //         }
        //     },
        //     TableName: 'TokenGoodsConfig'
        // }, function(err, data){
        //     if (err)
        //         callback(err);
        //     else {
        //         if (typeof data.Item === 'undefined')
        //             callback('Config value not found');
        //         else
        //             callback(null, data.Item.value.S);
        //     }
        // });
    }
};
