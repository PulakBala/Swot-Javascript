var numbers = [45, 23, 34, 53, 62, 62, 32, 323, 6454, 234];
for(var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if(number > 48) {
        break;
    }
    console.log(number);
}