// pages/classification/index.js
const utils = require('../../utils/util.js');
import { cartButton, toTopButton, searchLayout } from '../../templates/common.js';

const categories = [
  {
    title: '热门商品',
    link: '热门商品'
  },
  {
    title: '种类A',
    link: '种类A'
  },
  {
    title: '种类B',
    link: '种类B'
  },
  {
    title: '种类C',
    link: '种类C'
  },
  {
    title: '种类D',
    link: '种类D'
  },
  {
    title: '种类E',
    link: '种类E'
  },
  {
    title: '种类F',
    link: '种类F'
  },
  {
    title: '种类G',
    link: '种类G'
  },
  {
    title: '种类H',
    link: '种类H'
  },
  {
    title: '种类I',
    link: '种类I'
  },
  {
    title: '种类J',
    link: '种类J'
  },
  {
    title: '种类K',
    link: '种类K'
  },
  {
    title: '种类L',
    link: '种类L'
  },
  {
    title: '种类M',
    link: '种类M'
  },
  {
    title: '种类N',
    link: '种类N'
  }
  
];

const description = [
  '价额无法撇开分配未',
  '贾鹏而过帕尔卡',
  '突然好可怕他人更换打发',
  '破文件我就佩服',
  '排位哦我破防',
  '偶爱二批发击破二嘎二哥热',
  '二号突然片Pro通过',
  '评价仍害怕机的',
]

const prices = [
  23.99,
  12.34,
  23.65,
  34.67,
  67.45,
  76.29,
  90.32,
  89.14,
]


Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectedIndex: 0, // 选择的商品种类索引号
    browseMode: 0,    //0表示表格，1表示列表
    scrollTop: 0,
    showFooter: false,
    hideToTopButton: true,
    categories: categories,  // 所有种类，打开页面时联网加载
    // 转换得到的表格数据
    category: null,
  },

  /**
   * 改变浏览样式
   */
  onBrowseModeTap: function () {
    let mode = (this.data.browseMode + 1) % 2;
    let category = this.data.category;
    category.products = (mode == 0 ? utils.list2TableDatas(category.products) : utils.table2ListDatas(category.products));
    this.setData({
      browseMode: mode,
      category: category,
    });
  },

  /**
   * 点击某一商品事件
   */
  onProductTap(event) {
    let product = null;
    if (this.data.browseMode == 0) {
      // 表格
      let i = event.currentTarget.dataset.firstIndex;
      let j = event.currentTarget.dataset.secondIndex;
      product = this.data.category.products[i][j];
    } else {
      let k = event.currentTarget.dataset.index;
      product = this.data.category.products[k];
    }
    utils.navigateToPage(product);
  },

  /**
   * 测试用
   */
  createRandomData(title) {
    /**以下为随机产生测试数据 */
    var newCategory = {};
    var count = Math.floor(Math.random() * 1000) % 40;
    var products = [];    
    newCategory.title = title;
    for (var i = 0; i < count; i++) {
      var j = Math.floor(Math.random() * 1000) % 7 + 1;
      var product = {
        page: '../../pages/product-detail/index',
        link: '#item-' + i,
        desc: description[j],
        url: '../../res/promotion_image/0' + j + '.jpg',
        price: prices[j]
      }
      products.push(product);
    }
    if (this.data.browseMode == 0) {
      newCategory.products = utils.list2TableDatas(products);
    }
    return newCategory;  
  },

  /**
   * 种类选择事件
   */
  onCategoryChanged(event) {
    let index = event.currentTarget.dataset.index;
    let link = this.data.categories[index].link;
    // 发起网络请求
    console.log(link);
    let category = this.createRandomData(link);
    this.setData({
      selectedIndex: index,
      category: category,
      scrollTop: 0,
      hideFooter: true,
      hideToTopButton: true
    });
    
  },

  onCartTap: cartButton.onCartTap,

  /**
   * 回倒顶部
   */
  goToTop() {
    this.setData({
      scrollTop: 0,
      hideFooter: true
    });
  },

  /**
   * 点击搜索栏事件
   */
  onSearchLayoutTap: searchLayout.onSearchLayoutTap,

  /**
   * 显示页脚
   */
  onScrollToBottom() {
    this.setData({
      hideFooter: false
    });
  },

  onScroll(event) {
    this.setData({
      hideToTopButton: toTopButton.shouldHide(event)
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      category: this.createRandomData(categories[0].title),
      hideFooter: true,
    })
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