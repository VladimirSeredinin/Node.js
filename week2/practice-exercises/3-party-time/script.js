
/**
 * 3: Party time
 * 
 * After reading the documentation make a request to https://reservation100-sandbox.mxapps.io/rest-doc/api
 * and print the response to the console. Use async-await and try/catch.
 * 
 * Hints:
 * - make sure to use the correct headers and http method in the request
 */
import fetch from 'node-fetch';

async function makeReservation() {
  try {
    const reservation = {
      'name': 'Vlady Seredinin',
      'numberOfPeople': 5,
    };
    const response = await fetch(
      'https://reservation100-sandbox.mxapps.io/rest-doc/api',
      {
        'method': 'POST',
        'headers': { 'Content-type': 'application/json' },
        'body': JSON.stringify(reservation)
      }
    );
    if (response.ok) {
      console.log('We at the ParTY!!!');
    }
  } catch (error) {
    console.error(error);
  }
}
makeReservation();