import Storage from '../../../utils/storage';
import { module, test } from 'qunit';

// Replace this with your real tests.
module('Unit | Utility | local storage', {
  beforeEach() {
    this.storage = new Storage();
    this.storageItems = {
      someOtherKey: "some other value",
      someKey: "some value"
    };
  }
});

test('.store adds key value object to localStorage', function(assert) {
  this.storage.store(this.storageItems);
  assert.equal(localStorage.getItem('someKey'), 'some value');
});

test('.fetch returns a JSON object for given keys', function(assert) {
  var storageContents = this.storage.fetch('someKey', 'someOtherKey');
  assert.deepEqual(this.storageItems, storageContents);
});

test('.nullItems removes items of the given key', function(assert) {
  this.storage.nullItems('someKey', 'someOtherKey');
  assert.deepEqual(localStorage.getItem('someKey'), null);
  assert.deepEqual(localStorage.getItem('someOtherKey'), null);
});

test('.exists', function(assert) {
  localStorage.setItem('someKey', 'cats');
  assert.ok(this.storage.exists('someKey'));
  localStorage.removeItem('someKey');
  assert.notOk(this.storage.exists('someKey'));
});

