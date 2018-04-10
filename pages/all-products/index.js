// pages/all-products/index.js
import { toTopButton, searchLayout, cartButton } from '../../templates/common.js';

var firstOpen = true;


const utils = require('../../utils/util.js');

const categories = [
  {
    title: '全部',
    link: '#全部',
    scrollTop: 0,
    
    // 动态请求的数据，默认为null
    header: {
      url: '../../res/carousel_image/04.jpg',
      page: '../../pages/test/index',
      link: '#全部-header'
    },
    products: [
      {
        link: '#全部-item1',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/01.jpg',
        desc: '产品1描述，哒哒的分公司电工是大法官任何...',
        price: 45.50,
        tags: [
          1, 4, 5,
        ]
      },
      {
        link: '#全部-item2',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/02.jpg',
        desc: '产品2描述...',
        price: 12.09,
        tags: [
          1, 3
        ]
      },
      {
        link: '#全部-item3',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/03.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 59.99,
        tags: [
          1, 2
        ]
      },
      {

        link: '#全部-item4',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/04.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 15.98,
        tags: [
          3, 5
        ]
      },
      {
        link: '#全部-item5',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/05.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 19.50,
        tags: [
          1, 4
        ]
      },
      {
        link: '#全部-item6',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/06.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 32.02,
        tags: [
          1, 5
        ]
      },
      {

        link: '#全部-item7',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/07.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 9.58,
        tags: [
          2, 4
        ]
      },
      {
        link: '#全部-item8',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/01.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 32.02,
        tags: [
          3, 4
        ]
      },
      {
        link: '#全部-item9',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/02.jpg',
        desc: '产品2描述...',
        price: 12.79,
        tags: [
          4, 5
        ]
      },
      {
        link: '#全部-item10',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/02.jpg',
        desc: '产品2描述...',
        price: 12.00,
        tags: [
          1, 3
        ]
      },
      {
        link: '#全部-item11',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/03.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 99.99,
        tags: [
          3, 4
        ]
      },
      {
        link: '#全部-item12',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/05.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 99.99,
        tags: [
          3, 4
        ]
      },
    ]
  },

  {
    title: '生活百货',
    link: '#生活百货',
    scrollTop: 0,

    // 动态请求的数据，默认为null
    header: {
      url: '../../res/carousel_image/02.jpg',
      page: '../../pages/test/index',
      link: '#生活百货-header'
    },
    products: [
      {
        link: '#生活百货-item1',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/03.jpg',
        desc: '产品1描述，哒哒的分公司电工是大法官任何...',
        price: 45.50,
        tags: [
          1, 4, 5,
        ]
      },
      {
        link: '#生活百货-item2',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/06.jpg',
        desc: '产品2描述...',
        price: 12.09,
        tags: [
          1, 3
        ]
      },
      {
        link: '#生活百货-item3',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/01.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 59.99,
        tags: [
          1, 2
        ]
      },
      {

        link: '#生活百货-item4',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/06.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 15.98,
        tags: [
          3, 5
        ]
      },
      {
        link: '#生活百货-item5',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/07.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 19.50,
        tags: [
          1, 4
        ]
      },
      {
        link: '#生活百货-item6',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/02.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 32.02,
        tags: [
          1, 5
        ]
      },
      {

        link: '#生活百货-item7',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/03.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 9.58,
        tags: [
          2, 4
        ]
      },
      {
        link: '#生活百货-item8',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/04.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 32.02,
        tags: [
          3, 4
        ]
      },
      {
        link: '#生活百货-item9',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/05.jpg',
        desc: '产品2描述...',
        price: 12.79,
        tags: [
          4, 5
        ]
      },
      {
        link: '#生活百货-item10',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/06.jpg',
        desc: '产品2描述...',
        price: 12.00,
        tags: [
          1, 3
        ]
      },
      {
        link: '#生活百货-item11',
        page: '../../pages/test/index',
        url: '../../res/promotion_image/01.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 99.99,
        tags: [
          3, 4
        ]
      },
    ]
  },

  {
    title: '零食',
    link: '#零食',
    scrollTop: 0,

    // 动态请求的数据，默认为null
    header: {
      url: '../../res/carousel_image/03.jpg',
      page: '../../pages/test/index',
      link: '#零食-header'
    },
    products: [
      {
        link: '#item1',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/02.jpg',
        desc: '产品1描述，哒哒的分公司电工是大法官任何...',
        price: 45.50,
        tags: [
          1, 4, 5,
        ]
      },
      {
        link: '#item2',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/03.jpg',
        desc: '产品2描述...',
        price: 12.09,
        tags: [
          1, 3
        ]
      },
      {
        link: '#item3',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/04.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 59.99,
        tags: [
          1, 2
        ]
      },
      {

        link: '#item4',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/05.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 15.98,
        tags: [
          3, 5
        ]
      },
      {
        link: '#item5',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/06.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 19.50,
        tags: [
          1, 4
        ]
      },
      {
        link: '#item6',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/07.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 32.02,
        tags: [
          1, 5
        ]
      },
      {

        link: '#item7',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/01.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 9.58,
        tags: [
          2, 4
        ]
      },
      {
        link: '#item8',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/02.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 32.02,
        tags: [
          3, 4
        ]
      },
      {
        link: '#item9',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/03.jpg',
        desc: '产品2描述...',
        price: 12.79,
        tags: [
          4, 5
        ]
      },
      {
        link: '#item10',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/04.jpg',
        desc: '产品2描述...',
        price: 12.00,
        tags: [
          1, 3
        ]
      },
      {
        link: '#item11',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/03.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 99.99,
        tags: [
          3, 4
        ]
      },
    ]
  },

  {
    title: '烟酒',
    link: '#烟酒',
    scrollTop: 0,

    // 动态请求的数据，默认为null
    header: {
      url: '../../res/carousel_image/03.jpg',
      page: '../../pages/test/index',
      link: '#烟酒-header'
    },
    products: [
      {
        link: '#item1',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/02.jpg',
        desc: '产品1描述，哒哒的分公司电工是大法官任何...',
        price: 45.50,
        tags: [
          1, 4, 5,
        ]
      },
      {
        link: '#item2',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/01.jpg',
        desc: '产品2描述...',
        price: 12.09,
        tags: [
          1, 3
        ]
      },
      {
        link: '#item3',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/05.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 59.99,
        tags: [
          1, 2
        ]
      },
      {

        link: '#item4',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/04.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 15.98,
        tags: [
          3, 5
        ]
      },
      {
        link: '#item5',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/03.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 19.50,
        tags: [
          1, 4
        ]
      },
      {
        link: '#item6',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/01.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 32.02,
        tags: [
          1, 5
        ]
      },
      {

        link: '#item7',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/07.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 9.58,
        tags: [
          2, 4
        ]
      },
      {
        link: '#item8',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/05.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 32.02,
        tags: [
          3, 4
        ]
      },
      {
        link: '#item9',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/06.jpg',
        desc: '产品2描述...',
        price: 12.79,
        tags: [
          4, 5
        ]
      },
      {
        link: '#item10',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/01.jpg',
        desc: '产品2描述...',
        price: 12.00,
        tags: [
          1, 3
        ]
      },
      {
        link: '#item11',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/04.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 99.99,
        tags: [
          3, 4
        ]
      },
    ]
  },

  {
    title: '饮料',
    link: '#饮料',
    scrollTop: 0,
    header: {
      url: '../../res/carousel_image/04.jpg',
      page: '../../pages/test/index',
      link: '##饮料-header'
    },
    products: [
      {
        link: '#item1',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/02.jpg',
        desc: '产品1描述，哒哒的分公司电工是大法官任何...',
        price: 45.50,
        tags: [
          1, 4, 5,
        ]
      },
      {
        link: '#item2',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/03.jpg',
        desc: '产品2描述...',
        price: 12.09,
        tags: [
          1, 3
        ]
      },
      {
        link: '#item3',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/04.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 59.99,
        tags: [
          1, 2
        ]
      },
      {

        link: '#item4',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/05.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 15.98,
        tags: [
          3, 5
        ]
      },
      {
        link: '#item5',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/06.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 19.50,
        tags: [
          1, 4
        ]
      },
      {
        link: '#item6',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/07.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 32.02,
        tags: [
          1, 5
        ]
      },
      {

        link: '#item7',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/01.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 9.58,
        tags: [
          2, 4
        ]
      },
      {
        link: '#item8',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/02.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 32.02,
        tags: [
          3, 4
        ]
      },
      {
        link: '#item9',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/03.jpg',
        desc: '产品2描述...',
        price: 12.79,
        tags: [
          4, 5
        ]
      },
      {
        link: '#item10',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/04.jpg',
        desc: '产品2描述...',
        price: 12.00,
        tags: [
          1, 3
        ]
      },
      {
        link: '#item11',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/03.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 99.99,
        tags: [
          3, 4
        ]
      },
    ]
  },

  {
    title: '粮油',
    link: '#粮油',
    scrollTop: 0,
    header: {
      url: '../../res/carousel_image/01.jpg',
      page: '../../pages/test/index',
      link: '#粮油-header'
    },
    products: [
      {
        link: '#item1',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/01.jpg',
        desc: '产品1描述，哒哒的分公司电工是大法官任何...',
        price: 45.50,
        tags: [
          1, 4, 5,
        ]
      },
      {
        link: '#item2',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/02.jpg',
        desc: '产品2描述...',
        price: 12.09,
        tags: [
          1, 3
        ]
      },
      {
        link: '#item3',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/03.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 59.99,
        tags: [
          1, 2
        ]
      },
      {

        link: '#item4',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/04.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 15.98,
        tags: [
          3, 5
        ]
      },
      {
        link: '#item5',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/05.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 19.50,
        tags: [
          1, 4
        ]
      },
      {
        link: '#item6',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/06.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 32.02,
        tags: [
          1, 5
        ]
      },
      {

        link: '#item7',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/07.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 9.58,
        tags: [
          2, 4
        ]
      },
      {
        link: '#item8',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/01.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 32.02,
        tags: [
          3, 4
        ]
      },
      {
        link: '#item9',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/02.jpg',
        desc: '产品2描述...',
        price: 12.79,
        tags: [
          4, 5
        ]
      },
      {
        link: '#item10',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/02.jpg',
        desc: '产品2描述...',
        price: 12.00,
        tags: [
          1, 3
        ]
      },
      {
        link: '#item11',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/03.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 99.99,
        tags: [
          3, 4
        ]
      },
    ]
  },

  {
    title: '文具',
    link: '#文具',
    scrollTop: 0,
    header: {
      url: '../../res/carousel_image/05.jpg',
      page: '../../pages/test/index',
      link: '文具-header'
    },
    products: [
      {
        link: '#item1',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/02.jpg',
        desc: '产品1描述，哒哒的分公司电工是大法官任何...',
        price: 45.50,
        tags: [
          1, 4, 5,
        ]
      },
      {
        link: '#item2',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/03.jpg',
        desc: '产品2描述...',
        price: 12.09,
        tags: [
          1, 3
        ]
      },
      {
        link: '#item3',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/04.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 59.99,
        tags: [
          1, 2
        ]
      },
      {

        link: '#item4',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/05.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 15.98,
        tags: [
          3, 5
        ]
      },
      {
        link: '#item5',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/06.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 19.50,
        tags: [
          1, 4
        ]
      },
      {
        link: '#item6',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/07.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 32.02,
        tags: [
          1, 5
        ]
      },
      {

        link: '#item7',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/01.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 9.58,
        tags: [
          2, 4
        ]
      },
      {
        link: '#item8',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/02.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 32.02,
        tags: [
          3, 4
        ]
      },
      {
        link: '#item9',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/03.jpg',
        desc: '产品2描述...',
        price: 12.79,
        tags: [
          4, 5
        ]
      },
      {
        link: '#item10',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/04.jpg',
        desc: '产品2描述...',
        price: 12.00,
        tags: [
          1, 3
        ]
      },
      {
        link: '#item11',
        page: '../../pages/product-detail/index',
        url: '../../res/promotion_image/03.jpg',
        desc: '产品1描述，哒哒哒哒哒...',
        price: 99.99,
        tags: [
          3, 4
        ]
      },
    ]
  },
]



Page({

  /**
   * 页面的初始数据
   */
  data: {
  
    selectedPage: 0,  // 选中的页面索引号
    browseMode: 0,    // 浏览模式，0为表格模式（默认），1为列表模式
    hideToTopButton: true, // 是否隐藏回到顶部按钮
    scrollTop: 0,   // 控制回到顶部操作
    categories: null,  // 数据
  },

  /**
   * 用户点击搜索栏
   */
  onSearchLayoutTap: searchLayout.onSearchLayoutTap,

  /**
   * 用户切换浏览模式
   */
  onBrowseModeTap() {
    let selectedPage = this.data.selectedPage;
    let categories = this.data.categories;
    let mode = (this.data.browseMode + 1) % 2;
    // 数据转换
    if (mode == 0) {
      for (var i = 0; i < categories.length; i++) {
        categories[i].products = utils.list2TableDatas(categories[i].products);
      }
    } else {
      for (var i = 0; i < categories.length; i++) {
        categories[i].products = utils.table2ListDatas(categories[i].products);
      }
    }
    
    this.setData({
      browseMode: mode,
      categories: categories
    })

  },

  /**
   * 通过选择顶部导航条改变页面
   */
  onCategoryTap(event) {
    let index = event.currentTarget.dataset.index;
    /**
     * 1.提交网络请求,获取数据
     * 2.设置用户界面
     */
    this.loadDatas(index);    
    this.updateUi(index);
  },

  /**
   * 页面通过左右滑动改变页面
   */
  onPageChanged(event) {
    if (event.detail.source =='touch'){
      let index = event.detail.current;
      this.loadDatas(index);      
      this.updateUi(index);
    }
  },

  /**
   * 用户点击主体头推荐内容
   */
  onHeaderTap() {
    let target = this.data.categories[this.data.selectedPage].header;
    utils.navigateToPage(target);
  },

  /**
   * 用户点击某一产品
   */
  onProductTap(event) {
    let selectedPage = this.data.selectedPage;
    let product = null;
    if (this.data.browseMode == 0) {
      let index1 = event.currentTarget.dataset.firstIndex;
      let index2 = event.currentTarget.dataset.secondIndex;
      product = this.data.categories[selectedPage].products[index1][index2];
    } else {
      let index = event.currentTarget.dataset.index;
      product = this.data.categories[selectedPage].products[index];
    }
    utils.navigateToPage(product);
  },

  
  /**
   * 页面垂直滑动回调
   */
  onPageScroll(event) {
    let hide = toTopButton.shouldHide(event);
    if (hide != this.data.hideToTopButton) {
      this.setData({
        hideToTopButton: hide,
      });
    }

  },

  onCartTap: cartButton.onCartTap,

  /**
   * 回倒顶部
   */
  goToTop() {
    let selectedPage = this.data.selectedPage;
    let categories = this.data.categories;
    categories[selectedPage].scrollTop = 0;   
    
    this.setData({
      hideToTopButton: true,
      categories: categories
    });
  },

  /**
  * 更新UI,选中的页面的索引号
  */
  updateUi(index) {
    wx.setNavigationBarTitle({
      title: this.data.categories[index].title,
    });

    this.setData({
      selectedPage: index,
    })
    
    console.log('更新UI');
  },

  /**
   * 联网获取数据
   */
  loadDatas(index) {
    let link = this.data.categories[index].link;
    console.log('联网获取数据:' + link);
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    if (firstOpen) {
      for (var i = 0; i < categories.length; i++) {
        categories[i].products = utils.list2TableDatas(categories[i].products);
      } 
      firstOpen = false;
    }
    this.setData({
      categories: categories
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})