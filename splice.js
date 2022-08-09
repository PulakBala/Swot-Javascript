const friends = [12, 34, 53, 23, 21, 54, 75, 55, 66];
const partial = friends.splice(3, 5, 99, 33, 566, 55555);
console.log(partial);
console.log(friends);