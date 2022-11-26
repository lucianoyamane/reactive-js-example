const { init } = require('./store');

function main() {

    let state = { value: 0 };

    let store = init(state);

    store.increment(1);
    console.log('value incremented', state.value);
    store.increment(1);
    console.log('value incremented', state.value);
    store.decrement(1);
    console.log('value decremented', state.value);
    console.log('final value', state.value);

}

main();