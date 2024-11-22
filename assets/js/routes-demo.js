var routes = [
  // Index page
  {
    path: '/',
    componentUrl: './pages-demo/home.html',
    name: 'home',
  },
  // About page
  {
    path: '/about/',
    url: './pages-demo/about.html',
    name: 'about',
  },
  // Right Panel pages
  {
    path: '/panel-right-1/',
    content: `
      <div class="page">
        <div class="navbar">
          <div class="navbar-bg"></div>
          <div class="navbar-inner sliding">
            <div class="left">
              <a  class="link back">
                <i class="icon icon-back"></i>
                <span class="if-not-md">Back</span>
              </a>
            </div>
            <div class="title">Panel Page 1</div>
          </div>
        </div>
        <div class="page-content">
          <div class="block">
            <p>This is a right panel page 1</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo saepe aspernatur inventore dolorum voluptates consequatur tempore ipsum! Quia, incidunt, aliquam sit veritatis nisi aliquid porro similique ipsa mollitia eaque ex!</p>
          </div>
        </div>
      </div>
    `,
  },
  {
    path: '/panel-right-2/',
    content: `
      <div class="page">
        <div class="navbar">
          <div class="navbar-bg"></div>
          <div class="navbar-inner sliding">
            <div class="left">
              <a  class="link back">
                <i class="icon icon-back"></i>
                <span class="if-not-md">Back</span>
              </a>
            </div>
            <div class="title">Panel Page 2</div>
          </div>
        </div>
        <div class="page-content">
          <div class="block">
            <p>This is a right panel page 2</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo saepe aspernatur inventore dolorum voluptates consequatur tempore ipsum! Quia, incidunt, aliquam sit veritatis nisi aliquid porro similique ipsa mollitia eaque ex!</p>
          </div>
        </div>
      </div>
    `,
  },

  // Components
  {
    path: '/accordion/',
    url: './pages-demo/accordion.html',
  },
  {
    path: '/action-sheet/',
    componentUrl: './pages-demo/action-sheet.html',
  },
  {
    path: '/area-chart/',
    componentUrl: './pages-demo/area-chart.html',
  },
  {
    path: '/autocomplete/',
    componentUrl: './pages-demo/autocomplete.html',
  },
  {
    path: '/badge/',
    url: './pages-demo/badge.html',
  },
  {
    path: '/breadcrumbs/',
    componentUrl: './pages-demo/breadcrumbs.html',
  },
  {
    path: '/buttons/',
    componentUrl: './pages-demo/buttons.html',
  },
  {
    path: '/calendar/',
    componentUrl: './pages-demo/calendar.html',
  },
  {
    path: '/calendar-page/',
    componentUrl: './pages-demo/calendar-page.html',
  },
  {
    path: '/cards/',
    url: './pages-demo/cards.html',
  },
  {
    path: '/cards-expandable/',
    url: './pages-demo/cards-expandable.html',
  },
  {
    path: '/checkbox/',
    componentUrl: './pages-demo/checkbox.html',
  },
  {
    path: '/chips/',
    componentUrl: './pages-demo/chips.html',
  },
  {
    path: '/color-picker/',
    componentUrl: './pages-demo/color-picker.html',
  },
  {
    path: '/contacts-list/',
    url: './pages-demo/contacts-list.html',
  },
  {
    path: '/content-block/',
    url: './pages-demo/content-block.html',
  },
  {
    path: '/data-table/',
    componentUrl: './pages-demo/data-table.html',
  },
  {
    path: '/dialog/',
    componentUrl: './pages-demo/dialog.html',
  },
  {
    path: '/fab/',
    url: './pages-demo/fab.html',
  },
  {
    path: '/fab-morph/',
    url: './pages-demo/fab-morph.html',
  },
  {
    path: '/form-storage/',
    url: './pages-demo/form-storage.html',
  },
  {
    path: '/gauge/',
    componentUrl: './pages-demo/gauge.html',
  },
  {
    path: '/grid/',
    url: './pages-demo/grid.html',
  },
  {
    path: '/icons/',
    componentUrl: './pages-demo/icons.html',
  },
  {
    path: '/infinite-scroll/',
    componentUrl: './pages-demo/infinite-scroll.html',
  },
  {
    path: '/inputs/',
    url: './pages-demo/inputs.html',
  },
  {
    path: '/list/',
    url: './pages-demo/list.html',
  },
  {
    path: '/list-button/',
    componentUrl: './pages-demo/list-button.html',
  },
  {
    path: '/list-index/',
    componentUrl: './pages-demo/list-index.html',
  },
  {
    path: '/login-screen/',
    componentUrl: './pages-demo/login-screen.html',
  },
  {
    path: '/login-screen-page/',
    componentUrl: './pages-demo/login-screen-page.html',
  },
  {
    path: '/menu-list/',
    componentUrl: './pages-demo/menu-list.html',
  },
  {
    path: '/messages/',
    componentUrl: './pages-demo/messages.html',
  },
  {
    path: '/navbar/',
    url: './pages-demo/navbar.html',
  },
  {
    path: '/navbar-hide-scroll/',
    url: './pages-demo/navbar-hide-scroll.html',
  },
  {
    path: '/notifications/',
    componentUrl: './pages-demo/notifications.html',
  },
  {
    path: '/panel/',
    url: './pages-demo/panel.html',
  },
  {
    path: '/photo-browser/',
    componentUrl: './pages-demo/photo-browser.html',
  },
  {
    path: '/picker/',
    componentUrl: './pages-demo/picker.html',
  },
  {
    path: '/pie-chart/',
    componentUrl: './pages-demo/pie-chart.html',
  },
  {
    path: '/popup/',
    componentUrl: './pages-demo/popup.html',
  },
  {
    path: '/popover/',
    url: './pages-demo/popover.html',
  },
  {
    path: '/preloader/',
    componentUrl: './pages-demo/preloader.html',
  },
  {
    path: '/progressbar/',
    componentUrl: './pages-demo/progressbar.html',
  },
  {
    path: '/pull-to-refresh/',
    componentUrl: './pages-demo/pull-to-refresh.html',
  },
  {
    path: '/radio/',
    url: './pages-demo/radio.html',
  },
  {
    path: '/range/',
    componentUrl: './pages-demo/range.html',
  },
  {
    path: '/searchbar/',
    url: './pages-demo/searchbar.html',
  },
  {
    path: '/searchbar-expandable/',
    url: './pages-demo/searchbar-expandable.html',
  },
  {
    path: '/segmented/',
    componentUrl: './pages-demo/segmented.html',
  },
  {
    path: '/sheet-modal/',
    componentUrl: './pages-demo/sheet-modal.html',
  },
  {
    path: '/skeleton/',
    componentUrl: './pages-demo/skeleton.html',
  },
  {
    path: '/smart-select/',
    url: './pages-demo/smart-select.html',
  },
  {
    path: '/sortable/',
    url: './pages-demo/sortable.html',
  },
  {
    path: '/stepper/',
    componentUrl: './pages-demo/stepper.html',
  },
  {
    path: '/subnavbar/',
    url: './pages-demo/subnavbar.html',
  },
  {
    path: '/subnavbar-title/',
    url: './pages-demo/subnavbar-title.html',
  },
  {
    path: '/swiper/',
    url: './pages-demo/swiper.html',
    routes: [
      {
        path: 'swiper-horizontal/',
        url: './pages-demo/swiper-horizontal.html',
      },
      {
        path: 'swiper-vertical/',
        url: './pages-demo/swiper-vertical.html',
      },
      {
        path: 'swiper-space-between/',
        url: './pages-demo/swiper-space-between.html',
      },
      {
        path: 'swiper-multiple/',
        url: './pages-demo/swiper-multiple.html',
      },
      {
        path: 'swiper-nested/',
        url: './pages-demo/swiper-nested.html',
      },
      {
        path: 'swiper-loop/',
        url: './pages-demo/swiper-loop.html',
      },
      {
        path: 'swiper-3d-cube/',
        url: './pages-demo/swiper-3d-cube.html',
      },
      {
        path: 'swiper-3d-coverflow/',
        url: './pages-demo/swiper-3d-coverflow.html',
      },
      {
        path: 'swiper-3d-flip/',
        url: './pages-demo/swiper-3d-flip.html',
      },
      {
        path: 'swiper-fade/',
        url: './pages-demo/swiper-fade.html',
      },
      {
        path: 'swiper-scrollbar/',
        url: './pages-demo/swiper-scrollbar.html',
      },
      {
        path: 'swiper-gallery/',
        componentUrl: './pages-demo/swiper-gallery.html',
      },
      {
        path: 'swiper-parallax/',
        url: './pages-demo/swiper-parallax.html',
      },
      {
        path: 'swiper-lazy/',
        url: './pages-demo/swiper-lazy.html',
      },
      {
        path: 'swiper-pagination-progress/',
        url: './pages-demo/swiper-pagination-progress.html',
      },
      {
        path: 'swiper-pagination-fraction/',
        url: './pages-demo/swiper-pagination-fraction.html',
      },
      {
        path: 'swiper-zoom/',
        url: './pages-demo/swiper-zoom.html',
      },
    ],
  },
  {
    path: '/swipeout/',
    componentUrl: './pages-demo/swipeout.html',
  },
  {
    path: '/tabs/',
    url: './pages-demo/tabs.html',
  },
  {
    path: '/tabs-static/',
    url: './pages-demo/tabs-static.html',
  },
  {
    path: '/tabs-animated/',
    url: './pages-demo/tabs-animated.html',
  },
  {
    path: '/tabs-swipeable/',
    url: './pages-demo/tabs-swipeable.html',
  },
  {
    path: '/tabs-routable/',
    url: './pages-demo/tabs-routable.html',
    tabs: [
      {
        path: '/',
        id: 'tab1',
        content: `
        <div class="block">
          <p>Tab 1 content</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo suscipit temporibus sequi iure ad laboriosam accusamus?</p>
          <p>Saepe explicabo voluptas ducimus provident, doloremque quo totam molestias! Suscipit blanditiis eaque exercitationem praesentium reprehenderit, fuga accusamus possimus sed, sint facilis ratione quod, qui dignissimos voluptas! Aliquam rerum consequuntur deleniti.</p>
          <p>Totam reprehenderit amet commodi ipsum nam provident doloremque possimus odio itaque, est animi culpa modi consequatur reiciendis corporis libero laudantium sed eveniet unde delectus a maiores nihil dolores? Natus, perferendis.</p>
        </div>
        `,
      },
      {
        path: '/tab2/',
        id: 'tab2',
        content: `
        <div class="block">
          <p>Tab 2 content</p>
          <p>Suscipit, facere quasi atque totam. Repudiandae facilis at optio atque, rem nam, natus ratione cum enim voluptatem suscipit veniam! Repellat, est debitis. Modi nam mollitia explicabo, unde aliquid impedit! Adipisci!</p>
          <p>Deserunt adipisci tempora asperiores, quo, nisi ex delectus vitae consectetur iste fugiat iusto dolorem autem. Itaque, ipsa voluptas, a assumenda rem, dolorum porro accusantium, officiis veniam nostrum cum cumque impedit.</p>
          <p>Laborum illum ipsa voluptatibus possimus nesciunt ex consequatur rem, natus ad praesentium rerum libero consectetur temporibus cupiditate atque aspernatur, eaque provident eligendi quaerat ea soluta doloremque. Iure fugit, minima facere.</p>
        </div>
        `,
      },
      {
        path: '/tab3/',
        id: 'tab3',
        content: `
        <div class="block">
          <p>Tab 3 content</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo suscipit temporibus sequi iure ad laboriosam accusamus?</p>
          <p>Deserunt adipisci tempora asperiores, quo, nisi ex delectus vitae consectetur iste fugiat iusto dolorem autem. Itaque, ipsa voluptas, a assumenda rem, dolorum porro accusantium, officiis veniam nostrum cum cumque impedit.</p>
          <p>Laborum illum ipsa voluptatibus possimus nesciunt ex consequatur rem, natus ad praesentium rerum libero consectetur temporibus cupiditate atque aspernatur, eaque provident eligendi quaerat ea soluta doloremque. Iure fugit, minima facere.</p>
        </div>
        `,
      },
    ],
  },
  {
    path: '/text-editor/',
    componentUrl: './pages-demo/text-editor.html',
  },
  {
    path: '/toast/',
    componentUrl: './pages-demo/toast.html',
  },
  {
    path: '/toggle/',
    url: './pages-demo/toggle.html',
  },
  {
    path: '/toolbar-tabbar/',
    componentUrl: './pages-demo/toolbar-tabbar.html',
    routes: [
      {
        path: 'tabbar/',
        componentUrl: './pages-demo/tabbar.html',
      },
      {
        path: 'tabbar-icons/',
        componentUrl: './pages-demo/tabbar-icons.html',
      },
      {
        path: 'tabbar-scrollable/',
        componentUrl: './pages-demo/tabbar-scrollable.html',
      },
      {
        path: 'toolbar-hide-scroll/',
        url: './pages-demo/toolbar-hide-scroll.html',
      },
    ],
  },
  {
    path: '/tooltip/',
    componentUrl: './pages-demo/tooltip.html',
  },
  {
    path: '/treeview/',
    componentUrl: './pages-demo/treeview.html',
  },
  {
    path: '/timeline/',
    url: './pages-demo/timeline.html',
  },
  {
    path: '/timeline-vertical/',
    url: './pages-demo/timeline-vertical.html',
  },
  {
    path: '/timeline-horizontal/',
    url: './pages-demo/timeline-horizontal.html',
  },
  {
    path: '/timeline-horizontal-calendar/',
    url: './pages-demo/timeline-horizontal-calendar.html',
  },
  {
    path: '/virtual-list/',
    componentUrl: './pages-demo/virtual-list.html',
  },
  {
    path: '/virtual-list-vdom/',
    componentUrl: './pages-demo/virtual-list-vdom.html',
  },
  {
    path: '/vi/',
    componentUrl: './pages-demo/vi.html',
  },

  // Color Themes
  {
    path: '/color-themes/',
    componentUrl: './pages-demo/color-themes.html',
  },

  // Effects
  {
    path: '/page-transitions/',
    componentUrl: './pages-demo/page-transitions.html',
  },
  {
    path: '/page-transitions/:effect',
    componentUrl: './pages-demo/page-transitions-effect.html',
  },

  // Page Loaders
  {
    path: '/page-loader-component/:user/:userId/:posts/:postId/',
    componentUrl: './pages-demo/page-loader-component.html',
  },
  {
    path: '/master-detail/',
    url: './pages-demo/master-detail-master.html',
    master: true,
    detailRoutes: [
      {
        path: '/master-detail/:id/',
        componentUrl: './pages-demo/master-detail-detail.html',
      },
    ],
  },

  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages-demo/404.html',
  },
];
