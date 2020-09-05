const Driver = require('./driver-class');
const Order = require('./order-class');
const Parlor = require('./parlor-class');

describe('parlor class', () => {
  it('adds a driver', () => {
    const parlor = new Parlor();
    const driver = new Driver('Spud');

    parlor.addDriver(driver);
  });

  it('can add orders', () => {
    const parlor = new Parlor();
    const order = new Order('pizza order', 50, 20);

    parlor.addOrder(order);
  });

  it('prints a schedule', () => {
    console.table = jest.fn();
    const parlor = new Parlor();

    const order1 = new Order('veggie pizza', 30, 10);
    parlor.addOrder(order1);

    const order2 = new Order('meat pizza', 50, 20);
    parlor.addOrder(order2);

    const order3 = new Order('super cheese pizza', 60, 5);
    parlor.addOrder(order3);

    const kelly = new Driver('kelly');
    parlor.addDriver(kelly);

    const milton = new Driver('milton');
    parlor.addDriver(milton);

    parlor.printSchedule();

    expect(console.table).toHaveBeenCalledWith([
      { start: 0, end: 30, status: 'Busy' },
      { start: 31, end: 34, status: 'Open' },
      { start: 35, end: 60, status: 'Busy' },
      { start: 61, end: 1439, status: 'Open' },
    ]);

    // expect(console.table).toHaveBeenCalledWith([
    //   { start: 0, end: 9, status: 'Open' },
    //   { start: 10, end: 9, status: 'Busy' },
    //   { start: 51, end: 1439, status: 'Open' },
    // ]);

  });
});

