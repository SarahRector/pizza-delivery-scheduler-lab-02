class Schedule {
    #schedule = [...Array(1440)].fill(false);
    #seeSchedule = [];

    nextOpenMinute() {
      return this.#schedule.findIndex(m => !m) ;
    }

    clear() {
      this.#schedule = [...Array(1440)].fill(false);
    }

    print() {
      const schedule = this.#schedule.reduce((acc, minute, i) => {
        if(this.#schedule[i - 1] === minute) {
          acc[acc.length - 1] = { ...acc[acc.length - 1], end: i };
        } else {
          acc.push({ start: i, end: i, status: minute ? 'Busy' : 'Open' });
        }

        return acc;
      }, []);
      console.table(schedule);
    }

    addOrder(order) {
      for(let i = order.startMinute; i <= order.deliveryMinute; i++) {
        this.#schedule[i] = true;
      }
    }

    // freeWindow(startMinute, deliveryMinute) {
    //   const window = this.#schedule.slice(startMinute, deliveryMinute);
    //   return window.find(item => item === true) ? true : false;
    // }

    freeWindow(startMinute, endMinute) {
      return this.#schedule
        .slice(startMinute, endMinute)
        .every(minute => !minute);
    }

}

module.exports = Schedule;
