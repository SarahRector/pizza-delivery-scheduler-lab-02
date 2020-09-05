const Schedule = require('./schedule-class');
const Order = require('./order-class');

describe('schedule class', () => {
  const schedule = new Schedule();
  const newOrder = new Order('sarahs order', 20, 0);
  it('can return the first minute that is unscheduled', () => {

    expect(schedule.nextOpenMinute()).toEqual(0);
  });
  it('can take an order and add that order to the schedule according to the orders startMinute and deliveryMinute', () => {
    schedule.addOrder(newOrder);

    expect(schedule.freeWindow(0, 41)).toBeFalsy();
    expect(schedule.freeWindow(41, 50)).toBeTruthy();
  });
  it('tests if clear works', () => {
    schedule.clear();
      
    expect(schedule.nextOpenMinute()).toEqual(0);
  });
  it('prints the schedule', () => {
    console.table = jest.fn();
    const schedule = new Schedule();
    const order = new Order ('pizza order', 40, 20);
    schedule.addOrder(order);

    schedule.print();

    expect(console.table).toHaveBeenCalledWith([
      { start: 0, end: 40, status: 'Busy' },
      { start: 41, end: 1439, status: 'Open' }
    ]);
  });
});
