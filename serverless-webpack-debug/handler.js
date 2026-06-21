'use strict';

import _ from 'lodash'

const hello = async (event) => {
  
  let message = 'Go Serverless v1.0! Your function executed successfully!'
  message = _.upperCase(message)

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message,
        input: event,
      },
      null,
      2
    ),
  };
};

export { hello }