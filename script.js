// TASK1
let radius = prompt("write a number", 0);

function getArea(radius) {
    return (radius * radius * Math.PI);
}
let area = getArea(radius);

if (isNaN(radius)) {
    console.log("Повинно бути числове значення")
} else if (radius.length === 0) {
    console.log('Будь ласка, введіть радіус!')
} else {
    console.log(area.toFixed(1) + ' квадратних сантиметрів');
}




// TASK2
let sqrtNum = prompt('write a number', 0);

function getSqrt(sqrtNum) {
    return (Math.sqrt(sqrtNum))
}
if (isNaN(sqrtNum)) {
    console.log("Повинно бути числове значення")
} else if (sqrtNum.length === 0) {
    console.log('Будь ласка, введіть число!')
} else if (sqrtNum < 0) {
    console.log('Введіть додатнє число.')
} else {
    console.log(getSqrt(sqrtNum));
}



// TASK3
let MyMath = {};

MyMath.PI = 3.14;


MyMath.pow = function (askPow, askPowDegree) {
    askPow = prompt('write a number')
    askPowDegree = prompt('write a number')
    let result = 1;
    for (i = 0; i < askPowDegree; i++) {
        result *= askPow;
    }
    if (isNaN(askPow || askPowDegree)) {
        console.log("Повинно бути числове значення")
    } else if (askPow.length === 0 || askPowDegree.length === 0) {
        console.log('Будь ласка, введіть числа!')
    } else {
        return console.log(result);
    }
}
MyMath.pow();


MyMath.abs = function (askAbs) {
    askAbs = prompt('write a number');
    if (isNaN(askAbs)) {
        console.log("Повинно бути числове значення")
    } else if (askAbs.length === 0) {
        console.log('Будь ласка, введіть число!')
    } else {
        if (askAbs <= 0) {
            return console.log(0 - askAbs);
        } else {
            return console.log(askAbs);
        };
    }
}
MyMath.abs();

MyMath.max = function (askMax, data) {
    data = [];
    while (true) {
        askMax = prompt('write a number')
        data.push(askMax);
        if (askMax.length === 0) break;
        else if (isNaN(askMax)) {
            console.log("Повинно бути числове значення")
            break;
        }
    };
    data.pop();
    let arr = data.map(Number);
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return console.log(largest);
}
MyMath.max();

MyMath.min = function (askMin, data) {
    data = [];
    while (true) {
        askMin = prompt('write a number')
        data.push(askMin);
        if (askMin.length === 0) break;
        else if (isNaN(askMin)) {
            console.log("Повинно бути числове значення")
            break;
        }
    };
    data.pop();
    let arr = data.map(Number);
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return console.log(smallest);
}
MyMath.min();