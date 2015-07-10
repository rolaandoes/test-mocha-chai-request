var request = require('request')
var expect = require('chai').expect ,
index = ('../index.js');

// describe("")
describe('localhost:3000/users/', function(){
  it('should have a HTTP of 200 - success', function(done){
    request('http://localhost:3000/users', function(err, res, body){
      expect(res.statusCode).to.equal(200)
      // expect(res.statusCode).to.equal(300)
      console.log(err);
      done();
 	 });
    });
  });
  describe('amazon', function(){
  it("should have a http of amazon of 200 - success", function(done){
  	request("http://www.amazon.com/", function(err, res, body){
  		console.log(err);
  		done();
  	});
  });
});
  describe('google', function(){
  it("should have a localHost - success", function(done){
  	request("http://www.google.com",function(err, res, body){
  		console.log(err);
  		done();
  	});
  });
});