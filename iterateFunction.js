const object = {
    user: {
        name: "somename",
        age: 20,
        contact: {
            phone: "074074074",
            address: {
                homeAddress: {
                    current : {
                        street : "some street",
                    }
                },
                officeAddress: "office address",
            },
        },
    },
}

function displayProps( obj, key = '' ) {
  let result = [];
  if ( Array.isArray( obj ) ) {
      return result;
  }
  for ( var property in obj ) {
    let stack;
    key == '' ? stack = property : stack = key + '.' + property;
      if ( typeof obj[ property ] == "object" && !( Array.isArray( obj[ property ] ) ) ) {
          result.push( ...displayProps( obj[ property ], stack ));
      } else if ( typeof obj[ property ] !== "function" ) {
        result.push(stack);
      }

  }
  return result;
}

console.log( displayProps( object ) );

  module.exports = {
    displayProps,
};
