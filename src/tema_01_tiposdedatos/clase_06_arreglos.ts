
(() => {

    //const numbers:(number | string)[] = [1,2,3,4,5];
    const numbers:(number)[] = [1,2,3,4,5];


    numbers
    .filter(e => e >= 3)
    .map(e => e ** 2)
    .forEach(e => console.log(e));

    numbers.push(100)

})()