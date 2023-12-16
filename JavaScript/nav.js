window.addEventListener("scroll", function(){
    if (document.documentElement.scrollTop>800){
        document.getElementById("header").classList.add("smallPanel")
        document.querySelector("ul.nav_ul").style.display="none";
        document.getElementById("nav_list").checked = false;

    } else{
        document.getElementById("header").classList.remove("smallPanel")
    }
})

$(function(){
    $("#navList").click(function(){
        $(".nav_ul").slideToggle(800);
    })
})