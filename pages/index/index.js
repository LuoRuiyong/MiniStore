//index.js
//获取应用实例
const app = getApp();
const utils = require('../../utils/util.js');

import { cartButton, toTopButton, searchLayout } from '../../templates/common.js';

// Page({
//   data: {
//     motto: 'Hello, Wechat MiniProgram',
//     userInfo: {},
//     hasUserInfo: false,
//     canIUse: wx.canIUse('button.open-type.getUserInfo'),
//     markers:[
//       {
//         iconPath: "../res/icon_02.jpg",
//         id: 0,
//         latitude: 23.099994,
//         longitude: 113.324520,
//         width: 50,
//         height: 50
//       },
//     ]
  
//   },
//   //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad: function () {
//     if (app.globalData.userInfo) {
//       this.setData({
//         userInfo: app.globalData.userInfo,
//         hasUserInfo: true
//       })
//     } else if (this.data.canIUse){
//       // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//       // 所以此处加入 callback 以防止这种情况
//       app.userInfoReadyCallback = res => {
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true
//         })
//       }
//     } else {
//       // 在没有 open-type=getUserInfo 版本的兼容处理
//       wx.getUserInfo({
//         success: res => {
//           app.globalData.userInfo = res.userInfo
//           this.setData({
//             userInfo: res.userInfo,
//             hasUserInfo: true
//           })
//         }
//       })
//     }
//   },
//   getUserInfo: function(e) {
//     console.log(e)
//     app.globalData.userInfo = e.detail.userInfo
//     this.setData({
//       userInfo: e.detail.userInfo,
//       hasUserInfo: true
//     })
//   }
// })

const carouselDatas = [
  {
    page: '../../pages/test/index',
    link: '#swiper-item:0',
    url: '../../res/carousel_image/01.jpg',
  },
  {
    page: '../../pages/test/index',
    link: '#swiper-item:2',
    url: '../../res/carousel_image/02.jpg',
  },
  {
    page: '../../pages/test/index',
    link: '#swiper-item:2',
    url: '../../res/carousel_image/03.jpg',
  },
  {
    page: '../../pages/test/index',
    link: '#swiper-item:3',
    url: '../../res/carousel_image/04.jpg',
  },
  {
    page: '../../pages/test/index',
    link: '#swiper-item:4',
    url: '../../res/carousel_image/05.jpg',
  },
  {
    page: '../../pages/test/index',
    link: '#swiper-item:5',
    url: '../../res/carousel_image/06.jpg',
  },
];

const fastChannelDatas = [
  {
    page: "../../pages/all-products/index",
    link: '#fast-pass-item:1',
    url: '../../res/nav_icon/01.jpg',
    title: '全部商品',
  },
  {
    page: "../../pages/test/index",
    link: '#fast-pass-item:2',
    url: '../../res/nav_icon/02.jpg',
    title: '生活用品',
  },
  {
    page: "../../pages/test/index",
    link: '#fast-pass-item:3',
    url: '../../res/nav_icon/03.jpg',
    title: '零食专区',
  },
  {
    page: "../../pages/test/index",
    link: '#fast-pass-item:4',
    url: '../../res/nav_icon/04.jpg',
    title: '新用户',
  },   
];

const subPromotionDatas = [
  {
    title: '生活用品',
    page: "../../pages/test/index",
    link: '#sub-promotion-item:1',
    products: [
      {
        page: "../../pages/product-detail/index",
        link: '#product-item:1-1',
        desc: '产品1介绍....',
        url: '../../res/promotion_image/02.jpg',
        price: 32.20,
        discount: 0.8
      },
      {
        desc: '产品2介绍....',
        page: "../../pages/product-detail/index",
        link: '#product-item:1-2',
        url: '../../res/promotion_image/04.jpg',
        price: 48.99,
        discount: 0.7
      },
      {
        desc: '产品阿发佛挡杀佛介绍....',
        page: "../../pages/product-detail/index",
        link: '#product-item:1-3',
        url: '../../res/promotion_image/07.jpg',
        price: 68.00,
        discount: 0.9
      }
    ]
  },
  {
    title: '零食',
    page: "../../pages/test/index",
    link: '#sub-promotion-item:2',
    products: [
      {
        desc: '产品4介绍....',
        page: "../../pages/product-detail/index",
        link: '#product-item:2-1',
        url: '../../res/promotion_image/01.jpg',
        price: 32.50,
        discount: 0.8
      },
      {
        desc: '产品5介绍....',
        page: "../../pages/product-detail/index",
        link: '#product-item:2-2',
        url: '../../res/promotion_image/02.jpg',
        price: 48.10,
        discount: 0.7
      },
      {
        desc: '产品6介绍....',
        page: "../../pages/product-detail/index",
        link: '#product-item:2-3',
        url: '../../res/promotion_image/03.jpg',
        price: 68.59,
        discount: 0.9
      }
    ]

  },
  {
    title: '饮料',
    page: "../../pages/test/index",
    link: '#sub-promotion-item:3',
    products: [
      {
        desc: '产品7介绍....',
        page: "../../pages/product-detail/index",
        link: '#product-item:3-1',
        url: '../../res/promotion_image/04.jpg',
        price: 32.49,
        discount: 0.8
      },
      {
        desc: '产品8介绍....',
        page: "../../pages/product-detail/index",
        link: '#product-item:3-2',
        url: '../../res/promotion_image/05.jpg',
        price: 48.99,
        discount: 0.7
      },
      {
        desc: '产品9介绍....',
        page: "../../pages/product-detail/index",
        link: '#product-item:3-3',
        url: '../../res/promotion_image/06.jpg',
        price: 68.08,
        discount: 0.9
      }
    ]

  },
  {
    title: '烟酒',
    page: "../../pages/test/index",
    link: '#sub-promotion-item:4',
    products: [
      {
        desc: '产品10介绍....',
        page: "../../pages/product-detail/index",
        link: '#product-item:4-1',
        url: '../../res/promotion_image/04.jpg',
        price: 32.56,
        discount: 0.8
      },
      {
        desc: '产品11介绍....',
        page: "../../pages/product-detail/index",
        link: '#product-item:4-2',
        url: '../../res/promotion_image/05.jpg',
        price: 48.42,
        discount: 0.7
      },
      {
        desc: '产品12介绍....',
        page: "../../pages/product-detail/index",
        link: '#product-item:4-3',
        url: '../../res/promotion_image/06.jpg',
        price: 68.10,
        discount: 0.9
      }
    ]
  },
  {
    title: '粮油调味',
    page: "../../pages/test/index",
    link: '#sub-promotion-item:5',
    products: [
      {
        desc: '产品10介绍....',
        page: "../../pages/product-detail/index",
        link: '#product-item:5-1',
        url: '../../res/promotion_image/02.jpg',
        price: 32.56,
        discount: 0.8
      },
      {
        desc: '产品11介绍....',
        page: "../../pages/product-detail/index",
        link: '#product-item:5-2',
        url: '../../res/promotion_image/01.jpg',
        price: 48.42,
        discount: 0.7
      },
      {
        desc: '产品12介绍....',
        page: "../../pages/product-detail/index",
        link: '#product-item:5-3',
        url: '../../res/promotion_image/03.jpg',
        price: 68.10,
        discount: 0.9
      }
    ]
  },
  {
    title: '餐厨用品',
    page: "../../pages/test/index",
    link: '#sub-promotion-item:6',
    products: [
      {
        desc: '产品10介绍....',
        page: "../../pages/product-detail/index",
        link: '#product-item:6-1',
        url: '../../res/promotion_image/06.jpg',
        price: 32.56,
        discount: 0.8
      },
      {
        desc: '产品11介绍....',
        page: "../../pages/product-detail/index",
        link: '#product-item:6-2',
        url: '../../res/promotion_image/05.jpg',
        price: 48.42,
        discount: 0.7
      },
      {
        desc: '产品12介绍....',
        page: "../../pages/product-detail/index",
        link: '#product-item:6-3',
        url: '../../res/promotion_image/02.jpg',
        price: 68.10,
        discount: 0.9
      }
    ]
  },
  {
    title: '床上用品',
    page: "../../pages/test/index",
    link: '#sub-promotion-item:7',
    products: [
      {
        desc: '产品10介绍....',
        page: "../../pages/product-detail/index",
        link: '#product-item:7-1',
        url: '../../res/promotion_image/05.jpg',
        price: 32.56,
        discount: 0.8
      },
      {
        desc: '产品11介绍....',
        page: "../../pages/product-detail/index",
        link: '#product-item:7-2',
        url: '../../res/promotion_image/03.jpg',
        price: 48.42,
        discount: 0.7
      },
      {
        desc: '产品12介绍....',
        page: "../../pages/product-detail/index",
        link: '#product-item:7-3',
        url: '../../res/promotion_image/07.jpg',
        price: 68.10,
        discount: 0.9
      }
    ]
  }    
];

Page({

  /**
   * 页面的初始数据
   */
  data: {

    carouselDatas: carouselDatas,
    fastChannelDatas: fastChannelDatas,
    subPromotionDatas: subPromotionDatas,

    autoPlay: true,
    scrollTop: 0,
    hideToTopButton: true,
  },

  /**
   * 用户点击搜索栏
   */
  onSearchBarTap: searchLayout.onSearchLayoutTap,

  /**
   * 用户点击位置栏
   */
  onLocationBarTag: function(event) {
    // 定位
    console.log('定位');
  },

  onFastChannelTap: function(event) {
    utils.navigateToPage(fastChannelDatas[event.currentTarget.dataset.index]);
  },

  /**
   * 轮播图点击事件
   */
  onSwiperItemTap(event) {
    utils.navigateToPage(carouselDatas[event.currentTarget.dataset.index]);
  },

  /**
   * 进入某专区
   */
  onEnterPrefectureTag(event) {
    utils.navigateToPage(subPromotionDatas[event.currentTarget.dataset.index]);
  },

  /**
   * 点击某一商品时跳转链接
   */
  onProductTag(event) {
    let index1 = event.currentTarget.dataset.firstIndex;
    let index2 = event.currentTarget.dataset.secondIndex;
    utils.navigateToPage(subPromotionDatas[index1].products[index2]);
  },

  /**
   * 回到顶部
   */
  goToTop() {
    this.setData({
      scrollTop: 0,
      hideToTopButton: true,
    });
  },

  /**
   * 页面滑动事件，判断是否显示回到顶部按钮
   */
  onScroll(event) {
    this.setData({
      hideToTopButton: toTopButton.shouldHide(event)
    });
  },

  /**
   * 点击购物车事件
   */
  onCartTap: cartButton.onCartTap,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      autoPlay: true
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.setData({
      autoPlay: false
    });
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
