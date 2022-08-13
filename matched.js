const products = [
    {id:1, name:'xiami phone one night', price: 19900},
    {id:2, name:'iphone  one night', price: 199200},
    {id:3, name:'mac book air', price: 44900},
    {id:4, name:'lenovo yoga laptop 2025', price: 32900},
    {id:5, name:'Dell inspiron laptop', price: 62900},
    {id:6, name:'samsung phone  note 7', price: 29900},
    {id:7, name:'Nokia old age phone gone', price: 59900},
    {id:8, name:'Phone one+', price: 19900}
]

// for(const product of products) {
//     console.log(product);
// }

function matchedProducts(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'phone');
console.log(result);