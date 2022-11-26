const { Observable } = require('rxjs');

class Store {

    constructor(state) {
        this.observable = new Observable();
        this.config(state);
    }

    config(state) {       
        this.incrementedObserver = this.observable.subscribe(x => state.value += x);        
        this.decrementedObserver = this.observable.subscribe(x => state.value -= x);
    }

    increment(x) {
        this.incrementedObserver.next(x);
    }

    decrement(x) {
        this.decrementedObserver.next(x);
    }
}

module.exports.init = (state) => new Store(state); 