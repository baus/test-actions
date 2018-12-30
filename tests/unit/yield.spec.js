import { expect } from 'chai';
import sinon from 'sinon';
import Store from '@/store';
import yields from '@/modules/yields.module';
import fetchMock from 'fetch-mock';

describe('store.js', () => {
  describe('mutations', () => {
    it('', () => {
      Store.commit('setYieldCount', { yieldCount: 10 });
      expect(Store.state.yields.yieldCount).to.equal(10);
    });
  });
  describe('actions', () => {
    beforeEach(() => {
      const body = [1, 2, 3, 4, 5];
      fetchMock.get('*', body);
    });
    it('unit tests `getYieldCount` by mocking commit and testing args set on commit', async () => {
      const commit = sinon.spy();
      await yields.actions.getYieldCount({ commit });
      expect(commit.firstCall.args[0]).to.equal('setYieldCount');
      expect(commit.firstCall.args[1]).to.deep.equal({ yieldCount: 5 });
    });
    it('tests `getYieldCount` functionally by calling dispatch and testing results directly on the store', async () => {
      await Store.dispatch('getYieldCount');
      expect(Store.state.yields.yieldCount).to.equal(5);
    });
    afterEach(() => {
      fetchMock.restore();
    });
  });
});
