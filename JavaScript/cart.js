function init(){
	let btnMinus = document.querySelectorAll(".decrease");
	let btnPlus = document.querySelectorAll(".increase");

	for (let i=0; i<btnMinus.length; i++){
		// 取得單價物件及值
		let unitPriceObj = document.querySelectorAll(".cart_unitprice");
		let unitPrice = parseInt(unitPriceObj[i].value);

		//取得價格合計的物件及值
		let totalPriceObj = document.querySelectorAll(".cart_totalprice");
		let totalPrice = parseInt(totalPriceObj[i].value)

		totalPriceObj.value = unitPrice

		btnMinus[i].onclick=function(){
			// 取得數量物件及值			
			let qtyObj = document.querySelectorAll(".btn_group>input");
			let qty=parseInt(qtyObj[i].value);

			if (qty>1){
				qtyObj[i].value=qty-1;
				totalPrice = qtyObj[i].value * unitPrice;
				totalPriceObj[i].value = totalPrice;
			}

		}

		btnPlus[i].onclick=function(){
			// 取得數量物件及值			
			let qtyObj = document.querySelectorAll(".btn_group>input");
			let qty=parseInt(qtyObj[i].value);

            if (qty<10){
                qtyObj[i].value=qty+1;
				totalPrice = qtyObj[i].value * unitPrice;
				totalPriceObj[i].value = totalPrice;
            }
	    }
	}

	
}


window.addEventListener("load", init, false);		