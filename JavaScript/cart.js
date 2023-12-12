function init(){
	let btnMinus = document.getElementsByClassName("decrease");
	// let btnPlus = document.querySelector("div .btnPlus");
	let btnPlus = document.getElementsByClassName("increase");

	for (let i=0; i<btnMinus.length; i++){
		btnMinus[i].onclick=function(){
			let qtyObj = document.querySelectorAll(".btn_group>input");

			console.log(qtyObj[i]);
			let qty=parseInt(qtyObj[i].value);
			if (qty>1){
				qtyObj[i].value=qty-1;
			}
		}

		btnPlus[i].onclick=function(){
			let qtyObj = document.querySelectorAll(".btn_group>input");
			let qty=parseInt(qtyObj[i].value);
            if (qty<10){
                qtyObj[i].value=qty+1;
            }
	    }
	}
}
window.addEventListener("load", init, false);		