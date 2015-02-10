define(['require', 'jquery', 'chai', '../src/quasiExcerpt'], function(require, $, chai) {
  var quasiExcerpt = require('../src/quasiExcerpt');
  var expect = require("chai").expect;

  describe('quasi-excerpt tests', function() {
    var node = null,
        backgroundColor = 'rgb(64, 128, 255)';

    beforeAll(function() {
      var styleNode = $('<style>.mock:before {background-color:' + backgroundColor + ';}</style>');
      $('body').append(styleNode);
    });

    beforeEach(function() {
      node = $("<div>Mock Content</div>").addClass('mock');
      $('body').append(node);
    });

    afterEach(function() {
        if (node) {
          node.remove();
        }
    });

    it('should return correct value for background-color', function() {
        var value = quasiExcerpt.getPseudoStylePropertyValue('.mock', 'before', 'background-color');
        expect(value).to.equal(backgroundColor);
    });

    it('should return correct value for property that is not set', function() {
      var value = quasiExcerpt.getPseudoStylePropertyValue('.mock', 'before', 'border');
      expect(value).to.equal('');
    });

    it('should return default style for invalid pseudo selector', function() {
        var value = quasiExcerpt.getPseudoStylePropertyValue('.mock', 'invalid', 'background-color');
        expect(value).to.equal('rgba(0, 0, 0, 0)');
    });

    it('should return null for invalid selector', function() {
        var value = quasiExcerpt.getPseudoStylePropertyValue('.invalidMock', 'before', 'background-color');
        expect(value).to.be.null();
    });
  });
});
