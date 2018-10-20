

class Animal{
	constructor(name, species, breed){
		this.name = name;
		this.species = species; 
		this.breed = breed;
		this.hitpoints = 10;

		this.timer = setInterval(this.update.bind(this), 1000);
	}
	eat( foodSource  ){
		debugger;
		if(foodSource.getType() !== this.species ){
			console.log(this.name + " doesn't like " + foodSource.getType() + ' food');
			return;
		}
		var amountNeeded = 10 - this.hitpoints;

		var foodValue = foodSource.eatAmount( amountNeeded );

		if(foodValue + this.hitpoints > 10){
			var usedFood = 10-this.hitpoints;
			this.hitpoints += usedFood;
			return usedFood;
		}
		// this.hitpoints += foodValue;
		// if(this.hitpoints>10){
		// 	this.hitpoints = 10;
		// }
	}
	update(){
		this.hitpoints--;
		//console.log(this.name + ' current hitpoints '+ this.hitpoints)
		if(this.hitpoints === 0){
			this.die();
		}
	}
	die(){
		clearInterval( this.timer );
		console.log('dead');
	}
}