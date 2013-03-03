# jQueryTO2013 Talk
## Tyler Savery

Here are the files used during my presentation at jQueryTO 2013. It was a lot of fun and I wanted to make sure those who liked my approach could revisit my code samples. 

[Audio Recording of my Talk](https://soundcloud.com/tylersavery/jquery-to-2013-talk)

[Slides PDF](https://github.com/tylersavery/jQueryTO2013/slides.pdf)

![alt text](https://github.com/tylersavery/jQueryTO2013/photo.jpg "Photo of me presenting!")

Video Recording *hopefully* coming soon


### Code Snippets
These are in the repo, but you can see them here too!

#### 1. callbacks (get triggered on each element - not once)
 ```javascript
$(".item").fadeOut(function(){
	
	//log to console
	console.log("fadeout completed");

	//tell the server the fade out is complete
	//for some strange reason....
	App.sendAjaxRequest();

});
 ```