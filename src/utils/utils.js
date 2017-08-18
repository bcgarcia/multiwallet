/**
 * Checks if any elements of a JSON object are empty
 * @param  {object} elements The object that should be checked
 * @return {boolean}         True if there are empty elements, false if there aren't
 */
export function anyElementsEmpty(elements) {
  for (let element in elements) {
    if (!elements[element]) {
      return true;
    }
  }
  return false;
}



/**
 * convert an array in string 
 * @param  {array} array The array data
 * @return {string} Formatted string
 */
function toString(array){
    let str = '';
    array.map( (value)=>{str+=value+'<br>'} )
    return str;
}


