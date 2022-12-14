/*
1.if ticket numbers is less than 100, per ticket price: 100
2. if ticket numbers is more than 100, but less than 200. First 100 tickets will be 100/ ticket rest tickets will be 90 taka per piece
3.if you purchase more than 200 tickets
    first 100 ---> 100tk
    101-200 ---> 90tk
    200+ ----> 70tk
*/

function ticketPrice(ticketQuantity) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if(ticketQuantity <= 100) {
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if(ticketQuantity <= 200) {
        const first100Price = 100 * second100Rate;
        const restTicketQunatity = ticketQuantity - 100;
        const resetTicketPrice = restTicketQunatity * second100Rate;
        const totalPrice = first100Price + resetTicketPrice;
        return totalPrice;
    }
    else {
        const second100Rate = 100 * second100Rate;
        const restTicketQunatity = ticketQuantity - 200;
        const resetTicketPrice = restTicketQunatity * restTicketRate;
        return resetTicketPrice;
    }
}
const totalPrice = ticketPrice(191);
console.log(totalPrice);