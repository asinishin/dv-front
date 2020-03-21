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
	whitelabelProvider.setHeaderTemplateMobile('<a href="https://satellitedeskworks.com/" title="Satellite DeskWorks" target="_blank">Satellite DeskWorks</a>');
	whitelabelProvider.setHeaderTemplateDesktop('<a href="https://satellitedeskworks.com/" title="Satellite DeskWorks" target="_blank">Satellite DeskWorks</a>');

	whitelabelProvider.setFooterTemplateMobile('<a href="https://satellitedeskworks.com/" title="Satellite DeskWorks" target="_blank">Satellite DeskWorks</a>');
	whitelabelProvider.setFooterTemplateDesktop('<div class="inner-footer"><a href="https://satellitedeskworks.com/" title="Satellite DeskWorks" target="_blank">Satellite DeskWorks</a><span>&nbsp;&copy; {{currentYear}} All Rights Reserved</span></div>');

	whitelabelProvider.setSidebarTemplate('<a href="https://satellitedeskworks.com/" title="Satellite DeskWorks" target="_blank">Satellite DeskWorks</a>');

	whitelabelProvider.setPageTitlePostfix('Satellite DeskWorks');
});
