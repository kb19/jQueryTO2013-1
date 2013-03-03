#functions

#!/bin/bash

CURL_USER_AGENT="Mozilla/5.0 (Windows; U; MSIE 7.0; Windows NT 6.0; en-US)" # user agent for curl = Windows OS, MS Internet Explorer 7
JS_LIBS_DIR="./" # Root save path

function download_file() {
	# curl ops: silent, insecure, redirects, file output
	curl -s -k -l -o $1 -A '$CURL_USER_AGENT' $2;
	echo "`pwd`/$1 - UPDATED!"
}

function write_file(){

    echo $2 > $1
    echo "`pwd`/$1 - UPDATED!"
    
    
}

function unzip_file() {
	# unzip ops: overwrite without prompting, quiet mode
	unzip -o -q $1;
}

function update_jquery() {
	
	JQUERY_LATEST_URL="http://code.jquery.com/jquery-latest.js"
	JQUERY_LATEST_MIN_URL="http://code.jquery.com/jquery-latest.min.js"

	#download_file 	jquery.js 	$JQUERY_LATEST_URL;
	download_file 	jquery.min.js 	$JQUERY_LATEST_MIN_URL;
}

function update_headjs() {

	HEADJS_LATEST_URL="https://github.com/headjs/headjs/raw/master/dist/head.js"
	HEADJS_MIN_URL="https://github.com/headjs/headjs/raw/master/dist/head.min.js"
	HEADJS_LOAD_MIN_URL="https://github.com/headjs/headjs/raw/master/dist/head.load.min.js"

	download_file 	head.js 		$HEADJS_LATEST_URL;
	download_file 	head.min.js 		$HEADJS_MIN_URL;
	download_file 	head.load.min.js 	$HEADJS_LOAD_MIN_URL;
}

function update_css_browser_selector() {
	
	CSS_BROWSER_SELECTOR_LATEST_URL="https://raw.github.com/rafaelp/css_browser_selector/master/css_browser_selector.js"
	
	download_file css_browser_selector.js $CSS_BROWSER_SELECTOR_LATEST_URL;
}

function update_modernizr() {
	
	MODERNIZR_LATEST_URL="https://raw.github.com/Modernizr/Modernizr/master/modernizr.js"
	
	download_file modernizr.js $MODERNIZR_LATEST_URL;
}

function update_redirection_mobile() {
	
	REDIRECTION_MOBILE_LATEST_URL="https://github.com/sebarmeli/JS-Redirection-Mobile-Site/raw/master/redirection_mobile.js"
	REDIRECTION_MOBILE_MIN_URL="https://github.com/sebarmeli/JS-Redirection-Mobile-Site/raw/master/redirection_mobile.min.js"
	REDIRECTION_MOBILE_SELF_URL="https://github.com/sebarmeli/JS-Redirection-Mobile-Site/raw/master/redirection_mobile_self.js"
	REDIRECTION_MOBILE_SELF_MIN_URL="https://github.com/sebarmeli/JS-Redirection-Mobile-Site/raw/master/redirection_mobile_self.min.js"
	
	download_file 	redirection_mobile.js 		$REDIRECTION_MOBILE_LATEST_URL;
	download_file 	redirection_mobile.min.js 	$REDIRECTION_MOBILE_MIN_URL;
	download_file 	redirection_mobile_self.js 	$REDIRECTION_MOBILE_SELF_URL;
	download_file 	redirection_mobile_self.min.js 	$REDIRECTION_MOBILE_SELF_MIN_URL;
}

function update_jquery_cookie() {
	
	JQUERY_COOKIE_LATEST_URL="https://raw.github.com/carhartl/jquery-cookie/master/jquery.cookie.js"

	download_file jquery.cookie.js $JQUERY_COOKIE_LATEST_URL;
}

function update_respond() {
	
	RESPOND_LATEST_URL="https://github.com/scottjehl/Respond/raw/master/respond.src.js"
	RESPOND_MIN_URL="https://github.com/scottjehl/Respond/raw/master/respond.min.js"
	
	download_file 	respond.js 	$RESPOND_LATEST_URL;
	download_file 	respond.min.js 	$RESPOND_MIN_URL;
}

function update_css_reset() {
    
    RESPOND_URL="https://raw.github.com/theandym/reset_css/master/reset.css"
    download_file reset.css $RESPOND_URL;
    
}



function create_html_file() {
    
    HTML_URL="https://raw.github.com/tylersavery/startingpieces/master/index.html"

	download_file index.html $HTML_URL;
    
}



echo "Hi $USER!"
echo "Let me create some structure for you".
echo "What is the folder name of your project?"
read project_name
echo "Domain?"
read domain_name
echo "Time to create $project_name"
mkdir $project_name
cd $project_name
mkdir public
mkdir ~assets
cd public
#touch index.html
create_html_file
mkdir css
mkdir js
mkdir images
cd css
touch main.css
touch reset.css
update_css_reset
cd ..
cd js
touch main.js
touch jquery.min.js
update_jquery
update_modernizr
update_jquery_cookie
update_css_browser_selector
cd ..

echo "File Structure Built"
echo ""
echo "---------------------"
echo ""
echo "Add to host file:"
echo "127.0.0.1    $domain_name"
echo "";
echo "add to vhost file:"
echo "<VirtualHost *:80>"
echo "  ServerName $domain_name"
echo "  DocumentRoot \"/Users/tyler/Sites/$project_name/public\""
echo "</VirtualHost>";

echo ""
echo "--------"
echo "complete"
echo ""
