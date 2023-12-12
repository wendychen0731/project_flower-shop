window.addEventListener("load", function(){



    document.getElementById("increaseBtn").onclick=function(){
        let qty=parseInt(document.getElementById("qty").value);
        if (qty < 10){
            document.getElementById("qty").value=qty+1;
        }
    }
    document.getElementById("decreaseBtn").onclick=function(){
        let qty=parseInt(document.getElementById("qty").value);
        if (qty>1){
            document.getElementById("qty").value=qty-1;
        }


    }
})