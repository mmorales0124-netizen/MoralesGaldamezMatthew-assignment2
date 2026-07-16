/*    CIS 2336 Fall 2025 Assignment 2

      Celsius <-> Farenheit Coverter
      Author: Matthew Morales Galdamez
      Date:   7/15/2026

      Filename: temperatureConversions.js
 */

      function fahrenheitToCelsius(fTemp) {
    let cTemp = (fTemp - 32) * 5 / 9;
    return cTemp;
}
 


function celsiusToFahrenheit(cTemp) {
    let fTemp = cTemp * 9 / 5 + 32;
    return fTemp;
}

console.log( fahrenheitToCelsius(32) );
console.log( fahrenheitToCelsius(212) );
console.log( celsiusToFahrenheit(0) );
console.log( celsiusToFahrenheit(100) );
