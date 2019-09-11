/**
 * This script checks for current screen width and redirects to desktop site
 * version if current width greater than the threshold.
 *
 * Clone this redirect-desktop-sample.js file as redirect-desktop.js
 *
 * This script is the first file loaded in index.html and if there is no redirect-desktop.js
 * file in src/assets, Deskworks app will request it from server on each load and get 404 response.
 *
 * To disable redirect on dev deployment, just comment the entire file contents.
 * Also, this file is ignored by git, so it will not be removed on git pull.
 *
 * !!!!! After editing redirect-desktop.js in src/assets, run grunt to copy file to dist folder !!!!!
 */
if(window.innerWidth > 768) {

	// Try to stop loading rest of the page
	if(window.stop !== undefined) {
		window.stop();
	} else if (document.execCommand !== undefined) { // for IE
		document.execCommand("Stop", false);
	}
	document.write('<script type="text/unknown">');

	// Redirect
	window.location.href = '/desktop/' + (window.location.hash || '#/');
}
