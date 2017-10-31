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
      if ( typeof obj[ property ] == "object" && !( Array.isArray( obj[ property ] ) ) ) {
          let stack;
          key == undefined ? stack = property : stack = key + '.' + property;
          result.push( ...displayProps( obj[ property ], stack ));
      } else if ( typeof obj[ property ] !== "function" ) {
        key == undefined ? result.push( property ) : result.push( key + '.' + property );
      }

  }
  return result;
}

console.log( displayProps( object ) );

  module.exports = {
    displayProps,
};
