// 按鈕切換更改內容
function roseBtn(){
    document.getElementById("mainTitle").innerText="玫瑰";
    document.getElementById("title").innerText="Rose";
   document.getElementById("outward").innerText="玫瑰為落葉灌木，有邊刺。花有紫紅色、白色，花期5-6月";
   document.getElementById("textFlower").innerText="紅色玫瑰象徵濃烈的愛情和熱情;粉紅色玫瑰象徵溫柔、純真; 白色玫瑰則為純潔、無暇的象徵";
   document.getElementById("products").innerText="花束、花籃、婚禮和其他特殊場合裝飾。";

   document.getElementById("img_first").src="./photos/flower_introduce/rose_first.jpg";
   document.getElementById("img_second").src="./photos/flower_introduce/rose_second.jpg";
   document.getElementById("img_third").src="./photos/flower_introduce/rose_third.jpg";
}

function eustomaBtn(){
    document.getElementById("mainTitle").innerText="桔梗";
    document.getElementById("title").innerText="Eustoma";
   document.getElementById("outward").innerText="桔梗花朵顏色豐富，花型和玫瑰相似，因此有「無刺的玫瑰」之稱，不僅深受一般民眾的喜愛，也是許多專業花藝師偏愛的花種之一";
   document.getElementById("textFlower").innerText="桔梗隨著顏色的不同，也有著不同的花語：「永遠的愛」「不變的愛」「氣質」「誠實」";
   document.getElementById("products").innerText="花束、盆花、婚禮捧花。";

   document.getElementById("img_first").src="./photos/flower_introduce/eustoma_first.jpg";
   document.getElementById("img_second").src="./photos/flower_introduce/eustoma_second.jpg";
   document.getElementById("img_third").src="./photos/flower_introduce/eustoma_third.jpg";
}

function hydrangeasBtn(){
    document.getElementById("mainTitle").innerText="繡球";
    document.getElementById("title").innerText="Hydrangeas";
   document.getElementById("outward").innerText="花朵碩大，顏色繽紛，顏色根據土壤決定，有綠色、白色、粉色、紫色、藍色等。";
   document.getElementById("textFlower").innerText="繡球花的花語根據顏色而不同。   粉紅色象徵「有活力的女性」、藍色象徵「堅毅不搖的愛」、綠色象徵「專一的愛」。";
   document.getElementById("products").innerText="大型鮮花擺設、花束及開幕花籃。";

   document.getElementById("img_first").src="./photos/flower_introduce/hydrangeas_first.jpg";
   document.getElementById("img_second").src="./photos/flower_introduce/hydrangeas_second.jpg";
   document.getElementById("img_third").src="./photos/flower_introduce/hydrangeas_third.jpg";
}

function lilyBtn(){
    document.getElementById("mainTitle").innerText="百合";
    document.getElementById("title").innerText="Lily";
   document.getElementById("outward").innerText="百合的形狀、顏色、香味和品種都很特別。由於鮮花盛放時花朵很大，頗具觀賞性，因此百合花 常常在花束製作中被用作主花。";
   document.getElementById("textFlower").innerText="花語是純潔、莊嚴，以及財富與榮耀，因此百合花一直是古今中外相當受歡迎的花卉。";
   document.getElementById("products").innerText="花束、盆花。";

   document.getElementById("img_first").src="./photos/flower_introduce/lily_first.jpg";
   document.getElementById("img_second").src="./photos/flower_introduce/lily_second.jpg";
   document.getElementById("img_third").src="./photos/flower_introduce/lily_third.jpg";
}

function orchidBtn(){
    document.getElementById("mainTitle").innerText="蘭花";
    document.getElementById("title").innerText="Orchid";
   document.getElementById("outward").innerText="蘭花是花店裡非常搶手的鮮花品種。蘭花因其精緻獨特的形狀、鮮豔的色彩令人讚歎。";
   document.getElementById("textFlower").innerText="蘭花的花語為淡泊、高雅、美好、高潔、賢德。自古以來，蘭花和梅、竹、菊並列為花中四君子。";
   document.getElementById("products").innerText="花束、盆花。";

   document.getElementById("img_first").src="./photos/flower_introduce/orchid_first.jpg";
   document.getElementById("img_second").src="./photos/flower_introduce/orchid_second.jpg";
   document.getElementById("img_third").src="./photos/flower_introduce/orchid_third.jpg";
}




window.addEventListener("load", function(){
    document.getElementById("roseBtn").onclick=roseBtn;
    document.getElementById("eustomaBtn").onclick=eustomaBtn;
    document.getElementById("lilyBtn").onclick=lilyBtn;
    document.getElementById("hydrangeasBtn").onclick=hydrangeasBtn;
    document.getElementById("orchidBtn").onclick=orchidBtn;
})


// 內容出現效果
$(function(){
    
})