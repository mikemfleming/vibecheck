/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

var aws = require('aws-sdk');
var ddb = new aws.DynamoDB();

exports.handler = async (event, context) => {
    try {
        const date = new Date();
        const params = {
            Item: {
                'name': {S: event.request.userAttributes.name},
                'bio': {S: event.request.userAttributes.name},
                'vibes': {L: []},
                'createdAt': {S: date.toISOString()},
                'updatedAt': {S: date.toISOString()},
            },
            TableName: 'User-fcfnjbcx5zhehfna5hmqs42npq-dev'
        };

        await ddb.putItem(params).promise();
        
        console.log("Success");
    } catch (err) {
        console.log("Error", err);
        context.done(null, event);
    }
};
