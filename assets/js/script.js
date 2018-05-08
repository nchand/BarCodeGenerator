'use strict'

let productDataString = document.getElementById('dataString');
let productPrice = document.getElementById('productPrice');
let productCount = document.getElementById('totallevels');
let submitbButton = document.getElementById('submitData');
let wrapper = document.getElementById('barcode-wrapper');
let wrapper1 = document.getElementById('cost');
let hiddenBarcode = document.getElementById('hidden-barcode');
let span = document.createElement('span');
let img = document.createElement('img');
img.setAttribute('class', 'barcode');
span.setAttribute('class', 'barcodePrice');
let barcodePrice = document.getElementsByClassName('barcodePrice');

const generateBarcode = () => {
    wrapper.innerHTML = "";
    for (let i=0; i<productCount.value; i++) {
        wrapper.appendChild(img)
        wrapper1.appendChild(span);
        span = document.createElement('span'); 
        barcodePrice[i].innerHTML=productPrice.value; 
        img = document.createElement('img');
        img.setAttribute('class', 'barcode');
        span.setAttribute('class', 'barcodePrice');
    } 
    JsBarcode(".barcode", productDataString.value);
    console.log(productDataString.value)
    console.log(productPrice.value)

}

submitbButton.addEventListener('click', () => {
    generateBarcode();
})
