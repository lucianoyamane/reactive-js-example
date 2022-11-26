const { Observable } = require('rxjs');



const observable = new Observable();
   
const incremented = observable.subscribe({
    next(x) {
        console.log(x + 1);
    },
    error(err) {
        console.error('something wrong occurred incremented: ' + err);
    },
    complete() {
        console.log('done incremented');
    },
});

const decremented = observable.subscribe({
    next(x) {
        console.log(x - 1);
    },
    error(err) {
        console.error('something wrong occurred decremented: ' + err);
    },
    complete() {
        console.log('done decremented');
    },
});

function main() {
    incremented.next(1);
    incremented.next(1);
    decremented.next(1);
}

main();