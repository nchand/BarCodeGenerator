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
let priceImgWrapper = document.createElement('div')
img.setAttribute('class', 'barcode');
span.setAttribute('class', 'barcodePrice');
priceImgWrapper.setAttribute('class', 'priceImgWrapper');
let barcodePrice = document.getElementsByClassName('barcodePrice');

const generateBarcode = () => {
    wrapper.innerHTML = "";
    for (let i=0; i<productCount.value; i++) {
        priceImgWrapper.appendChild(span);
        priceImgWrapper.appendChild(img)
        span = document.createElement('span'); 
        wrapper.appendChild(priceImgWrapper);
        barcodePrice[i].innerHTML=productPrice.value; 
        img = document.createElement('img');
        priceImgWrapper = document.createElement('div')
        img.setAttribute('class', 'barcode');
        span.setAttribute('class', 'barcodePrice');
        priceImgWrapper.setAttribute('class', 'priceImgWrapper');
    } 
    JsBarcode(".barcode", productDataString.value);
    console.log(productDataString.value)
    console.log(productPrice.value)

}

submitbButton.addEventListener('click', () => {
    generateBarcode();
})


// basically what I did is, I created another div element 'priceImgWrapper' and append span and img to it. Than, finally I append 'priceImgWrapper' to original 'wrapper'
// I positioned everything with CSS flex box. You can see those changes in CSS file.