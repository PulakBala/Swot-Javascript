function publicBusFare(x) {
    const reservedBus = 50;
    const maicroBus = 11;
    if(x <= 50) {
        const reservedBus = x % 50;
        return reservedBus;
    }
   
}
let totalAmount = publicBusFare(112);
console.log(totalAmount);