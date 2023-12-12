window.addEventListener("load", function(){
    let smallImg = document.querySelectorAll(".smallimg");
    // console.log(smallImg);
    let mainImg = document.getElementById("item_mainImg");
    for (let i = 0; i < smallImg.length; i++){
        smallImg[i].onclick = function(){
            mainImg.src = smallImg[i].src;
            document.getElementById("item_mainImg").src = mainImg.src
        }
    }
})