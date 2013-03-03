
//set global app 
var App = {};

App.Init = function() {

	App.Cache();
	App.BindListeners();
	App.InitVideo();

};


App.Cache = function() {

	//init DOM object
	App.dom = {};

	//we can cache some simple objects
	App.dom.page = $(".page");
	App.dom.header = $(".page .header");
	
	//create our own namespaces
	App.dom.menu = {};
	//and cache them to it 
	App.dom.menu.container = $(".page .header .menu-container");
	App.dom.menu.items = $(".page .header .menu-container .item");

	//even cache the document/window - not even sure if this improves efficiency
	App.dom.doc = $(document);
	App.dom.win = $(window);

	//another namespace for some properties...this would likely be done somewhere else though
	App.win = {};
	App.win.w = 0;
	App.win.h = 0;

};

App.BindListeners = function(){

	//menu events
	App.dom.menu.items.click(function(){

		var page = $(this).data('page');
		App.GoToPage(page);

	}).on('mouseover', function(){

		$(this).addClass('hover');

	}).on('mouseout', (function(){

		$(this).removeClass('hover');

	});

	//window events
	App.dom.win.on('resize', function({

		App.SetSizeAndPositions();

	});

	//keyboard events
	App.dom.doc.on('keydown', function(e){

		switch(e.keycode){
			case 38:
				App.ArrowKeyPressed('up');
				return false;
				break;
		}

		return true;

	});

};


// methods


App.SetSizeAndPositions = function(){

	//get window state
	App.win.w = App.dom.win.width();
	App.win.h = App.dom.win.height();

	//set the page width to the window width
	//obviously this is silly since we could just use width: 100%
	App.dom.page.width(App.win.w);

};

App.GoToPage = function(page){

	window.location = page;

};

App.InitVideo = function(){

	var vid = new Video(1, 2487, 640, 480, 'My Video', 'Clever Caption', 'my-video.mp4', 'my-video.ogv');
	App.dom.videoContainer.html(vid.html());
	vid.play();

};

//Classes


var Video = function VideoClass(i, id, width, height, title, caption, mp4, ogv){

	this.i = i;
	this.id = id;
	this.width = width;
	this.height = height;
	this.title = title;
	this.caption = caption;
	this.mp4 = mp4;
	this.ogv = ogv;

};

Video.prototype = {

	i : 0,
	id : 0,
	title : "",
	width : 0,
	height : 0,
	loop : 1,

	container: function(){
		var html = '<video loop="true"  id="video_'+ this.i + '" width="'+ this.width +'" height="'+ this.height +'">';

		html += '<source src="'+ this.mp4 +'" type="video/mp4" />';
		html += '<source src="'+ this.ogv +'" type="video/ogg" />';

		html += '</video>';

		return html;

	},
	play: function(){
		$("#video_" + this.i)[0].play();
		App.resetVideoProgress();
		return;
	},
	pause: function(){
		$("#video_" + this.i)[0].pause();
		return;
	},

};


//why can't I use "App.dom.doc"? 
//5 reddit gold to whoever can answer this...
$(document).ready(function(){

	App.Init();

});



/* UTILITY FUNCTIONS */
//sometimes I include these in a different file

var Util = {};

Util.ShuffleArray = function(o){
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

Util.SelectRandomItemFromArray = function(array){
	return array[Math.floor(Math.random()*array.length)];
};

Util.FormatPrice = function(num) {

	num = parseFloat(num);

    var p = num.toFixed(2).split(".");
    return "$" + p[0].split("").reverse().reduce(function(acc, num, i, orig) {
        return  num + (i && !(i % 3) ? "," : "") + acc;
    }, "") + "." + p[1];

};