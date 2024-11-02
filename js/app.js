// Dom7
var $ = Dom7;

// Demo
if (document.location.href.includes('safe-areas')) {
  const html = document.documentElement;
  if (html) {
    html.style.setProperty('--f7-safe-area-top', '44px');
    html.style.setProperty('--f7-safe-area-bottom', '34px');
  }
}
if (document.location.href.includes('example-preview')) {
  $('.view-main').attr('data-browser-history', 'true');
  $('.view-main').attr('data-browser-history-root', '/');
  $('.view-main').attr('data-preload-previous-page', 'false');
  $('.view-main').attr('data-ios-swipe-back', 'false');
  document.documentElement.classList.add('example-preview');
}

// Theme
var theme = 'ios';
document.documentElement.classList.add('dark');
// Init App
var app = new Framework7({
  el: '#app',
  theme,
  view: {
    componentCache: false,
    browserHistory: false,
  },
  // store.js,
  store: store,
  darkMode: localStorage?.getItem('darkmode-'+theme) == "false" ? false : true,
  // routes.js,
  routes: routes,
  popup: {
    closeOnEscape: true,
  },
  sheet: {
    closeOnEscape: true,
  },
  popover: {
    closeOnEscape: true,
  },
  actions: {
    closeOnEscape: true,
  },
  vi: {
    //placementId: 'pltd4o7ibb9rc6i53x14',
  },
});
