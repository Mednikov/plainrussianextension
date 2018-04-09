


loadPlugin = function ( e )
{

	browser = (function () {
	  return window.msBrowser ||
	    window.browser ||
	    window.chrome;
	})();
  

  browser.tabs.query({active: true, currentWindow: true}, function(result) {
      result.forEach(function(tab) {
      	// console.log(tabs[0]);
          window.document.getElementById('frame').setAttribute('src','https://plainrussian.ru/#url=' + tab.url);
      });
  });

  // var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
  // gettingActiveTab.then((tabs) => {

  //   window.document.getElementById('frame').setAttribute('src','https://plainrussian.ru/#url=' + tabs[0].url);
  // });

}

window.addEventListener('load',loadPlugin);

