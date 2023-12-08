const assert = require('assert');

function testTimeToWords() {
  assert.strictEqual(timeToWords('00:00'), 'midnight');
  assert.strictEqual(timeToWords('00:12'), 'twelve twelve am');
  assert.strictEqual(timeToWords('01:00'), 'one o’clock am');
  assert.strictEqual(timeToWords('06:01'), 'six oh one am');
  assert.strictEqual(timeToWords('06:10'), 'six ten am');
  assert.strictEqual(timeToWords('06:18'), 'six eighteen am');
  assert.strictEqual(timeToWords('06:30'), 'six thirty am');
  assert.strictEqual(timeToWords('10:34'), 'ten thirty four am');
  assert.strictEqual(timeToWords('12:00'), 'noon');
  assert.strictEqual(timeToWords('12:09'), 'twelve oh nine pm');
  assert.strictEqual(timeToWords('23:23'), 'eleven twenty three pm');
}

testTimeToWords();
console.log('All tests passed!');