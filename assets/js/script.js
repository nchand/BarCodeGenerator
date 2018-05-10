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
let genButton = document.getElementById('gen');

const generateBarcode = () => {
    wrapper.innerHTML = "";
    let price = Number(productPrice.value);
    for (let i = 0; i < productCount.value; i++) {
        priceImgWrapper.appendChild(span);
        priceImgWrapper.appendChild(img)
        span = document.createElement('span');
        wrapper.appendChild(priceImgWrapper);
        barcodePrice[i].innerHTML = "Rs." + price.toFixed(2);
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
    let x = document.forms["inputForm"]["Product Price"].value;
    let y = document.forms["inputForm"]["Sticker Quantity"].value;

    for (i = 0; i < l; i++) {
        fieldname = fields[i];
        if (document.forms["inputForm"][fieldname].value === "") {
            document.getElementById('error-message').innerHTML = fieldname + " can not be empty";
            document.getElementById('error-message').style.display = "block";

        setTimeout(() => {
            document.getElementById('error-message').style.display = "none";
        }, 3000);

            return false;
        }

    }
    if (isNaN(x)) {
        document.getElementById('error-message').innerHTML = "Product Price must be a number";
        document.getElementById('error-message').style.display = "block";
        setTimeout(() => {
            document.getElementById('error-message').style.display = "none";
        }, 3000);
        return false;
    }
    if (isNaN(y)) {
        document.getElementById('error-message').innerHTML = "Sticker Quantity must be a number";
        document.getElementById('error-message').style.display = "block";
        setTimeout(() => {
            document.getElementById('error-message').style.display = "none";
        }, 3000);
        return false;
    }
    if (document.forms["inputForm"]["Sticker Quantity"].value > 50) {
        document.getElementById('nan-error').style.display = "block";

        setTimeout(() => {
            document.getElementById('nan-error').style.display = "none";
        }, 6000);

    } else {
        generateBarcode();
        
        //URL METHOD ..
    //     var imgData = document.getElementsByClassName("barcode-wrapper");
    //     console.log(imgData);
    //     var doc = new jsPDF()
    //     doc.setFontSize(40)
    //     doc.addImage(imgData, 'JPEG', 15, 40, 180, 160)
    //    doc.save('test.pdf')
    
        //JsPdf Method..
    var pdf = new jsPDF("p", "pt", "a4");
	pdf.addHTML($('#barcode-wrapper'), 15, 15, function() {
        pdf.setTextColor(0, 255, 0);
	  pdf.save('div.pdf');
    });
    

        //JQuery Method..
    // $("#submitData").on("click", function () {
    //     var divContents = $("#barcode-wrapper").html();
    //     var printWindow = window.open('', '', 'height=400,width=800');
    //     printWindow.document.write('<html><head><title>DIV Contents</title>');
    //     printWindow.document.write('</head><body >');
    //     printWindow.document.write(divContents);
    //     printWindow.document.write('</body></html>');
    //     printWindow.document.close();
    //     printWindow.print();
    // });

    }
    
})





