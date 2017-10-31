const { expect } = require( "chai" );
const { displayProps } = require( "../iterateFunction" );

const obj = {
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

describe( "iterateFunction", function() {
    it( "should return an array with all the properties", function() {
        let result = displayProps(obj);
        expect(result).to.be.eql([ 'user.name',
        'user.age',
        'user.contact.phone',
        'user.contact.address.street',
        'user.contact.address.number',
        'account' ]);
    } );
    it( "should return an empty array if no valid properties were found", function() {
        const obj = {
            someFunction(){
              console.log("here");
            },
        }
        let result = displayProps(obj);
        expect(result).to.be.eql([]);
    } );
} );
