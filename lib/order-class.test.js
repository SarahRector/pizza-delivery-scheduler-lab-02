const Order = require('./order-class');

describe('order class', () => {
  it('can hold information about an order', () => {
    const order = new Order('Sarahs killer pizza', 50, 20);

    expect(order.name).toEqual('Sarahs killer pizza');
    expect(order.deliveryMinute).toEqual(50);
    expect(order.startMinute).toEqual(10);
    
  });
});
