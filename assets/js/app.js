// Dom7
var $ = Dom7;

// Theme
var theme = 'ios';
document.documentElement.classList.add('dark');
// Init App
var app = new Framework7({
  el: '#app',
  theme,
  darkMode: localStorage?.getItem('darkmode-'+theme) == "false" ? false: true,
  colors: {
    primary: '#009688',
    azure: '#007aff'
  },
  iosTouchRipple: true,
  //pushState: true,
  store: store,
  routes: routes,
  vi: {
    //placementId: 'pltd4o7ibb9rc6i53x14',
  },
  on: {
    pageInit: function () {
      console.log('Page initialized');
    },
  }
});
