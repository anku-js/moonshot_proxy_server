import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async function handler( req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors)


  var myHeaders = new Headers();
  const apiKey = req.headers["api-key"];
  myHeaders.append("Api-key", apiKey);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders
  };

  fetch("https://devcore02.cimet.io/v1/generate-token", requestOptions)
    .then(response => response.text())
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      res.json({ error });
    });
}


