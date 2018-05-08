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
    let price = Number(productPrice.value); 
    for (let i=0; i<productCount.value; i++) {
        priceImgWrapper.appendChild(span);
        priceImgWrapper.appendChild(img)
        span = document.createElement('span'); 
        wrapper.appendChild(priceImgWrapper);
        barcodePrice[i].innerHTML="Rs."+price.toFixed(2); 
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
   
    let fields = ["Product Code", "Product Price", "Sticker Quantity"]
    let i, l = fields.length;
    let fieldname;
    let x=document.forms["inputForm"]["Product Price"].value;
    
    for (i = 0; i < l; i++) {
        fieldname = fields[i];
        if (document.forms["inputForm"][fieldname].value === "") {
        // alert(fieldname + " can not be empty");
        document.getElementById('error-message').innerHTML = fieldname + " can not be empty";
        document.getElementById('error-message').style.display = "block";

        setTimeout(() => {
            document.getElementById('error-message').style.display = "none";
        }, 3000);

        return false;
        }
        
    }   
    if (isNaN(x)) 
    alert("Product Price must be a number");    
    if(document.forms["inputForm"]["Sticker Quantity"].value > 50){
        // alert("Sticker Quantity can't exceed 50 no's")
        document.getElementById('nan-error').style.display = "block";

        setTimeout(() => {
            document.getElementById('nan-error').style.display = "none";
        }, 3000);

    } else {
        generateBarcode();
    }
})

