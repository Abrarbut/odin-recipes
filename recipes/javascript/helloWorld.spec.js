const helloWorld = require('../javascript/helloworld');

describe('Hello World', function() {
  test('says "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});