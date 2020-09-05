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
      this.#schedule.forEach((minute) => {
        minute === true ? this.#seeSchedule.push('Busy') : this.#seeSchedule.push('Open');
      });
      console.log(this.#seeSchedule);
    }

    addOrder(order) {
      for(let i = order.startMinute; i <= order.deliveryMinute; i++) {
        this.#schedule[i] = true;
      }
    }

    freeWindow(startMinute, deliveryMinute) {
      const window = this.#schedule.slice(startMinute, deliveryMinute);
      return window.find(item => item === true) ? true : false;
    }

}

module.exports = Schedule;
