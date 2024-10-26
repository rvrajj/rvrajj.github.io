var routes = [
  // Index page
  {
    path: '/',
    componentUrl: './pages/main.html',
    name: 'home',
  },
  {
    path: '/gallery/',
    url: './nav/gallery.html',
  },
  {
    path: '/calendar/',
    componentUrl: './nav/calendar.html',
  },
  {
    path: '/products/',
    content: `
      <div class="page">
          <div class="navbar">
            <div class="navbar-bg"></div>
            <div class="navbar-inner sliding">
            <div class="left">
              <a class="link back">
                <i class="icon icon-back"></i>
                <span class="if-not-md">Jodhana.IN</span>
              </a>
            </div>
              <div class="title">Products</div>
            </div>
          </div>
          <div class="page-content">
            <div class="list links-list">
              <ul>
                
                
              </ul>
            </div>
          </div>
        </div>
    `,
  },
  {
    path: '/user/:arg1/',
    componentUrl: './user/{{arg1}}.html',
  },
  
  {
    path: '/user/:arg1',
    url: './user/{{arg1}}.html',
  },

  {
    path: '/blog/:arg1/',
    componentUrl: './blog/{{arg1}}.html',
  },
  
  {
    path: '/blog/:arg1',
    url: './blog/{{arg1}}.html',
  },

  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
