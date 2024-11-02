var routes = [
  // Index page
  {
    path: '/',
    componentUrl: './pages/main.html',
    name: 'main',
    tabs: [
      {
        path: '/',
        id: 'home',
        componentUrl: './pages/tabs/home.html',
        name: 'home',
      },
      {
        path: '/apps/',
        id: 'apps',
        url: './pages/tabs/apps.html',
        name: 'apps',
      },
    ],
  },
  {
    path: '/:arg1/',
    componentUrl: './pages/{{arg1}}.html',
  },
  {
    path: '/:arg1',
    url: './pages/{{arg1}}.html',
  },
  {
    path: '/settings/:arg1',
    url: './pages/settings/{{arg1}}.html',
  },
  {
    path: '/apps/:arg1/',
    componentUrl: './pages/apps/{{arg1}}.html',
  },
  {
    path: '/user/:arg1/',
    componentUrl: './pages/user/{{arg1}}.html',
  },
  
  {
    path: '/user/:arg1',
    url: './pages/users/{{arg1}}.html',
  },

  {
    path: '/blog/:arg1/',
    componentUrl: './pages/blog/{{arg1}}.html',
  },
  
  {
    path: '/blog/:arg1',
    url: './pages/blog/{{arg1}}.html',
  },

  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
