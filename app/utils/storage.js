export default Ember.Object.extend({
  store(data) {
    var keys = Ember.A();
    for(var k in data) {
      keys.push(k);
    }

    keys.forEach(function(item) {
      localStorage.setItem(item, data[item]);
    });
  },
  fetch() {
    var keys     = Ember.A(Array.prototype.slice.call(arguments));
    var contents = {};
    keys.forEach(function(item) {
      contents[item] = localStorage.getItem(item);
    });

    return contents;
  },
  nullItems() {
    var keys = Ember.A(Array.prototype.slice.call(arguments));

    keys.forEach(function(item) {
      localStorage.removeItem(item);
    });
  },
  exists(key) {
    if (!localStorage.getItem(key)) {
      return false;
    } else {
      return true;
    }
  }
});
