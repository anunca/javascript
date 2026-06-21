import { dynamoDb } from "../lib/ddb.js";
import { GetCommand } from "@aws-sdk/lib-dynamodb";

const get = async (event, context) => {

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
    const result = await dynamoDb.send(new GetCommand(params));
    console.log(result);

    statusCode = result?.Item ? 200 : 404;
    body = JSON.stringify(result?.Item);
  } catch (error) {
    console.log(error);

    statusCode = 400;
    body = 'Couldn\'t fetch the todo item.';
  } finally {
    return {
      statusCode,
      body,
    };
  }
};

export { get };