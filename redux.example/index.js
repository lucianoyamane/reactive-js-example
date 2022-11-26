const { store, incremented, decremented } = require('./store');

function main() {
    store.subscribe(() => console.log(store.getState()))
  
    // Still pass action objects to `dispatch`, but they're created for us
    store.dispatch(incremented())
    // {value: 1}
    
    store.dispatch(incremented())
    // {value: 2}
    
    store.dispatch(decremented())
    // {value: 1}

}

main();