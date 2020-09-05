const Driver = require('./driver-class');
const Order = require('./order-class');
const Parlor = require('./parlor-class');

describe('parlor class', () => {
  it('adds a driver', () => {
    const newParlor = new Parlor();
    const Spud = new Driver('Spud');
    const order = new Order('sarahs order', 50, 10);

    newParlor.addDriver()
  });
});

