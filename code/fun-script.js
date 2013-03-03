App = {};
App.SpeakAtjQueryTO = function(mood) {
	
	switch(mood.toLowerCase()){
		case "nervous":
		case "scared":
			Audience.PictureNaked();
			break;
		case "!prepared":
			Reddit.Procastinate(1);
			break;
		case "excited":
			Friends.Rehearse(30);
			break;
		default:
			App.Share();
			break;
	}

	App.CreateSlides(10);
	App.FindLocation('81 St. Mary Street', 'Toronto', 'ON', 'M5S1J4', 'Alumni Hall 100');
	App.Arrive();

}

$(document).ready(function(){

	myMood = window.location.hash.replace('#', '');

	if(App.currentDate == '03-03-2013'){
		App.SpeakAtjQueryTO(myMood);
	}

});