import { moduleFor, test } from 'ember-qunit';

moduleFor('service:normalizer', 'Unit | Service | normalize range', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

// Replace this with your real tests.
test('it should return the desired number of elements', function(assert) {
  var service = this.subject();
  var dataSet = [1, 2, 3];

  assert.equal(service.normalizeRange(dataSet, 2).length, 2);
});

test('it should pick an evenly distributed elements', function(assert) {
  var service = this.subject();
  var dataSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  assert.deepEqual(service.normalizeRange(dataSet, 3), [1, 4, 7]);
});

