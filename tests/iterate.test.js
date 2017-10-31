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
    it("should ignore all array properties and functions ",function(){
        const obj = {
            user: {
                name: "somename",
                age: 20,
                contact: {
                    phone: "074074074",
                    address: {
                        street: ["some street","some city"],
                        number: 30,
                    },
                },
            },
            someFunction() {
                console.log("here");
            },
            account: ["someaccount","some other account"],
          }
          let result = displayProps(obj);
          expect(result).to.be.eql([ 'user.name',
          'user.age',
          'user.contact.phone',
          'user.contact.address.street',
          'user.contact.address.number',
          'account' ]);
    } );
    it("should return an empty array if the given parameter is an array", function() {
        const obj = ["something","test"];
        let result = displayProps(obj);
        expect(result).to.be.eql([]);
    })
    it("should include also the innermost properties with the full path to them",function() {
        const obj = {
            user: {
                name: "somename",
                age: 20,
                contact: {
                    phone: "074074074",
                    address: {
                        homeAddress: {
                            current :{
                                street : "some street",
                            }
                        },
                        officeAddress: "office address",
                    },
                },
            },
        }
        result = displayProps(obj);
        expect(result).to.be.eql([ 'user.name',
        'user.age',
        'user.contact.phone',
        'user.contact.address.homeAddress.current.street',
        'user.contact.address.officeAddress' ]);
    } );
} );
