
/**
 * 2. Authentication
 * 
 * Using node-fetch make an authenticated request to https://restapiabasicauthe-sandbox.mxapps.io/api/books
 * Print the response to the console. Use async-await and try/catch.
 * 
 * Hints:
 * - for basic authentication the username and password need to be base64 encoded
 */
import fetch from 'node-fetch';

async function printBooks() {
  const credentialsBase64 = 'YWRtaW46aHZnWDhLbFZFYQ';
  const restURL = 'https://restapiabasicauthe-sandbox.mxapps.io/api/books';
  try {
    const response = await fetch(
      restURL,
      {
        'method': "GET",
        'headers': { 'Authorization': `Basic ${credentialsBase64}` };
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
printBooks();