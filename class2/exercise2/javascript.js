<<<<<<< HEAD
// Lifetime supply calculator
function calculate() {

	var age = 30;
	var oldAge = 100;
	var perDay = 2;

	var days = (oldAge - age) * 365; // 25,550
	var total = (perDay * days);

	alert(total + " bananas");

	//if else statement
	if (total >= 40,000) { 
		// total is greater than or equal to 40,000
		console.log(total);
		console.log("Wow, that's a lot! " + total + " FTW!");
	} else {
		// total is less than 40,000
		console.log(total);
		console.log("That's a healthy dose of potassium. " + total + " is the recommended lifetime dose.");
	}

} // ends function lifetimeSupply


// Favorite Things
// Create a new function called favoriteThings() in the javascript file
function favoriteThings() {

	// In the function, create an array 
	var favoriteThings = ["raindrops on roses", "whiskers on kittens", "bright copper kettles", "warm woolen mittens"];
  	
	// and loop through the results
	for (var i = 0; i < favoriteThings.length; i++) {
		// console.log(things[i]);  // checking that the loop works
	}

	// Post the results in an alert "My favorite things are XX, YY, ZZ"
	alert("My favorite things are " + favoriteThings);
	

	// Bonus -- add an "and" in the sentence before the last item
	var statement = "My favorite things are ";
	alert(statement);

	for (var i = 0; i < favoriteThings.length; i++) {

        //if-else statement
        if (i == favoriteThings.length-1) {
    		alert("and " + favoriteThings[i] + ".");
    	} else {
    		alert(favoriteThings[i] + ", ");
    	}
  	} 

/* Also works: // BUT HOW DOES "+=" WORK, EXACTLY?
	function faveThings() {
		var faveThings = ["A", "B", "C", "D"];
		var statement = "My favorite things are ";
		for (var i = 0; i < faveThings.length; i++) {
		    if (i == faveThings.length-1) {
				statement += ("and " + faveThings[i] + ".");
			  } else {
				statement += (faveThings[i] + ", ");
		}
	}
	alert(statement);
	}
*/

} // ends favoriteThings function



function myFriends() {

	var friends = [ 
		{
			name: "Sarah",
			hairColor: "brown"
		},
		{
			name: "Ariel",
			hairColor: "red"
		},
		{
			name: "Belle",
			hairColor: "blonde"
		}
	];

	var result = "My friends: ";

	for (var i=0; i<friends.length; i++) {
		result += describeFriend(friends[i]); // run this function and pass in object
		console.log(result); // check for desired loop result
	}

	console.log(result);

}; // ends myFriends function. semicolon is optional here.

function describeFriend(myFriend) {
	console.log(myFriend); // check for desired loop result
	return "My friend " + myFriend.name + " has " + myFriend.hairColor + " hair. ";
}

=======
function calculate(){
    var age = 26;
    var oldAge = 96;
    var perDay = 2;

    var days = (oldAge - age) * 356;
    var total = perDay * days;
    if(total > 40000){
        alert("You will need " + total + " to last you until the ripe old age of " + oldAge + ". Wow! That's a lot!");
    }else{
        alert("You will need " + total + " to last you until the ripe old age of " + oldAge + ". You seem pretty reasonable");
    } 
}

function favoriteThings(){
    var favoriteThings = ['Rabbits', 'Orange', 'Yogurt', 'Brussel Sprouts', 'Otters'];
    var result = 'My favorite things are: ';
    for (var i = 0; i<favoriteThings.length; i++){
        if (i < favoriteThings.length - 1){
            result += favoriteThings[i] + ', ';
        }else{
            result += "and " + favoriteThings[i] + '.';
        }
    }
    alert(result);
}
function myFriends(){
    var friends = [
        {name: 'Santa Claus',
        hair: 'red'},
        {name: 'Easter Bunny',
        hair: 'brown'},
        {name: 'Tooth Fairy',
        hair: 'blue'}
    ];
    var results = "My friends: "
    for(var i = 0; i < friends.length; i++){
        results += describeFriend(friends[i]);
    }
    alert(results)
}
function describeFriend(friend){
    return "My friend " + friend.name + " has " + friend.hair + " hair. ";
}
>>>>>>> 1430c837a2f3a4035af10f4dfaf9e1a28563d062
