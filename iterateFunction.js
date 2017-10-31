const object = {
  user: {
      name: "somename",
      age: 20,
      contact: {
          phone: "074074074",
          address: {
              street: "some street",
              number: 30,
          },
      },
  },
  someFunction() {
      console.log("here");
  },
  account: "someaccount",
}

function displayProps(obj, key) {
  let result = [];
  for ( var property in obj ) {
      if ( typeof obj[property] == "object" ) {
          if ( key !== undefined ) {
              result.push( ...displayProps( obj[property], key + '.' + property ) );
          } else {
              result.push( ...displayProps( obj[property], property ) );
          }
      } else if ( typeof obj[property] !== "function" ) {
          if ( key !== undefined ) {
              result.push( key + '.' + property );
          } else {
              result.push( property );
          }
      }

  }
  return result;
}

console.log( displayProps( object ) );

  module.exports = {
    displayProps,
};
