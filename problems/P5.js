// simple recursion
function countDown(num) {
    if (num <= 0) {
        console.log('All done!')
        return;
    }
    console.log(num);
    num--
    countDown(num);
}

function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}

// more recursion

function findOdds(arr) {
    let newArr = [];
    if (arr.length === 0) return newArr;
    if (arr[0] % 2 !== 0) newArr.push(arr[0])

    newArr = newArr.concat(findOdds(arr.slice(1)));

    return newArr;
}