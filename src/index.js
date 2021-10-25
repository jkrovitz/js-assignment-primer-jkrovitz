 export function calculateTotal(items, tax) {
	 let total = 0;
	 let costOfItem = 0;
	 for (let i = 0; i < items.length; i++) {
		if (items[i].taxable === true) {
			costOfItem =(items[i].price).valueOf() + (((items[i].price).valueOf()) *  ((Math.abs(tax).valueOf())))	
		}
		else {
			costOfItem = items[i].price.valueOf()
		}
		 total = total.valueOf() +  costOfItem.valueOf()
	 }
	 return total.valueOf()

}
