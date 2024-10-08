var routes = [
  // Index page
  {
    path: '/',
    componentUrl: './pages/main.html',
    name: 'home',
  },

  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
