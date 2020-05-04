/**
 * Deployment configuration.
 *
 * 1. Clone this config-sample.js file as config.js
 * 2. Specify correct API url in config.js
 *
 * This file will be caught by Deskworks app automatically and overlap configuration in app.js
 * Also, this file is ignored by git, so it will not be removed on git pull.
 * You should keep this file in src/assets/ folder, it will be copied to dist/assets by grunt.
 * If there is no config.js file, Deskworks app will request it from server on each load and get 404 response.
 *
 * !!!!! After editing config.js in src/assets, run grunt to copy file to dist folder !!!!!
 */
angular.module('deskworks').config(function(deskworksConfigProvider) {
	deskworksConfigProvider.setApiUrl('/api/v1');
});

/**
 * Footer contents customization
 */
angular.module('deskworks.whitelabel').config(function(whitelabelProvider) {
	//whitelabelProvider.setHeaderTemplateMobile('<a href="https://canopy.space/" title="CANOPY" target="_blank">CANOPY</a>');
	whitelabelProvider.setHeaderTemplateDesktop('<a href="https://canopy.space/" title="CANOPY" target="_blank">CANOPY</a>');

	// whitelabelProvider.setFooterTemplateDesktop('<a href="https://canopy.space/" title="CANOPY" target="_blank">CANOPY / 2193 Fillmore Street San Francisco, CA 94115 / +1.415.604.3330 / info@canopy.space</a>');
	whitelabelProvider.setFooterTemplateDesktop('<span><a href="https://canopy.space/" target="_blank">CANOPY</a> / 2193 Fillmore Street San Francisco, CA 94115 / <a href="tel:415.604.3330" target="_blank">+1.415.604.3330</a> / <a href="mailto:info@canopy.space" target="_blank">info@canopy.space</a></span>');
	whitelabelProvider.setFooterTemplateMobile('<a href="https://canopy.space/" title="CANOPY" target="_blank">&copy; {{currentYear}} CANOPY</a>');

	whitelabelProvider.setSidebarTemplate('<a href="https://canopy.space/" title="CANOPY" target="_blank">CANOPY</a>');
	whitelabelProvider.setPageTitlePostfix('CANOPY');

	whitelabelProvider.setTermsAndConditionsTemplate('CANOPY’s <a href="https://canopy.space/" target="_blank">Terms and Conditions</a>');

	whitelabelProvider.setContactTemplate('<a href="https://canopy.space/contact/" title="Contact Us" target="_blank">Contact</a>');

	document.querySelector('head').innerHTML += '<link href="//fonts.googleapis.com/css?family=Ubuntu:300,400,700" rel="stylesheet" type="text/css">';
});
