
//1. callbacks (get triggered on each element - not once)

$(".item").fadeOut(function(){
	
	//log to console
	console.log("fadeout completed");

	//tell the server the fade out is complete
	//for some strange reason....
	App.sendAjaxRequest();

});


//2. variable scope

var MyFunction = function(){

	var dog = "Doggy";  //scoped within function
	cat = "Kitty"; 		//works, but makes variable global

}

//3. Using Selectors

var FunctionThatIsCalledAllTheTime = function(w){

	$(".foo").addClass("active");
	$(".bar").css("width", w + "px");

}

//instead:

var App = {};

App.Cache = function(){

	App.dom = {};
	App.dom.foo = $('.foo');
	App.dom.bar = $('.bar');

};

var FunctionThatIsCalledAllTheTime = function(w){

	App.dom.foo.addClass("active");
	App.dom.bar.css("width", w + "px");

}


//4. Many ways to call a function

loadSomePage = function(hash){
	// Never do this!
}

function loadSomePage(hash){
	// This is okay....
}

var loadSomePage = function(hash){
	//This is great
}

App.loadSomePage = function(hash){
	//This is namespaced and best
}

App.loadSomePage = function loadSomePage(hash){
	//This option can be useful because it 
	//provides a little more context when debugging.
}


//5. "This" - works differently than other languages

var myFunction = function() {
    console.log(this);
};

var someObject = {};            
someObject.myFunction = myFunction; 

//logs the object as expected
someObject.myFunction();     

//logs the window?
myFunction();                


//6. Adding / Subtracting Strings

var funnyFunction = function(add){
	if(add){
		return '5' + 3; //returns "53"
	} else {
		return '5' - 3; //returns 2
	}
}