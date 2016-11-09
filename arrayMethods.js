// DO NOT MODIFY
var genericNumberArray = [1, 2, 3, 4, 5];
var colors = ['Blue', 'Red', 'Yellow', 'Charlie'];
var scrambledWords = ['win', 'the', 'for', 'burritos'];
var phoneNumber = [9, 0, 3, 5, 7, 6, 8];
var orderQueue = [{ takeOut: 'Ice Cream' }, { takeOut: 'Medium Salad'}, { takeOut: 'Burger'}];
var mixedNums = [5, 81, 40, 4, 805, 10, 76, 21, 3, 2, 7, 1, 7];
var mixedWords = ['Dont', 'You', 'Forget', 'About', 'Me'];
var fruitCollection = ['Apple', 'Scissors', 'Pug', 'Lady Bug', 'Banana', 'Pear'];
var gemBox = ['Ruby', 'Diamond', 'Diamond', 'Emerald', 'Moonstone', 'Pizza', 'Sneaker', 'Sapphire', 'Baby', 'Jeans', 'Soda Can', 'Boat'];
var upToTen = [1, 2, 9, 10];
var brownOnly = ['brown', 'brownish', 'ad8fy7iuhj23nrsf', 9813, {}, undefined,  'brown'];
var orderedValues = [4, 5, 6, 7, 8, 9, 10];
var friends = ['Todd', 'Jacoby', 'Miko', 'Joseph', 'Kevin', 'Todd C.'];
var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
var bulkNumbers = [5, 5, 6, 6, 9, 9, 2, 2, 2, 5, 2];

// do your work below!
// push()
var nameArray = [];
var addName = nameArray.push("Gina", "Galante");
console.log(nameArray);

var genericNumberArray = [1, 2, 3, 4, 5];
var addNumbers = genericNumberArray.push(6, 7, 8, 9, 10);
console.log(genericNumberArray);

// pop()
var colors = ['Blue', 'Red', 'Yellow', 'Charlie'];
var removeLast = colors.pop();
console.log(colors);

var popResult = removeLast;
console.log(popResult);

// reverse()
var scrambledWords = ['win', 'the', 'for', 'burritos'];
var reverseWords = scrambledWords.reverse();
console.log(scrambledWords);

var phoneNumber = [9, 0, 3, 5, 7, 6, 8];
var reverseNumbers = phoneNumber.reverse();
console.log(phoneNumber);

// shift()
var orderQueue = [{ takeOut: 'Ice Cream' }, { takeOut: 'Medium Salad'}, { takeOut: 'Burger'}];
var removeFirst = orderQueue.shift();
console.log(orderQueue);

var nextOrder = removeFirst;
console.log(nextOrder);

// sort()
var mixedNums = [5, 81, 40, 4, 805, 10, 76, 21, 3, 2, 7, 1, 7];
var sortNums = mixedNums.sort();
console.log(mixedNums);
console.log(mixedNums.length);

var mixedWords = ['Dont', 'You', 'Forget', 'About', 'Me'];
var sortWords = mixedWords.sort();
console.log(mixedWords);
console.log(mixedWords.length);

// splice()
var fruitCollection = ['Apple', 'Scissors', 'Pug', 'Lady Bug', 'Banana', 'Pear'];
var onlyFruits = fruitCollection.splice(1, 3);
console.log(fruitCollection);
console.log(fruitCollection.length);

var fruitCollection = ['Apple', 'Scissors', 'Pug', 'Lady Bug', 'Banana', 'Pear'];
var notFruit = fruitCollection.splice(1, 3);
console.log(notFruit);
console.log(notFruit.length);

var gemBox = ['Ruby', 'Diamond', 'Diamond', 'Emerald', 'Moonstone', 'Pizza', 'Sneaker', 'Sapphire', 'Baby', 'Jeans', 'Soda Can', 'Boat'];
var notGems1 = gemBox.splice(5, 2);
var notGems2 = gemBox.splice(6, 4);
console.log(gemBox);
console.log(gemBox.length);

// insertingElements
var upToTen = [1, 2, 9, 10];
var insertNumbers = upToTen.splice(2, 0, 3, 4, 5, 6, 7, 8);
console.log(upToTen);
console.log(upToTen.length);

// "why not both?"
var brownOnly = ['brown', 'brownish', 'ad8fy7iuhj23nrsf', 9813, {}, undefined,  'brown'];
var insertBrown = brownOnly.splice(1, 5, 'brown', 'brown', 'brown');
console.log(brownOnly);
console.log(brownOnly.length);

// unshift()
var orderedValues = [4, 5, 6, 7, 8, 9, 10];
var insertValues = orderedValues.unshift(1, 2, 3);
console.log(orderedValues);
console.log(orderedValues.length);

// concat()


// join()


// slice()


// toString()


// indexOf()


// lastIndexOf()