const headphones = [
    {
        img: "./img/productImg/Apple_BYZ_S8521.png",
        title: "Apple BYZ S852I",
        price: 2927,
        oldPrice: 3527,
        discountPrice:null,
        rate: 4.7,
        discount: null
    },
    {
        img: "./img/productImg/Apple_EarPods.png",
        title: "Apple EarPods",
        price: 2327,
        oldPrice: null,
        discountPrice:null,
        rate: 4.5,
        discount:null
    },
    {
        img: "./img/productImg/Apple_EarPods2.png",
        title: "Apple EarPods 2",
        price: 2327,
        oldPrice: null,
        discountPrice:null,
        rate: 4.5,
        discount:null
    },
    {
        img: "./img/productImg/Apple_BYZ_S8521.png",
        title: "Apple BYZ S852I",
        price: null,
        oldPrice: null,
        discountPrice: 2927,
        rate: 4.7,
        discount: "-20"
    },
    {
        img: "./img/productImg/Apple_EarPods2.png",
        title: "Apple EarPods 2",
        price: 2327,
        oldPrice: null,
        discountPrice:null,
        rate: 4.5,
        discount:null
    },
    {
        img: "./img/productImg/BOROFONE_BO4.png",
        title: "Apple EarPods",
        price: 2327,
        oldPrice: null,
        discountPrice:null,
        rate: 4.5,
        discount:null
    }
]

const wirelessHeadphones = [
    {
        img: "./img/productImg/Apple_BYZ_S8521.png",
        title: "Apple BYZ S852I",
        price: 2927,
        oldPrice: 3527,
        discountPrice:null,
        rate: 4.7,
        discount: null
    },
    {
        img: "./img/productImg/Apple_EarPods.png",
        title: "Apple EarPods",
        price: 2327,
        oldPrice: null,
        discountPrice:null,
        rate: 4.5,
        discount:null
    },
    {
        img: "./img/productImg/Apple_EarPods.png",
        title: "Apple EarPods",
        price: 2327,
        oldPrice: null,
        discountPrice: null,
        rate: 4.5,
        discount:null
    }
]

let headphonesImg = document.getElementsByClassName("headphonesImg");
let headphonesName = document.getElementsByClassName("headphonesName");
let headphonesPrice = document.getElementsByClassName("headphonesPrice");
let oldHeadphonesPrice = document.getElementsByClassName("oldHeadphonesPrice");
let discountHeadphonesPrice = document.getElementsByClassName("discountHeadphonesPrice");
let headphonesDiscount = document.getElementsByClassName("headphonesDiscount");
let headphonesRating = document.getElementsByClassName("headphonesRating");

let wirelessHeadphonesImg = document.getElementsByClassName("wirelessHeadphonesImg");
let wirelessHeadphonesName = document.getElementsByClassName("wirelessHeadphonesName");
let wirelessHeadphonesPrice = document.getElementsByClassName("wirelessHeadphonesPrice");
let oldWirelessHeadphonesPrice = document.getElementsByClassName("oldWirelessHeadphonesPrice");
let discountWirelessHeadphonesPrice = document.getElementsByClassName("discountWirelessHeadphonesPrice");
let wirelessHeadphonesDiscount = document.getElementsByClassName("wirelessHeadphonesDiscount");
let wirelessHeadphonesRating = document.getElementsByClassName("wirelessHeadphonesRating");



function addImg (array, elem) {
    for (let i = 0; i < elem.length; i++) {
        elem[i].src = array[i].img;
    }
}
addImg(headphones, headphonesImg);
addImg(wirelessHeadphones, wirelessHeadphonesImg);

function addProductName (array, elem) {
    for (let i = 0; i < elem.length; i++) {
        if (array[i].title !== null) {
            elem[i].innerHTML = array[i].title;
        } else {
            elem[i].style.display = "none";
        }
    }
}

addProductName(headphones, headphonesName);
addProductName(wirelessHeadphones, wirelessHeadphonesName);


function addProductPrice (array, elem) {
    for (let i = 0; i < elem.length; i++) {
        if (array[i].price !== null) {
            elem[i].innerHTML = array[i].price;
        } else {
            elem[i].style.display = "none";
        }
    }
}

addProductPrice(headphones, headphonesPrice);
addProductPrice(wirelessHeadphones, wirelessHeadphonesPrice);


function addOldProductPrice (array, elem) {
    for (let i = 0; i < elem.length; i++) {
        if (array[i].oldPrice !== null) {
            elem[i].innerHTML = array[i].oldPrice;
        } else {
            elem[i].style.display = "none";
        }
    }
}

addOldProductPrice(headphones, oldHeadphonesPrice);
addOldProductPrice(wirelessHeadphones, oldWirelessHeadphonesPrice);


function addDiscountPrice (array, elem) {
    for (let i = 0; i < elem.length; i++) {
        if (array[i].discountPrice !== null) {
            elem[i].innerHTML = array[i].discountPrice;
        } else {
            elem[i].style.display = "none";
        }
    }
}
addDiscountPrice(headphones, discountHeadphonesPrice);
addDiscountPrice(wirelessHeadphones, discountWirelessHeadphonesPrice);

function addDiscount (array, elem) {
    for (let i = 0; i < elem.length; i++) {
        if (array[i].discount !== null) {
            elem[i].innerHTML = array[i].discount;
        } else {
            elem[i].style.display = "none";
        }
    }
}

addDiscount(headphones, headphonesDiscount);
addDiscount(wirelessHeadphones, wirelessHeadphonesDiscount);

function addRate (array, elem) {
    for (let i = 0; i < elem.length; i++) {
        if(array[i].rate !== null) {
            elem[i].innerHTML = array[i].rate;
        } else {
            elem[i].innerHTML = '0.0';
        }
    }
}

addRate(headphones,headphonesRating);
addRate(wirelessHeadphones,wirelessHeadphonesRating);

//добавление в корзину
let countCart = document.getElementsByClassName("countCart")[0];
let count = 0;

let buyBtn = document.getElementsByClassName("btnBuy");
for(let i=0; i< buyBtn.length; i++) {
    buyBtn[i].addEventListener( "click" , () => {
            count+=1;
            countCart.innerHTML = count;
            return countCart.innerHTML;
        }
    );
}



