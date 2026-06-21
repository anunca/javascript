import { dynamoDb } from "../lib/ddb.js";
import { DeleteCommand } from "@aws-sdk/lib-dynamodb";

const remove = async (event, context) => {

  let statusCode;
  let body;

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      id: event.pathParameters.id,
    },
  };
  console.log(params);

  try {
    const result = await dynamoDb.send(new DeleteCommand(params));
    console.log(result);

    statusCode = 204;
    body = JSON.stringify({});
  } catch (error) {
    console.log(error);

    statusCode = 400;
    body = 'Couldn\'t remove the todo item.';
  } finally {
    return {
      statusCode,
      body,
    };
  }
};

export { remove };
