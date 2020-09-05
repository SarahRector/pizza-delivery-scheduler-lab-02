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

    schedule.print();

    expect(schedule.nextOpenMinute()).toEqual(21);
  });
  it('tests to see if a window of time is free or not', () => {

    expect(schedule.freeWindow(0, 20)).toEqual(true);
  });
  it('tests if clear works', () => {
    schedule.clear();
      
    expect(schedule.nextOpenMinute()).toEqual(0);
  });
});
