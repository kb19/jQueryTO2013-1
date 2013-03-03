# jQueryTO2013 Talk
## Tyler Savery

Here are the files used during my presentation at jQueryTO 2013. It was a lot of fun and I wanted to make sure those who liked my approach could revisit my code samples. 

### Downloads

[Audio Recording of my Talk](https://soundcloud.com/tylersavery/jquery-to-2013-talk)

[Slides PDF](https://raw.github.com/tylersavery/jQueryTO2013/master/slideshow.pdf)

Video Recording *hopefully* coming soon

### Workflow Tools

1. ".profile" - put this in your ~/ directory and relaunch terminal. If you get a minor error it means you don't have VCPrompt installed/in your path (for git repo identification). Either remove that line or install VCPrompt

2. "calc.py" - run this to have a full featured calculator in your terminal

3. "make_complete_sequence.sh" - this will loop through pictures in a folder recurrsivly and create an MOV file. Requires FFMPEG to be installed.

4. "structure_public.sh" - awesome tool to build the folder/file structure of a new frontend project. Change as you like to meet your setup needs.

### Code Snippets
These are in the repo, but you can see them here too!

#### Javascript Gotchas

##### 1. Callbacks (get triggered on each element - not once)
```javascript
$(".item").fadeOut(function(){

	//log to console
	console.log("fadeout completed");

	//tell the server the fade out is complete
	//for some strange reason....
	App.sendAjaxRequest();

});
```

##### 2. Variable Scope
```javascript
var MyFunction = function(){

	var dog = "Doggy";  //scoped within function
	cat = "Kitty"; 		//works, but makes variable global

}
```

##### 3. Using Selectors
```javascript
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
```

##### 4. Many ways to call a function
```javascript
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
```

##### 5. "This" - works differently than other languages
```javascript
var myFunction = function() {
    console.log(this);
};

var someObject = {};            
someObject.myFunction = myFunction; 

//logs the object as expected
someObject.myFunction();     

//logs the window?
myFunction();   
```

##### 6. Adding / Subtracting Strings
```javascript
var funnyFunction = function(add){
	if(add){
		return '5' + 3; //returns "53"
	} else {
		return '5' - 3; //returns 2
	}
}
```

### Photo(s)

 ![Photo of me presenting!](https://raw.github.com/tylersavery/jQueryTO2013/master/photo.jpg "Photo of me presenting!")