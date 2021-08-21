// Get button
const Ram8 = document.getElementById('8GBRam');
const Ram16 = document.getElementById('16GBRam');
const SSD256 = document.getElementById('256GBSSD');
const SSD512 = document.getElementById('512GBSSD');
const SSD1TB = document.getElementById('1TBSSD');
const deliveryFree = document.getElementById('freeDelivery');
const deliveryExpress = document.getElementById('expressDelivery');

// Default button background
Ram8.style.backgroundColor = 'white';
Ram16.style.backgroundColor = 'white';
SSD256.style.backgroundColor = 'white';
SSD512.style.backgroundColor = 'white';
SSD1TB.style.backgroundColor = 'white';
deliveryFree.style.backgroundColor = 'white';
deliveryExpress.style.backgroundColor = 'white';

// Button click function
function clickForChange(BtnName) {
    BtnName.addEventListener('click', function () {
        clickBG(BtnName);
    });
}
// Define button name
clickForChange(Ram8)
clickForChange(Ram16)
clickForChange(SSD256)
clickForChange(SSD512)
clickForChange(SSD1TB)
clickForChange(deliveryFree)
clickForChange(deliveryExpress)

// Change background after click
function clickBG(btnId) {
    if (btnId.style.backgroundColor == 'white') {
        btnId.style.backgroundColor = '#7C3AED';
        btnId.style.color = 'white';
    } else {
        btnId.style.backgroundColor = 'white';
        btnId.style.color = 'black';
    }
}

// Memory buttons
Ram8.addEventListener('click',function(){
    if(Ram16.style.backgroundColor!='white'){
        Ram16.style.backgroundColor = 'white';
        Ram16.style.color = 'black';
    }
})
Ram16.addEventListener('click',function(){
    if(Ram8.style.backgroundColor!='white'){
        Ram8.style.backgroundColor = 'white';
        Ram8.style.color = 'black';
    }
})

// Storage buttons
SSD256.addEventListener('click',function(){
    if(SSD512.style.backgroundColor!='white' || SSD1TB.style.backgroundColor!='white'){
        SSD512.style.backgroundColor = 'white';
        SSD512.style.color = 'black';
        SSD1TB.style.backgroundColor = 'white';
        SSD1TB.style.color = 'black';
    }
})
SSD512.addEventListener('click',function(){
    if(SSD256.style.backgroundColor!='white' || SSD1TB.style.backgroundColor!='white'){
        SSD256.style.backgroundColor = 'white';
        SSD256.style.color = 'black';
        SSD1TB.style.backgroundColor = 'white';
        SSD1TB.style.color = 'black';
    }
})
SSD1TB.addEventListener('click',function(){
    if(SSD256.style.backgroundColor!='white' || SSD512.style.backgroundColor!='white'){
        SSD256.style.backgroundColor = 'white';
        SSD256.style.color = 'black';
        SSD512.style.backgroundColor = 'white';
        SSD512.style.color = 'black';
    }
})

// Delivery Buttons
deliveryFree.addEventListener('click',function(){
    if(deliveryExpress.style.backgroundColor!='white'){
        deliveryExpress.style.backgroundColor = 'white';
        deliveryExpress.style.color = 'black';
    }
})
deliveryExpress.addEventListener('click',function(){
    if(deliveryFree.style.backgroundColor!='white'){
        deliveryFree.style.backgroundColor = 'white';
        deliveryFree.style.color = 'black';
    }
})