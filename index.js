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
        title: "Apple EarPods",
        price: 2327,
        oldPrice: null,
        discountPrice:null,
        rate: 4.5,
        discount:null
    },
    {
        img: "./img/productImg/Apple_BYZ_S8521.png",
        title: "Apple BYZ S852I",
        price: 2927,
        oldPrice: null,
        discountPrice: 2927,
        rate: 4.7,
        discount: "-20%"
    },
    {
        img: "./img/productImg/Apple_EarPods2.png",
        title: "Apple EarPods",
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

let imgProduct = document.getElementsByClassName("headphonesImg");
for (let i = 0; i < imgProduct.length; i++) {
    imgProduct[i].src = headphones[i].img;
}

let productName = document.getElementsByClassName("productName");
for (let i = 0; i < productName.length; i++) {
    productName[i].innerHTML = headphones[5].title;
}

let productPrice = document.getElementsByClassName("productPrice");
productPrice[0].innerHTML = headphones[0].price;

let oldProductPrice = document.getElementsByClassName("oldProductPrice");
oldProductPrice[0].innerHTML = headphones[0].oldPrice;

let discountPrice = document.getElementsByClassName("discountPrice");
discountPrice[0].innerHTML = headphones[0].discountPrice;

let discount = document.getElementsByClassName("discount");
discount[0].innerHTML = headphones[0].discount;

let productRating = document.getElementsByClassName("productRating");
productRating[0].innerHTML = headphones[0].rate;



const wirelessHeadphones = [
    {
        img: "./img/productImg/Apple_BYZ_S8521.png",
        title: "Apple BYZ S852I",
        price: 2927,
        oldPrice: 3527,
        rate: 4.7,
        discount: null
    },
    {
        img: "./img/productImg/Apple_EarPods.png",
        title: "Apple EarPods",
        price: 2327,
        oldPrice: null,
        rate: 4.5,
        discount:null
    },
    {
        img: "./img/productImg/Apple_EarPods.png",
        title: "Apple EarPods",
        price: 2327,
        oldPrice: null,
        rate: 4.5,
        discount:null
    }
]


