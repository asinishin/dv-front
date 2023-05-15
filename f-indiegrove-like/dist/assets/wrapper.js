(function wrapper() { 'use strict';
  var sites = [];
  var eSearch, eSites;

  if(location.search === '?cordova-wrapper=true') history.replaceState(null, null, '?');

  setTimeout(init);

  function init() {
    eSearch = document.querySelector('.search input[name=search]');
    eSites = document.querySelector('.sites');

    eSearch.value = decodeURIComponent(location.hash.substring(1));
    eSearch.addEventListener('input', onSearch);

    xhr('GET', 'sites.json', null, function(status, data) {
      if(status !== 200) return console.error('ERROR: cannot load sites:', data);
      sites = data;
      onSearch();
    });
  }

  function onSearch() {
    var text = eSearch.value || '';
    if(location.hash.substring(1) !== text) history.replaceState(null, null, '#' + text);
    if(!sites) return;

    eSites.innerHTML = '';

    console.log('sitePath', window.cordova && window.cordova.sitePath, window.cordova);

    sites
      .filter(function(site) { return site.name.toLowerCase().indexOf(text.trim().toLowerCase() || null) >= 0; })
      .forEach(function(site) {
        var base = 'https://' + site.id + '.satellitedeskworks.com/';
        var a = document.createElement('a');
        a.href = base + (window.cordova && window.cordova.sitePath ? window.cordova.sitePath : '');
        a.title = site.name;
        a.className += 'site';
        a.innerHTML = '<img src="' + base + 'api/v1/white-label/images/icon-192x192.png"><h6>' + site.name + '</h6>';

        var img = a.childNodes[0];
        img.onerror = function() {
          img.onerror = null;
          img.src = base + 'assets/icon-192x192.png';
        };

        eSites.appendChild(a);
      });
  }


  var xhr = function() {
    var xhr = new XMLHttpRequest();
    return function(method, url, data, callback) {
      xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
          var data;
          try {
            data = JSON.parse(xhr.responseText);
          } catch(err) {
            data = xhr.responseText;
          }
          callback(xhr.status, data);
        }
      };
      xhr.open(method, url);
      xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
      xhr.send(data);
    };
  }();
})();
