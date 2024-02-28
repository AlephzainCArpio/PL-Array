const cart = [
    { Productname: "T-shirt", price:20 },
    { Productname: "Jeans", price:50 },
    { Productname: "Sneaker ", price:80},
    { Productname: "Mask", price:40},
    { Productname: "Dress", price:90},
    { Productname: "Swim suit", price:100},
    ];
    
    const calculateTotal = (cart)=>{
        let totalPrice = 0;
        for (let product of cart){
          totalPrice += product.price
    }  
    return totalPrice;
}


const totalPrice = calculateTotal(cart);
console.log("total is:"+ totalPrice);