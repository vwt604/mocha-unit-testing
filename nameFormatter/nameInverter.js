const nameInverter = function (name) {
  name = name.trim()
  let nameLength = name.split(" ").length;
  if (nameLength > 1) {
    let split = name.split(" ")
    return split[1] + ", " + split[0];
  }  
  if (name === " ") {
    return " ";
  }
  if (nameLength === 1) {
    return name;
  } 
};


console.log(nameInverter(' Vanessa '));
console.log(nameInverter('Vanessa Yeung'));









/*///////TESTS////////*/

// nameInverter('Vanessa')
// nameInverter('Vanessa Yeung')
// nameInverter('Dr. Vanessa Yeung')







// const nameInverter = function (name) {
//   const nameObj = { name };


//   if (name === '') {
//     return '';
//   }
//   // if (name.length > 1 && (!= include " ")) {
//   //   console.log (name);
//   // }
//   if (name.includes(' ')) {
//     return name.trim();
//   }
//   if (name === name) {
//     const splitName = name.split(" ")
//     return splitName[1] + ", " + splitName[0]
//   }
//   if (name.length <= 3 && name.includes(".")) {
//     return '';
//   }
//   return name;
// };


// nameInverter('Vanessa');
// console.log('length return', nameInverter.length)



module.exports = nameInverter;



