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

/*
function favoriteThings() {

	// In the function, create an array 
	var favoriteThings = ["raindrops on roses", "whiskers on kittens", "bright copper kettles", "warm woolen mittens"];
  		for (var i = 0; i < favoriteThings.length; i++) { 	// and loop through the results
		// console.log(favoriteThings[i]);  // checking that the loop works
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

 */

// Also works: 
	function favoriteThings() {
		var favoriteThings = ["raindrops on roses", "whiskers on kittens", "bright copper kettles", "warm woolen mittens"];
		var statement = "My favorite things are ";
		for (var i = 0; i < favoriteThings.length; i++) {
		    if (i == favoriteThings.length-1) {
				statement += ("and " + favoriteThings[i] + ".");
			  } else {
				statement += (favoriteThings[i] + ", ");
		}
	}

	alert(statement);
	}
// */

} // ends favoriteThings function

