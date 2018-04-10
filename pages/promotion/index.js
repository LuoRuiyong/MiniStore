// pages/promotion/index.js
import { cartButton, toTopButton, searchLayout } from '../../templates/common.js';
const utils = require('../../utils/util.js');

const promotionProductDatas = [
  {
    link: '#item1-1',
    page: '../../pages/product-detail/index',
    url: '../../res/promotion_image/01.jpg',
    desc: '产品1描述，哒哒哒哒哒哒哒哒...',
    price: 45.50,
    current: 36.02,
    tags: [
      '8.8折',
    ]
  },
  {
    link: '#item1-2',
    page: '../../pages/product-detail/index',
    url: '../../res/promotion_image/02.jpg',
    desc: '产品2描述...',
    price: null,
    current: 12.09,
    tags: [
      '满15减3'
    ]
  },
  {
    link: '#item2-1',
    page: '../../pages/product-detail/index',
    url: '../../res/promotion_image/03.jpg',
    desc: '产品1描述，哒哒哒哒哒...',
    price: 36.99,
    current: 30.00,
    tags: [
      '8.8折',
      '满18减3'
    ]
  },
  {

    link: '#item2-2',
    page: '../../pages/product-detail/index',
    url: '../../res/promotion_image/04.jpg',
    desc: '产品1描述，哒哒哒哒哒...',
    price: 15.90,
    current: 9.90,
    tags: [
      '7.6折',
    ]
  },
  {
    link: '#item3-1',
    page: '../../pages/product-detail/index',
    url: '../../res/promotion_image/05.jpg',
    desc: '产品1描述，哒哒哒哒哒...',
    price: 59.50,
    current: 49.99,
    tags: [
      '超值大礼包'
    ]
  },
  {

    link: '#item3-2',
    page: '../../pages/product-detail/index',
    url: '../../res/promotion_image/06.jpg',
    desc: '产品1描述，哒哒哒哒哒...',
    price: null,
    current: 32.02,
    tags: [
      '满21减7'
    ]
  },
  {

    link: '#item4-1',
    page: '../../pages/product-detail/index',
    url: '../../res/promotion_image/07.jpg',
    desc: '产品1描述，哒哒哒哒哒...',
    price: 59.50,
    current: 49.99,
    tags: [
      '超值大礼包'
    ]
  },
  {
    link: '#item4-2',
    page: '../../pages/product-detail/index',
    url: '../../res/promotion_image/01.jpg',
    desc: '产品1描述，哒哒哒哒哒...',
    price: null,
    current: 32.02,
    tags: [
      '满21减7'
    ]
  },  
  {
    link: '#item5-1',
    page: '../../pages/product-detail/index',
    url: '../../res/promotion_image/02.jpg',
    desc: '产品2描述...',
    price: null,
    current: 12.09,
    tags: [
      '满15减3'
    ]
  },
  {
    link: '#item5-2',
    page: '../../pages/product-detail/index',
    url: '../../res/promotion_image/02.jpg',
    desc: '产品2描述...',
    price: null,
    current: 12.09,
    tags: [
      '满15减3'
    ]
  },
  {
    link: '#item6-1',
    page: '../../pages/product-detail/index',
    url: '../../res/promotion_image/03.jpg',
    desc: '产品1描述，哒哒哒哒哒...',
    price: 36.99,
    current: 30.00,
    tags: [
      '8.8折',
      '满18减3'
    ]
  },
  {

    link: '#item6-2',
    page: '../../pages/product-detail/index',
    url: '../../res/promotion_image/04.jpg',
    desc: '产品1描述，哒哒哒哒哒...',
    price: 15.90,
    current: 9.90,
    tags: [
      '7.6折',
    ]
  },
  {
    link: '#item7-1',
    page: '../../pages/product-detail/index',
    url: '../../res/promotion_image/05.jpg',
    desc: '产品1描述，哒哒哒哒哒...',
    price: 59.50,
    current: 49.99,
    tags: [
      '超值大礼包'
    ]
  },
  {

    link: '#item7-2',
    page: '../../pages/product-detail/index',
    url: '../../res/promotion_image/06.jpg',
    desc: '产品1描述，哒哒哒哒哒...',
    price: null,
    current: 32.02,
    tags: [
      '满21减7'
    ]
  },
  {

    link: '#item8-1',
    page: '../../pages/product-detail/index',
    url: '../../res/promotion_image/07.jpg',
    desc: '产品1描述，哒哒哒哒哒...',
    price: 59.50,
    current: 49.99,
    tags: [
      '超值大礼包'
    ]
  },
  {

    link: '#item8-2',
    page: '../../pages/product-detail/index',
    url: '../../res/promotion_image/02.jpg',
    desc: '产品1描述，哒哒哒哒哒...',
    price: null,
    current: 32.02,
    tags: [
      '满21减7'
    ]
  },
];

const fastChannelDatas = [
  {
    page: "../../pages/test/index",
    link: '#fast-pass-item:1',
    url: '../../res/nav_icon/01.jpg',
    title: '满减专区',
  },
  {
    page: "../../pages/test/index",
    link: '#fast-pass-item:2',
    url: '../../res/nav_icon/02.jpg',
    title: '折扣专区',
  },
  {
    page: "../../pages/test/index",
    link: '#fast-pass-item:3',
    url: '../../res/nav_icon/03.jpg',
    title: '礼包专区',
  },
  {
    page: "../../pages/test/index",
    link: '#fast-pass-item:4',
    url: '../../res/nav_icon/04.jpg',
    title: '新用户专区',
  },
];

Page({

  /**
   * 页面的初始数据
   */
  data: {
    fastChannelDatas: fastChannelDatas,
    promotionProductDatas: utils.list2TableDatas(promotionProductDatas),

    scrollTop: 0,
    hideToTopButton: true,
  },

  onCartTap: cartButton.onCartTap,

  onSearchLayoutTap: searchLayout.onSearchLayoutTap,

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
   * 页面滑动事件，通过滑动距离控制回到顶部的按钮是否显示
   */
  onScroll(event) {
    this.setData({
      hideToTopButton: toTopButton.shouldHide(event)
    });
  },

  /**
   * 页头推广点击事件
   */
  onHeaderTap() {
    utils.navigateToPage({
      page: '../../pages/test/index',
      link: '#页头网络请求'
    });
  },

  onFastChannelTap(event) {
    utils.navigateToPage(fastChannelDatas[event.currentTarget.dataset.index]);
  },

  onProductTap(event) {
    var index1 = event.currentTarget.dataset.firstIndex;
    var index2 = event.currentTarget.dataset.secondIndex;
    utils.navigateToPage(this.data.promotionProductDatas[index1][index2]);
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