$(function () {
    let divWidth = $("#bannerDiv").width();
    let imgCount = $("#bannerImg li").length;
 
    console.log(imgCount);
 
 // 用for迴圈建立和圖片等數的圓形按鈕
     for(let i = 0; i < imgCount; i++){
         $("#bannerBtn").append(`<li></li>`)
     }
      // 預設第一個圓形按鈕要選取
     $("#bannerBtn li:first").addClass("clicked");
 
 
 
     // 讓圓形按鈕到最下方
     $("#bannerImg li").width(divWidth);
     // 設定ul的寬度等於所有li寬度的總和
     $("#bannerImg").width(divWidth * imgCount);
 
 
     let index = 0;
     // 設定計時器
     let timer=setInterval(moveToNext, 5000);
 
     // 圓形按鈕被點擊時, ul要向左位移, 
     $("#bannerBtn li").click(function(){
         // 設定計時器每點擊一次按鈕要重新計算時間,先清空計時器,最後再重新加回計時器
         clearInterval(timer);
 
 
         index = $(this).index(); // 取得被點擊的圓形按鈕的索引
         $("#bannerImg").animate({
             left: divWidth * index *-1,
         })
 
         
         // 設定被點擊的圓形按鈕要addClass, 其餘沒被點擊的全部按鈕removeClass
         $(this).addClass("clicked");
         $("#bannerBtn li").not(this).removeClass("clicked");
 
         // 加回計時器
         timer=setInterval(moveToNext, 5000);
     })
 
 
     // 建立計時器要執行的函式
     function moveToNext(){
 
         if(index < imgCount - 1){
         // 設定每執行一次索引值遞增, 圖片才能持續往左移動
         index++;
         } else {
             index=0;
         }
 
         $("#bannerImg").animate({
             left: divWidth * index *-1,
         })
 
         // 用eq設定和圖片索引值相同的按鈕addClass, 其餘removeClass
         $(`#bannerBtn li:eq(${index})`).addClass("clicked");
         $("#bannerBtn li").not(`:eq(${index})`).removeClass("clicked");
 
     }
     let winWidth=$(window).width();
     
 });