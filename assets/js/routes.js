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
        componentUrl: './pages/tabs/apps.html',
        name: 'apps',
      },
      
      {
        path: '/account/',
        id: 'account',
        componentUrl: './pages/tabs/account.html',
        name: 'account',
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
    path: '/:arg1/:arg2/',
    componentUrl: './pages/{{arg1}}/{{arg2}}.html',
  },
  {
    path: '/:arg1/arg2',
    url: './pages/{{arg1}}/{{arg2}}.html',
  },
  {
    path: '/:arg1/:arg2/:arg3/',
    componentUrl: './pages/{{arg1}}/{{arg2}}/{{arg3}}.html',
  },
  {
    path: '/:arg1/:arg2/:arg3',
    url: './pages/{{arg1}}/{{arg2}}/{{arg3}}.html',
  },

  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
