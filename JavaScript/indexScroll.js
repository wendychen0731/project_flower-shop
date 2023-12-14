$(function(){

    let showHeight = 200
	let width=$(window).width()
	console.log(width)

	// ---------------------------------------------------------------
	// 商品類型區塊
		$(".producttype_block:nth-child(odd)").css({
			position:"relative",
			left: -500,
			opacity: 0,
		})

		$(".producttype_block:nth-child(even)").css({
			position:"relative",
			right: -500,
			opacity: 0,
		})

		$(window).scroll(function(){								
			$(".producttype_block:nth-child(odd)").each(function(){
				let setThis = $(this)
				let areaTop = setThis.offset().top  // 物件和螢幕的距離
				// console.log(areaTop);

				if($(window).scrollTop() >= (areaTop + showHeight) - $(window).height() ){
					setThis.stop().animate({
						left:0,
						opacity: 1,
					}, 800)
				}else{
					setThis.stop().animate({
						left: -500,
						opacity: 0,
					}, 800)
				}

			})

			$(".producttype_block:nth-child(even)").each(function(){
				let setThis = $(this)
				let areaTop = setThis.offset().top  // 物件和螢幕的距離
				// console.log(areaTop);

				if($(window).scrollTop() >= (areaTop + showHeight) - $(window).height() ){
					setThis.stop().animate({
						right:0,
						opacity: 1,
					}, 800)
				}else{
					setThis.stop().animate({
						right: -500,
						opacity: 0,
					}, 800)
				}

			})
		})

            
	// ------------------------------------------------------------------------------
	// 關於我們區塊
	if ($(window).width()>700){	
		$(".aboutus_img:nth-child(odd)").css({
			position:"relative",
			top: -300,
			opacity: 0,
		})

		$(".aboutus_img:nth-child(even)").css({
			position:"relative",
			bottom: -300,
			opacity: 0,
		})

		$(window).scroll(function(){	
									
			$(".aboutus_img:nth-child(1)").each(function(){
				let setThis = $(this)
				let areaTop = setThis.offset().top 

				if($(window).scrollTop() >= (areaTop + showHeight) - $(window).height() ){
					setThis.stop().animate({
						top:0,
						opacity: 1,
					}, 800)
				}else{
					setThis.stop().animate({
						top: -300,
						opacity: 0,
					}, 800)
				}
			})

			$(".aboutus_img:nth-child(2)").each(function(){
				let setThis = $(this)
				let areaTop = setThis.offset().top 

				if($(window).scrollTop() >= (areaTop + showHeight) - $(window).height() ){
					setThis.stop().animate({
						bottom:0,
						opacity: 1,
					}, 1000)
				}else{
					setThis.stop().animate({
						bottom: -300,
						opacity: 0,
					}, 1000)
				}

			})

			$(".aboutus_img:nth-child(3)").each(function(){
				let setThis = $(this)
				let areaTop = setThis.offset().top 

				if($(window).scrollTop() >= (areaTop + showHeight) - $(window).height() ){
					setThis.stop().animate({
						top:0,
						opacity: 1,
					}, 1200)
				}else{
					setThis.stop().animate({
						top: -300,
						opacity: 0,
					}, 1200)
				}

			})

			$(".aboutus_img:nth-child(4)").each(function(){
				let setThis = $(this)
				let areaTop = setThis.offset().top 

				if($(window).scrollTop() >= (areaTop + showHeight) - $(window).height() ){
					setThis.stop().animate({
						bottom:0,
						opacity: 1,
					}, 1400)
				}else{
					setThis.stop().animate({
						bottom: -300,
						opacity: 0,
					}, 1400)
				}

			})

			$(".aboutus_img:nth-child(5)").each(function(){
				let setThis = $(this)
				let areaTop = setThis.offset().top 

				if($(window).scrollTop() >= (areaTop + showHeight) - $(window).height() ){
					setThis.stop().animate({
						top:0,
						opacity: 1,
					}, 1600)
				}else{
					setThis.stop().animate({
						top: -300,
						opacity: 0,
					}, 1600)
				}
			})

			$(".aboutus_img:nth-child(6)").each(function(){
				let setThis = $(this)
				let areaTop = setThis.offset().top 

				if($(window).scrollTop() >= (areaTop + showHeight) - $(window).height() ){
					setThis.stop().animate({
						bottom:0,
						opacity: 1,
					}, 1800)
				}else{
					setThis.stop().animate({
						bottom: -300,
						opacity: 0,
					}, 1800)
				}
			})

			$(".aboutus_img:nth-child(7)").each(function(){
				let setThis = $(this)
				let areaTop = setThis.offset().top 

				if($(window).scrollTop() >= (areaTop + showHeight) - $(window).height() ){
					setThis.stop().animate({
						top:0,
						opacity: 1,
					}, 2000)
				}else{
					setThis.stop().animate({
						top: -300,
						opacity: 0,
					}, 2000)
				}
			})
		})
	}
})