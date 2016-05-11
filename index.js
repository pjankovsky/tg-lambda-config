'use strict';
let aws = require('aws-sdk');
let dynamodb = new aws.DynamoDB();

exports.handler = function(event, context, callback) {
    if (typeof event.key === 'undefined') {
        // grab the whole table
        dynamodb.scan({
            TableName: 'TokenGoodsConfig'
        }, function(err, data){
            if (err)
                callback(err);
            else {
                var config = {};
                for (var i=0; i < data.Items.length; i++) {
                    config[data.Items[i].key.S] = data.Items[i].value.S;
                }
                callback(null, config);
            }
        });
    } else {
        // grab just a single key
        dynamodb.getItem({
            Key: {
                key: {
                    S: String(event.key)
                }
            },
            TableName: 'TokenGoodsConfig'
        }, function(err, data){
            if (err)
                callback(err);
            else {
                if (typeof data.Item === 'undefined')
                    callback('Config value not found');
                else
                    callback(null, data.Item.value.S);
            }
        });
    }
};
