$(function(){
    
// let divWidth=$("#otherItem").width(); //858px
// console.log(divWidth);

let width = $("#otherItem_slider>li").width(); 
console.log(width);
let length=$("#otherItem_slider>li").length; //6
let index=0;

$(window).resize(function(){
    clearInterval(timer);
    width = $("#otherItem_slider>li").width(); 
    index=0;
    timer=setInterval(slider, 5000);
})

$("#sliderL").click(function(){

    clearInterval(timer);

    $("#otherItem_slider").animate({
        left: width * index * -1,

    })
    
    // index=0 時表示圖片已經回到第一張, 所以不再遞減
    if (index > 0){
        index--;
    }

    timer=setInterval(slider, 5000);
})

$("#sliderR").click(function(){

    clearInterval(timer);

    $("#otherItem_slider").animate({
        left: width * index * -1,
    })

    // 因為一次顯示三張圖片, 所以index範圍為0~length-3
    if(index < length - 3){
        index ++;
    }

    timer=setInterval(slider, 5000);
})

// 計時器函式

let timer=setInterval(slider, 5000);

function slider(){

    if(index < length - 3){
        index ++;
    } else {
        index = 0;
    }

    $("#otherItem_slider").animate({
        left: width * index * -1,
    })

}


})