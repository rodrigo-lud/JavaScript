
console.log('*** First round - Easy level ***')

// Q1. Return a sum of two numbers 
function sum(a, b) {
    return a + b;
}

console.log(sum(-2, -3));

// Q2. Convert hours into seconds
function hoursIntoSeconds(hours) {
    return hours * 3600;
}

console.log(hoursIntoSeconds(24));

// Q3. Calculate a perimeter of a rectangle
function calcPerimeter(h, w) {
    return 2 * (h + w);
}

console.log(calcPerimeter(6, 7));

// Q4. Calculate the area of a triangle
function calcTriangleArea(base, height) {
    return 0.5 * base * height;
}

console.log(calcTriangleArea(3, 2));

// Q5. Extend a string - add the name 'Frontend' at the end of a string
function appendFrontend(str) {
    return str + 'Frontend';
}
console.log(appendFrontend('Apple'));

// Q6. Return true if the sum of two numbers is greater than 100
function sumGreaterThan100(a, b) {
    return a + b > 100;
}

console.log(sumGreaterThan100(50, 51));

// Q7. Retur thrue i the number is iqual or less than zero
function isLessThanOrEqualToZero(num) {
    return num <= 0;
}

console.log(isLessThanOrEqualToZero(3));
console.log(isLessThanOrEqualToZero(0));
console.log(isLessThanOrEqualToZero(-1));

// Q8. Return a opposite boolean value
function oppositeBoolean(bool) {
    return !bool;
}

console.log(oppositeBoolean(true));

// Q9. Retur true if it's not zero
function isNotZero(num) {
    return num !== 0;
}
console.log('Q9');
console.log(isNotZero(1));
console.log(isNotZero(0));

// Q10. Return the rest of a division

function calcReminder(a, b) {
    return a % b;
}

console.log('Q10');
console.log(calcReminder(10, 3));
console.log(calcReminder(7, 8));

// Q11. Return true if it's odd
function isOdd(num) {
    return num % 2 !== 0
}
console.log('Q11');
console.log(isOdd(3));

// Q12. If it's even return 1, otherwise return -1
function isEven(num) {
    return num % 2 === 0 ? 1 : -1;
}
console.log('Q12');
console.log(isEven(2))
console.log(isEven(5))


// Q13. Check if the user is 'LOGGED_IN' and 'SUBSCRIBED'

function isLoggedInAndSubscribed(loggedRef, subscribedRef) {
    return loggedRef === 'LOGGED_IN' && subscribedRef === 'SUBSCRIBED';
}

console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'))

console.log('*** Seccond round - Medium level ***')

// 2Q1. Return the first element if it's falsy, otherwise return the second element
function filterOutFalsy(v1, v2) {
    return !v1 ? v1 : v2;

}

console.log(filterOutFalsy(0, 1));
console.log(filterOutFalsy(false, 1));
console.log(filterOutFalsy(1, 2));
console.log(filterOutFalsy('', 2));

// 2Q2. Return the length of any given array
function arrayLenght(arr) {
    return arr.length;
}
console.log(arrayLenght([1, 2, 3, 4, 5]));
console.log(arrayLenght(['a', 'b', 'c', 'd', 'e']));
console.log(arrayLenght([]));

// 2Q3. Return the last element of any given array
function arrayLast(arr) {
    return arr[arr.length - 1];
}
console.log(arrayLast([-5, 2, 3, 4, 5]));

// 2Q4. Return the sum of an array
function arraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(arraySum([-5, 2, 3, 4, 5]));


//2Q5. Add up all the numbers from one to the given number
function progressiveSum(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

console.log(progressiveSum(3));

//2Q6. Given a number in seconds (less than 6000), return it in mm:ss format (minutes:seconds)
function calcTime(num) {
    if (num >= 6000) return 'Out of range';
    let minutes = Math.floor(num / 60);
    let seconds = num % 60;
    return minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
}

console.log(calcTime(187));

//2Q7. Return the largest number in an array
function getMax(arr) {
    //return Math.max(...arr);
    let max = arr[0];
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}

console.log(getMax([1, 20, 3, 4, 5]));
console.log(getMax([-100, -200, -300]));

//2Q8. Return the reverse string of a given string
function reverseString(str) {
    //return str.split('').reverse().join('');
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString('Hello'));

function reverseString2(str) {
    let reversed = '';
    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }
    return reversed;
}
console.log(reverseString2('Hello'));

function reverseString3(str) {
    return str.split('').reverse().join('');
}

// split() - splits a string into an array of substrings
// reverse() - reverses the elements in an array
// join() - joins all elements of an array into a string

console.log(reverseString3('Hello'));

//2Q9. Turn evey element of an array into zero

function convertoToZerro(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = 0;
    }
    return arr;
}
console.log(convertoToZerro([1, 2, 3, 4, 5]));

function convertoToZerro2(arr) {
    return arr.fill(0);
}
console.log(convertoToZerro2([1, 2, 3, 4, 5]));

function convertoToZerro3(arr) {
    return arr.map(i => i = 0);
    //return arr.map(i => 0);
}
console.log(convertoToZerro3([1, 2, 3, 4, 5]));

//2Q10. Filter out all the apples from an array

function removeApples(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'apple') {
            delete arr[i]
        }
    }
    return arr;
}

console.log(removeApples(['apple', 'banana', 'apple', 'orange', 'apple']));

function removeApples2(arr) {
    return arr.filter(f => f !== 'apple');
}
console.log(removeApples2(['apple', 'banana', 'apple', 'orange', 'apple']));

function removeApples3(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 'apple') {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(removeApples3(['apple', 'banana', 'apple', 'orange', 'apple']));

//2Q11. Filter out all falsy values from an array

function filterOutFalsyValues(arr) {
    return arr.filter(elem => !!elem)
}
console.log(filterOutFalsyValues([1, 2, 0, '', false, 15]))


//2Q12. Given an array, return it into its true or false values

function convertToBoolean(arr) {
    return arr.map(elem => !!elem);
}
console.log(convertToBoolean([1, 2, 0, '', false, 15]))

console.log('*** Third round - Hard level ***')

// 3Q1. Given a rating, return "*" for each full rating and "." for each half rating - ex.: 3.5 -> "* * * ."; 2 -> "* *"

function showRating(rating) {
    let result = "";
    for (let i = 0; i < Math.trunc(rating); ++i) result += "* ";
    result = result.trim();

    if (rating - Math.trunc(rating) === 0.5) result += " .";

    return result;
}

console.log(showRating(3.5))


//3Q2 Return an array of numbers sorted by low to high 
function sortLowToHigh(arr) {
    return arr.sort((a, b) => a - b);
}
console.log(sortLowToHigh([2, 20, 5, 7, 0, 10]));


//3Q3 Return an array of objects sorted by high to low  
function sortHighToLow(arr) {
    return arr.sort((a, b) => b.price - a.price);
}
console.log(sortHighToLow([
    { id: 0, price: 50 },
    { id: 1, price: 30 },
    { id: 2, price: 60 },
    { id: 3, price: 10 }
]));


//3Q4 See de videos...

//3Q5 Return all posts from the link: https://jsonplaceholder.typicode.com/posts

/**
 * Fetches posts by a specific user from the API.
 * @param {number} userId - The ID of the user whose posts are to be fetched.
 * @returns {Promise<Array>} - A promise that resolves to an array of posts by the user.
 */
async function postByUser(userId) {
    //const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${Id}`);

    const promise = await fetch('https://jsonplaceholder.typicode.com/posts');
    const result = await promise.json();
    const posts = result.filter((elem) => elem.userId === userId);
    console.log(`3Q5 Return posts from the link: https://jsonplaceholder.typicode.com/posts where userID=${userId}`)
    console.log(posts);
}

postByUser(4);

//3Q6. Return the first 6 incomplets todos from https://jsonplaceholder.typicode.com/todos

// async function firstSixIncomplete() {
//     const promise = await fetch('https://jsonplaceholder.typicode.com/todos');
//     const result = await promise.json();
//     let result2 = [];
//     let count = 0;
//     for (let i = 0; i < result.length && count < 6; ++i) {
//         if (!result[i].completed) {
//             result2.push(result[i]);
//             count++;
//         }
//     };
//     console.log('3Q6. Return the first 6 incomplets todos from https://jsonplaceholder.typicode.com/todos');
//     console.log(result2);

// }

// firstSixIncomplete();


//3Q6. Return the first 6 incomplete todos from https://jsonplaceholder.typicode.com/todos
async function firstSixIncomplete() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const result = await response.json();
        const incompleteTodos = [];
        for (let i = 0; i < result.length && incompleteTodos.length < 6; i++) {
            if (!result[i].completed) {
                incompleteTodos.push(result[i]);
            }
        }
        console.log('First 6 incomplete todos:', incompleteTodos);
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
}

firstSixIncomplete();