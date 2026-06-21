import { dynamoDb } from "../lib/ddb.js";
import { ScanCommand } from "@aws-sdk/lib-dynamodb";

const list = async (event, context) => {

  let statusCode;
  let body;

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
  };
  console.log(params);

  try {
    const result = await dynamoDb.send(new ScanCommand(params));
    console.log(result);

    statusCode = 200;
    body = JSON.stringify(result?.Items);
  } catch (error) {
    console.log(error);

    statusCode = 400;
    body = 'Couldn\'t fetch the todos.';
  } finally {
    return {
      statusCode,
      body,
    };
  }
};

export { list };
