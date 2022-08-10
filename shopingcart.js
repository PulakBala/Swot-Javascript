const shopingCart = [
    {name:'shoe', price: 3300, quantity:2},
    {name:'watch', price: 6300, quantity:3},
    {name:'pant', price: 2400, quantity:6},
    {name:'baelt', price: 300, quantity:5}
];

function totalCost(products) {
    let sum = 0;
    for(let i = 0; i < shopingCart.length; i++) {
        const product = products[i];
        const productAll = product.price * product.quantity;
        sum = sum + productAll;
        
    }
    return sum;
}
const expanse = totalCost(shopingCart);
console.log(expanse);