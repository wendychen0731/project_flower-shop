window.addEventListener("scroll", function(){
    if (document.documentElement.scrollTop>800){
        document.getElementById("header").classList.add("smallPanel")

    } else{
        document.getElementById("header").classList.remove("smallPanel")
    }
})

$(function(){
    $("#navList").click(function(){
        $(".nav_ul").slideToggle(800);
    })

    $(window).resize(function(){
        if($(window).width()>750){
            $(".nav_ul").css({
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                paddingTop: 0,
            })
        } else if ($(window).width() <= 750) {
            if (document.getElementById("nav_list").checked = true)
            $(".nav_ul").css({
                flexDirection: "column",
                justifyContent: "flex-start",
            })

        }
    })
})