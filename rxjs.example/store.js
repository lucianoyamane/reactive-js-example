const { Observable } = require('rxjs');

const state = { value: 0 }

const observable = new Observable();
   
const incrementedObserver = observable.subscribe(x => state.value += x);

const decrementedObserver = observable.subscribe(x => state.value -= x);

function main() {
    incrementedObserver.next(1);
    console.log('value incremented', state.value);
    incrementedObserver.next(1);
    console.log('value incremented', state.value);
    decrementedObserver.next(1);
    console.log('value decremented', state.value);
    console.log('final value', state.value);
}

main();