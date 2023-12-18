// 相似產品區塊輪播器
$(function(){
    
// let divWidth=$("#otherItem").width(); //858px
// console.log(divWidth);

let width = $("#otherItem_slider>li").width(); 
// console.log(width);
let length=$("#otherItem_slider>li").length; //6
let index=0;

$(window).resize(function(){
    clearInterval(timer);
    width = $("#otherItem_slider>li").width(); 
    index = 0;
    timer = setInterval(slider, 5000);

    mainWidth = $(".smallpic_block>ul>li").width()+10;
    mainIndex = 0;
})

$("#sliderL").click(function(){

    clearInterval(timer);

    $("#otherItem_slider").animate({
        left: width * index * -1,

    })
    
    // index=0 時表示圖片已經回到第一張, 所以不用再遞減
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


// 產品介紹照片區塊切換
let mainWidth = $(".smallpic_block>ul>li").width()-5;
console.log(mainWidth);

let mainLength=$(".smallpic_block>ul>li").length;
let mainIndex=0;

$(window).resize(function(){
    mainWidth = $(".smallpic_block>ul>li").width(); 
})

$("#main_sliderL").click(function(){

    $(".smallpic_block>ul").animate({
        left: mainWidth * mainIndex * -1,

    })
    
    if (mainIndex > 0){
        mainIndex--;
    }
    console.log(mainIndex)

})

$("#main_sliderR").click(function(){

    $(".smallpic_block>ul").animate({
        left: mainWidth * mainIndex * -1,
    })

    if(mainIndex < mainLength - 3){
        mainIndex ++;
    }

    console.log(mainIndex)
    console.log(mainLength)
})

})