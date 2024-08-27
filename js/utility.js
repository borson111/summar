let total = 0;
function getPricevalue(target){
    const selectedCart = document.getElementById("selectedCart");
    const cartNane = target.parentNode.childNodes[1].innerText;
    const li = document.createElement("li");
    li.innerText = cartNane;
    selectedCart.appendChild(li);

    const price = target.parentNode.childNodes[5].innerText.split(" ")[0];
    const priceValue = parseFloat(price);

   total = total + priceValue;
   const totalPrice = document.getElementById("totalPrice");
   totalPrice.innerText = total;

   const totalAmountFild = document.getElementById("totalAmountFild")
   totalAmountFild.innerText = total
 
}


function getDiscount(target){
    
    if(total >= 200){
        const discInput = target.parentNode.childNodes[1].value;
        const totalAmountFild = document.getElementById("totalAmountFild");
       if(discInput === "OFF20"){
        const discTotal = (total * 20) / 100;
        
        const discountAmount = document.getElementById("discountAmount");
        
        discountAmount.innerText = discTotal;

        

            
        const totalAmount = total - discTotal;
        totalAmountFild.innerText = totalAmount;
       }
       else{
        alert("Give Valid Coupon")
       
       }
    }else{
        totalAmountFild.innerText = total;
    }
  
}
