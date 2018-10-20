

class Food{
	constructor(initialQuantity, type){
		this.quantity = initialQuantity;
		this.type = type;
	}
	getType(){
		return this.type;
	}
	getAmount(){
		return this.quantity;
	}
	eatAmount( amountToEat ){
		if( amountToEat > this.quantity ){
			amountToEat = this.quantity;
		}
		this.quantity -= amountToEat;
		return amountToEat;
	}
}