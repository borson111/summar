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

   
 
}


function getDiscount(target){
    if(total >= 200){
        const discInput = target.parentNode.childNodes[1].value;
       if(discInput === "OFF20"){
        const discTotal = (total * (100-20)) / 100;
        const discountAmount = document.getElementById("discountAmountFild");
        discountAmount.innerText = discTotal;

        const totalAmountFild = document.getElementById("totalAmount");

        const totalAmounr = total - discTotal;

        totalAmountFild.innerText = totalAmounr;
       }else{
        alert
       }
    }else{}
  
}