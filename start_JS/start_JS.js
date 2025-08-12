// const a = 1;
// const b = 1;
// const c = 1;

// function funcA() {
//     const b = 2;
//     const c = 2;

//     console.log("2", a, b, c);
//     funcB();
// }

// function funcB() {
//     const c = 3;

//     console.log("3", c, b, c);
// }

// console.log("1", a, b, c);
// funcA();

// ============================================================

// JavaScript(심화) 223p

function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    }
}

const counter = createCounter()

console.log(counter());
console.log(counter());
console.log(counter());