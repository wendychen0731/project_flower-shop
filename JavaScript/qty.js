
function qty(button){
    let order=parseInt(document.getElementById("qty").value);
    if(button.innerText=="-" && order>=1){
        order-=1;
    }else if(button.innerText=="+" && order<=9){
        order+=1;
    }
    document.getElementById("qty").value=order;
}

