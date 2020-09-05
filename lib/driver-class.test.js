const Driver = require('./driver-class');
const Schedule = require('./schedule-class');

describe('driver-class', () => {
  it('holds information about a driver', () => {
    const driver = new Driver('Spud');

    expect(driver.name).toEqual('Spud');
    expect(driver.currentSchedule).toEqual(expect.any(Schedule));

  });
});
