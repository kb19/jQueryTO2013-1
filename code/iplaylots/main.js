var App = {};
var SlideWidget = {};


App.Init = function(){

	App.Cache();
	App.BindListeners();
	App.GameSlides();
	App.TopSlides();
	App.Favicon();
}

App.Cache = function(){

	App.dom = {};

	App.dom.page = $(".page");

	//artists
	App.dom.willBox = $(".artists .left");
	App.dom.willBio = $("#will-bio");
	App.dom.willTitle = $(".artists .left .title");

	App.dom.rawlsBox = $(".artists .right");
	App.dom.rawlsBio = $("#rawls-bio");
	App.dom.rawlsTitle = $(".artists .right .title");

	//biz
	App.dom.lonBox = $(".biz .left");
	App.dom.lonBio = $("#lon-bio");
	App.dom.lonTitle = $(".biz .left .title");

	App.dom.reneBox = $(".biz .middle");
	App.dom.reneBio = $("#rene-bio");
	App.dom.reneTitle = $(".biz .middle .title");

	App.dom.paulBox = $(".biz .right");
	App.dom.paulBio = $("#paul-bio");
	App.dom.paulTitle = $(".biz .right .title");



	//company
	App.dom.pfBox = $(".companies .full.pf");
	App.dom.pfBio = $("#pf-bio");
	App.dom.pfTitle = $(".companies #pf-image .title");

	App.dom.yaBox = $(".companies .full.ya");
	App.dom.yaBio = $("#ya-bio");
	App.dom.yaTitle = $(".companies #ya-image .title");


	//devs

	App.dom.tylerBox = $("#tyler-image");
	App.dom.adamBox = $("#adam-image");
	App.dom.jamieBox = $("#jamie-image");

	App.dom.tylerBio = $("#tyler-bio");
	App.dom.adamBio = $("#adam-bio");
	App.dom.jamieBio = $("#jamie-bio");

	App.dom.tylerTitle = $("#tyler-image .title");
	App.dom.adamTitle = $("#adam-image .title");
	App.dom.jamieTitle = $("#jamie-image .title");



	//top slider

	App.dom.topSlider = $(".nvr-container ul.nvr");
	App.dom.topSliderSlides = $(".nvr-container ul.nvr li");
	




}

App.BindListeners = function(){

	//artists
	App.dom.willBox.mouseover(function(){
		App.dom.willBio.addClass('visible');
		App.dom.willTitle.addClass('focus');
	});

	App.dom.rawlsBox.mouseover(function(){
		App.dom.rawlsBio.addClass('visible');
		App.dom.rawlsTitle.addClass('focus');

	});


	//artist mouse out
	App.dom.willBox.mouseout(function(){
		App.dom.willBio.removeClass('visible');
		App.dom.willTitle.removeClass('focus');

	});

	App.dom.rawlsBox.mouseout(function(){
		App.dom.rawlsBio.removeClass('visible');
		App.dom.rawlsTitle.removeClass('focus');
	});


	//biz
	App.dom.lonBox.mouseover(function(){
		App.dom.lonBio.addClass('visible');
		App.dom.lonTitle.addClass('focus');
	});

	App.dom.reneBox.mouseover(function(){
		App.dom.reneBio.addClass('visible');
		App.dom.reneTitle.addClass('focus');

	});

	App.dom.paulBox.mouseover(function(){
		App.dom.paulBio.addClass('visible');
		App.dom.paulTitle.addClass('focus');

	});


	//biz mouse out
	App.dom.lonBox.mouseout(function(){
		App.dom.lonBio.removeClass('visible');
		App.dom.lonTitle.removeClass('focus');

	});

	App.dom.reneBox.mouseout(function(){
		App.dom.reneBio.removeClass('visible');
		App.dom.reneTitle.removeClass('focus');
	});

	App.dom.paulBox.mouseout(function(){
		App.dom.paulBio.removeClass('visible');
		App.dom.paulTitle.removeClass('focus');
	});


	//companys
	App.dom.pfBox.mouseover(function(){
		App.dom.pfBio.addClass('visible');
		App.dom.pfTitle.addClass('focus');
	});

	App.dom.yaBox.mouseover(function(){
		App.dom.yaBio.addClass('visible');
		App.dom.yaTitle.addClass('focus');

	});


	//companys mouse out
	App.dom.pfBox.mouseout(function(){
		App.dom.pfBio.removeClass('visible');
		App.dom.pfTitle.removeClass('focus');

	});

	App.dom.yaBox.mouseout(function(){
		App.dom.yaBio.removeClass('visible');
		App.dom.yaTitle.removeClass('focus');
	});


	//devs

	App.dom.tylerBox.mouseover(function(){
		App.dom.tylerBio.addClass('visible');
		App.dom.tylerTitle.addClass('focus');
	}).mouseout(function(){
		App.dom.tylerBio.removeClass('visible');
		App.dom.tylerTitle.removeClass('focus');
	});

	App.dom.adamBox.mouseover(function(){
		App.dom.adamBio.addClass('visible');
		App.dom.adamTitle.addClass('focus');
	}).mouseout(function(){
		App.dom.adamBio.removeClass('visible');
		App.dom.adamTitle.removeClass('focus');
	});

	App.dom.jamieBox.mouseover(function(){
		App.dom.jamieBio.addClass('visible');
		App.dom.jamieTitle.addClass('focus');
	}).mouseout(function(){
		App.dom.jamieBio.removeClass('visible');
		App.dom.jamieTitle.removeClass('focus');
	});


}


App.GameSlides = function(){

	App.GenerateGameSliderHtml();

	SlideWidget.BindListeners = function(){

		SlideWidget.arrowL.click(function(){
			SlideWidget.PrevSlide();
		});

		SlideWidget.arrowR.click(function(){
			SlideWidget.NextSlide();
		});

		SlideWidget.nav.items.click(function(){

			var i = parseInt($(this).data('i'));

			SlideWidget.GoToRow(i);

		});

		$(document).keydown(function(e){
			switch(e.keyCode){
				//up
				case 38:
					SlideWidget.PrevRow();
					return false;
					break;
				//down
				case 40:
					SlideWidget.NextRow();
					return false;
					break;
				//left
				case 37:
					SlideWidget.PrevSlide();
					return false;
					break;
				//right
				case 39:
					SlideWidget.NextSlide();
					return false;
					break;
				default:
					return true;
			}
		});

	}();


	SlideWidget.GoToRow = function(i){

		var t = 0 - (i * SlideWidget.height);

		SlideWidget.sliderMaster.css('top', t + 'px');
		SlideWidget.currentSlider = i;

		SlideWidget.nav.items.removeClass('active');
		$('#nav-item-' + i).addClass('active');

	}

	SlideWidget.NextRow = function(){
		SlideWidget.currentSlider++;
		if(SlideWidget.currentSlider >= SlideWidget.nav.items.length){
			SlideWidget.currentSlider = 0;
		}

		SlideWidget.GoToRow(SlideWidget.currentSlider);
	}

	SlideWidget.PrevRow = function(){
		SlideWidget.currentSlider--;
		if(SlideWidget.currentSlider < 0){
			SlideWidget.currentSlider = SlideWidget.nav.items.length - 1;
		}

		SlideWidget.GoToRow(SlideWidget.currentSlider);
	}

	SlideWidget.NextSlide = function(){

		//get local vars from global
		var currentSlide = SlideWidget.currentSlide[SlideWidget.currentSlider];
		var slideCount = SlideWidget.slideCount[SlideWidget.currentSlider];

		if(currentSlide >= (slideCount - 1 )){
			var l = 0;
			currentSlide = 0;
		} else {
			var l = 0 - ((SlideWidget.width * currentSlide) + SlideWidget.width);
			currentSlide++;
		}

		//set globals from local vars
		SlideWidget.currentSlide[SlideWidget.currentSlider] = currentSlide;

		//set css left position
		SlideWidget.sliders[SlideWidget.currentSlider].css('left' , l + 'px');
	
	}

	SlideWidget.PrevSlide = function(){

		//get local vars from global
		var currentSlide = SlideWidget.currentSlide[SlideWidget.currentSlider];
		var slideCount = SlideWidget.slideCount[SlideWidget.currentSlider];

		if(currentSlide == 0){
			var l = 0 - ((SlideWidget.width * slideCount) - SlideWidget.width);
			currentSlide = slideCount - 1;
		} else {
			currentSlide--;
			var l = 0 -(SlideWidget.width * (currentSlide));
		}

		
		//set locals to global vars
		SlideWidget.currentSlide[SlideWidget.currentSlider] = currentSlide;

		//set css left position
		SlideWidget.sliders[SlideWidget.currentSlider].css('left' , l + 'px');
	
	}

}


App.GenerateGameSliderHtml = function(){

	SlideWidget.gameSlides = [[0,1,2,3],[0,1,2,3,4,5,6],[0,1,2,3], [0,1,2,3]];
	SlideWidget.slideCount = [];

	App.dom.gameSliderContainer = $(".game-slider-container");
	SlideWidget.arrowL = $(".game .arrow-l");
	SlideWidget.arrowR = $(".game .arrow-r");
	SlideWidget.nav = {};
	SlideWidget.nav.items = $(".game .nav .nav-item");

	var gameSlides = SlideWidget.gameSlides;

	var html = '<ul class="sliders">';

	for(y=0; y<gameSlides.length; y++){

		row = gameSlides[y];
		SlideWidget.slideCount[y] = row.length;

		html += '<li class="slider" id="slider-'+ y +'">';
		html += '<ul>';

		for(x=0; x<row.length; x++){
			html += '<li class="slide" id="slide-' + x + '">';
			html += '<img src="/images/slides/'+y+'/'+x+'.jpg" />';
			html += '</li>';
		}

		html += '</ul>';
		html += '</li>';
	}

	html += '</ul>';

	App.dom.gameSliderContainer.html(html);

	SlideWidget.sliderMaster = $("ul.sliders");

	SlideWidget.sliders = [];
	SlideWidget.sliders[0] = $("#slider-0 ul");
	SlideWidget.sliders[1] = $("#slider-1 ul");
	SlideWidget.sliders[2] = $("#slider-2 ul");
	SlideWidget.sliders[3] = $("#slider-3 ul");

	SlideWidget.currentSlider = 0;
	SlideWidget.currentSlide = [0,0,0,0];
	
	SlideWidget.width = 864;
	SlideWidget.height = 300;
	
}

App.TopSlides = function(){

	App.topSlides = {};
	App.topSlides.count = App.dom.topSliderSlides.length;
	App.topSlides.currentSlide = 0;
	App.topSlides.transitionInterval = 3000;
	App.topSlides.width = 972;

	var colorArray = ['#1c9948', '#d41f26', '#1fb2e7', '#fac90e'];

	App.cover = $(".header .nvr-container .cover");

	window.setInterval(function(){

		App.topSlides.currentSlide++;

		if(App.topSlides.currentSlide < App.topSlides.count){
			var l = 0 - (App.topSlides.width * App.topSlides.currentSlide);

		} else {
			l = 0;
			App.topSlides.currentSlide = 0;
		}

		var rand = Math.floor(Math.random() * (colorArray.length + 1)) - 1;
		if(rand<0){
			rand = 0;
		}
		var color = colorArray[rand];

		App.cover.css('background-color', color);

		App.cover.fadeIn(100, function(){
			App.dom.topSlider.css('left', l + 'px');
			App.cover.fadeOut(150);
		});
		

	}, App.topSlides.transitionInterval);


}

App.Favicon = function(){

	var current = 1;
	var max = 4;

    window.setInterval(function(){

    	current++;
    	if(current > max){
    		current = 1;
    	}

    	var link = '/favicon-'+ current +'.ico';

    	$("#favicon").attr('href', link)

    }, 500);
    
}

$(document).ready(function(){

	App.Init();

});