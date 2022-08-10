const shopingCart = [
    {name:'shoe', price: 3300},
    {name:'watch', price: 6300},
    {name:'pant', price: 2400},
    {name:'baelt', price: 300}
];

function totalCost(products) {
    let sum = 0;
    for(let i = 0; i < shopingCart.length; i++) {
        const product = products[i];
        sum = sum + product.price;
        
    }
    return sum;
}
const expanse = totalCost(shopingCart);
console.log(expanse);