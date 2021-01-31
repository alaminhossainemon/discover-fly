 //firstClassTicketCalculator
function firstTicketCalculator(isIncrease){
    const firstTicketInput = document.getElementById('firstClass-count');
    const firstTicketCount = parseInt(firstTicketInput.value);
    let firstTicketNewCount =  firstTicketCount ;
    if(isIncrease == true ) {
        firstTicketNewCount = firstTicketCount + 1 ;
    }
    if(isIncrease ==false && firstTicketCount > 0 ) {
        firstTicketNewCount = firstTicketCount - 1;
    }
    document.getElementById('firstClass-count').value = firstTicketNewCount;
    totalCalculator()
}
//economyClassTicketCalculator
function economyTicketCalculator(isIncrease){
    const economyTicketInput = document.getElementById('economyClass-count');
    const economyTicketCount = parseInt(economyTicketInput .value);
    
    let economyTicketNewCount = economyTicketCount;
    if(isIncrease == true ) {
        economyTicketNewCount = economyTicketCount + 1 ;
    }
    if(isIncrease ==false && economyTicketCount > 0 ) {
        economyTicketNewCount = economyTicketCount - 1;
    }
    document.getElementById('economyClass-count').value = economyTicketNewCount;
    totalCalculator()
}
//totalPriceCalculator
function totalCalculator(){
    const economyTicketInput = document.getElementById('economyClass-count');
    const economyTicketCount = parseInt(economyTicketInput.value);

    const firstTicketInput = document.getElementById('firstClass-count');
    const firstTicketCount = parseInt(firstTicketInput.value);
    totalPrice =  150 *firstTicketCount + 100 * economyTicketCount;

    document.getElementById('total-price').innerText = totalPrice;

    const tax = totalPrice * 0.1;
    document.getElementById('tax-amount').innerText = tax;

    const grandTotal = totalPrice + tax ;
    document.getElementById('grand-total').innerText = grandTotal ;

    
}
const bookBtn = document.getElementById('book-btn');
bookBtn.addEventListener("click",function(){
    const confirmArea = document.getElementById('confirm-area');
    confirmArea.style.display ="block";

})
