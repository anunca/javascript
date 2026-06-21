import { dynamoDb } from "../lib/ddb.js";
import { UpdateCommand } from "@aws-sdk/lib-dynamodb";

const update = async (event, context) => {

  const timestamp = new Date().getTime();
  let statusCode;
  let body;

  const data = JSON.parse(event.body);
  if (typeof data.text !== 'string') {
    console.log('Validation Failed');
    return {
      statusCode: 400,
      body: 'Couldn\'t create the todo item.',
    }
  }

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      id: event.pathParameters.id,
    },
    ExpressionAttributeNames: {
      '#todo_text': 'text',
    },
    ExpressionAttributeValues: {
      ':text': data.text,
      ':updatedAt': timestamp,
    },
    UpdateExpression: 'SET #todo_text = :text, updatedAt = :updatedAt',
    ConditionExpression: 'attribute_exists(id)',
    ReturnValues: 'ALL_NEW',
  };
  console.log(params);

  try {
    const result = await dynamoDb.send(new UpdateCommand(params));
    console.log(result);

    statusCode = 200;
    body = JSON.stringify(result?.Attributes);

  } catch (error) {
    console.log(error);

    statusCode = 400;
    body = 'Couldn\'t update the todo item.';
  } finally {
    return {
      statusCode,
      body,
    };
  }
};

export { update };
