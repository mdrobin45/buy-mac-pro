// Get element function
function getElement(Id) {
    const element = document.getElementById(Id);
    return element;
}
// Memory configuration
function memory(memoryCost) {
    getElement('16GBRam').addEventListener('click', function () {
        var extraMemory = getElement(memoryCost);
        extraMemory.innerText = 180;
        totalAmount();
    });
    getElement('8GBRam').addEventListener('click', function () {
        var extraMemory = getElement(memoryCost);
        extraMemory.innerText = 0;
        totalAmount();
    });
}
// Storage Configuration
function storage(storageCost) {
    getElement('256GBSSD').addEventListener('click', function () {
        var extraStorage = getElement(storageCost);
        extraStorage.innerText = 0;
        totalAmount();
    });
    getElement('512GBSSD').addEventListener('click', function () {
        var extraStorage = getElement(storageCost);
        extraStorage.innerText = 100;
        totalAmount();
    });
    getElement('1TBSSD').addEventListener('click', function () {
        var extraStorage = getElement(storageCost);
        extraStorage.innerText = 180;
        totalAmount();
    });
}
// Delivery
function delivery(deliveryCost) {
    getElement('freeDelivery').addEventListener('click', function () {
        var DeliveryCost = getElement(deliveryCost);
        DeliveryCost.innerText = 0;
        totalAmount();
    });
    getElement('expressDelivery').addEventListener('click', function () {
        var DeliveryCost = getElement(deliveryCost);
        DeliveryCost.innerText = 20;
        totalAmount();
    });
}
// Total amount of cost
function totalAmount() {
    let result = 0; // Store the total amount of cost
    let allPrice = document.getElementsByClassName('everyPrice');
    for (const cost of allPrice) {
        result += parseInt(cost.innerText);
    }
    getElement('total').innerText = result;
    getElement('finalPrice').innerText = result;

}
// Mac pro configuration and details
memory('extraMemoryCost');
storage('extraStorageCost');
delivery('deliveryCost');


/********************************************************************/
// Promo code discount
function promoDiscount() {
    const total = getElement('total');
    const discount = 20 / 100;
    const discountPrice = discount * total.innerText;
    return discountPrice;
}
// Promo code invalid message
const invalidPromo = getElement('invalidPromo');
const emptyPromo = getElement('typePromoCode');
emptyPromo.style.display = 'none';
invalidPromo.style.display = 'none';

// Apply promo code
getElement('applyPromo').addEventListener('click', function () {
    const promoCode = getElement('enterPromoCode');
    // Take a action if promo code matched
    if (promoCode.value == 'stevekaku') {
        const total = getElement('total');
        // Final price update
        getElement('finalPrice').innerText = total.innerText - promoDiscount();
        // Hide invalid promo code message if code matched
        invalidPromo.style.display = 'none';
        // Clear promo field after apply code
        promoCode.value = '';
    }
    // Take a action if promo field is empty
    else if (promoCode.value == '') {
        emptyPromo.style.display = 'block';
        invalidPromo.style.display = 'none';
    }
    // Take a action if promo code not match
    else {
        getElement('finalPrice').innerText = getElement('total').innerText;
        // Show invalid promo code message if code not matched
        invalidPromo.style.display = 'block';
        emptyPromo.style.display = 'none';
        // Clear promo field after type wrong code
        promoCode.value = '';
    }
});

