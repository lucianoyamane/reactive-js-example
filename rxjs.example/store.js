const { Observable } = require('rxjs');

const state = { value: 0 }

const observable = new Observable();
   
const incrementedObserver = observable.subscribe({
    next(x) {
        state.value += x;
    },
    error(err) {
        console.error('something wrong occurred incremented: ' + err);
    },
    complete() {
        console.log('final value', state.value);
    },
});

const decrementedObserver = observable.subscribe({
    next(x) {
        state.value -= x;
    },
    error(err) {
        console.error('something wrong occurred decremented: ' + err);
    },
    complete() {
        console.log('final value', state.value);
    },
});

function main() {
    incrementedObserver.next(1);
    console.log('value incremented', state.value);
    incrementedObserver.next(1);
    console.log('value incremented', state.value);
    decrementedObserver.next(1);
    console.log('value decremented', state.value);
    console.log('final value', state.value);
    incrementedObserver.complete();
    decrementedObserver.complete();
}

main();