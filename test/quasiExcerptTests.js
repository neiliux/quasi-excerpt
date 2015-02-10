define(['require', 'chai', '../src/quasiExcerpt'], function(require, chai) {
  var quasiExcerpt = require('../src/quasiExcerpt');
  var expect = require("chai").expect;

  describe('foo', function() {
    it('should fail', function() {
      expect(2).to.equal(1);
    });
  });
});
