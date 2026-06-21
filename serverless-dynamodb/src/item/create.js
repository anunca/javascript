import { v1 } from 'uuid';
import { dynamoDb } from "../lib/ddb.js";
import { PutCommand } from "@aws-sdk/lib-dynamodb";

const create = async (event, context, callback) => {

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
    Item: {
      id: v1(),
      text: data.text,
      createdAt: timestamp,
      updatedAt: timestamp,
    },
  };
  console.log(params);

  try {
    const result = await dynamoDb.send(new PutCommand(params));
    console.log(result);

    statusCode = 200;
    body = JSON.stringify(params.Item);

  } catch (error) {
    console.log(error);

    statusCode = 400;
    body = 'Couldn\'t create the todo item.';
  } finally {
    return {
      statusCode,
      body,
    };
  }
};

export { create };
