'use strict';

const { expect } = require('chai');
const sinon = require('sinon');
const funcs = require('.');

describe('Test index.js', () => {
  describe('add', () => {
    it('calculates sum', () => {
      expect(funcs.add(1, 2)).to.equal(3);
    });
  });

  describe('addAsync', () => {
    beforeEach('fake add function', () => sinon.stub(funcs, 'add').yields(null, 3));
    afterEach('reset add function', () => funcs.add.reset());
    after('restore add function', () => funcs.add.restore());

    it('calculates sum asyncronously', () => {
      const spy = sinon.spy();
      funcs.addAsync(1, 2, spy);
      sinon.assert.calledWith(spy, null, 3);
    });
  });
});
