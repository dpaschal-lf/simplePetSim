
var animals = [];
var foodSources = [];

function startApp(){
	var dog = new Animal("Rex", 'dog', 'husky');
	animals.push(dog);

	var dogFood = new Food(3, 'dog');
	foodSources.push( dogFood );
	var catFood = new Food(4, 'cat');
	foodSources.push( catFood );
	var birdFood = new Food(10, 'bird');
	foodSources.push( birdFood );
}

startApp();