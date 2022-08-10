const phones = [
    {name: 'sumsung', cammera:20, price: 454000, color:'black'},
    {name: 'walton', cammera:10, price: 14000, color:'silver'},
    {name: 'oppo', cammera:13, price: 42000, color:'white'},
    {name: 'iphone', cammera:30, price: 10000, color:'bule'},
    {name: 'oneplus', cammera:20, price: 74000, color:'black'},
    {name: 'nokia', cammera:12, price: 34000, color:'grey'},
] ;

// function cheapestPhone(phones) {
//     let cheapest = phones[0];
//     for(let i = 0; i < phones.length; i++) {
//         const phone = phones[i];
//         if(phone.price < cheapest.price) {
//             cheapest = phone;
//         }
//     }
//     return cheapest;
// }

function cheapestPhone (phones) {
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if(phone.cammera > cheapest.cammera) {
            cheapest = phone;
        }
    }
    return cheapest;
}

console.log(cheapestPhone(phones));