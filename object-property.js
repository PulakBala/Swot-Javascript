var shoppingCart = {
    books : 3,
    pen : 10,
    sunglass:2,
    tv: 1,
    mouse:1,
    pant: 10
}

// console.log(shoppingCart.mouse);

var properties = Object.keys(shoppingCart);
var propertiesValues = Object.values(shoppingCart);

var propertiesValue = 'mouse';
var propertiesNames = shoppingCart[propertiesValue];
// console.log(properties);
// console.log(propertiesValues);
// console.log(shoppingCart.mouse);
// console.log(propertiesValue, propertiesNames);


//set property values
shoppingCart.mouse = 20;
console.log(shoppingCart);
shoppingCart['mouse'] = 23;
console.log(shoppingCart);
shoppingCart[propertiesValue] = 80;
console.log(shoppingCart);
shoppingCart.notebook = 3;
console.log(shoppingCart);