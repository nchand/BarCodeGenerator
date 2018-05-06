'use strict'

let productDataString = document.getElementById('dataString');
let productCount = document.getElementById('totallevels');
let submitbButton = document.getElementById('submitData');
let wrapper = document.getElementById('barcode-wrapper');
let hiddenBarcode = document.getElementById('hidden-barcode');
let img = document.createElement('img');
img.setAttribute('class', 'barcode');


const generateBarcode = () => {
    wrapper.innerHTML = "";
    for (let i=0; i<productCount.value; i++) {
        wrapper.appendChild(img);
        img = document.createElement('img');
        img.setAttribute('class', 'barcode');
    }
    JsBarcode(".barcode", productDataString.value);
    console.log(productDataString.value)
}

submitbButton.addEventListener('click', () => {
    generateBarcode();
})