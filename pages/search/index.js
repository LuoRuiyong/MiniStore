// pages/search/index.js
import { toTopButton, cartButton } from '../../templates/common.js';
const utils = require('../../utils/util.js');

const hotSearchWords0 = [
  '洗衣液',
  '沐浴露',
  '零食',
  '可乐',
  '饼干',
  '毛巾',
  '方便面',
  '怡宝矿泉水',
  '牛奶',
  '酱油',
  '雨伞',
  '充电线'
];
const hotSearchWords1 = [
  '洁面乳',
  '牙刷',
  '奶茶',
  '生姜',
  '抹布',
  '伊利牛奶',
  '盐',
  '冰红茶',
  '雪碧',
  '草稿纸',
  '拖鞋',
  '拖把'
];

const hotSearchWords2 = [
  '芒果',
  '铅笔',
  '剪刀',
  '冰红茶',
  '昆仑山矿泉水',
  '镜子',
  '酱油',
  '砧板',
  '电磁炉',
  '猫粮纸',
  '玩具',
  '星星球',
  '衣架'
];
const historySearchWords = [
    '猫粮',
    '剃须刀',
    '洗洁精',
    '脉动',
    '橘子',
    '毛巾',
    '苹果',
    '糖果',
    '立白洗衣液',
    '抽纸'
  ];

const products = [
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
  {
    link: '#item12',
    page: '../../pages/product-detail/index',
    url: '../../res/promotion_image/05.jpg',
    desc: '产品1描述，哒哒哒哒哒...',
    price: 99.99,
    tags: [
      3, 4
    ]
  },
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
  {
    link: '#item12',
    page: '../../pages/product-detail/index',
    url: '../../res/promotion_image/05.jpg',
    desc: '产品1描述，哒哒哒哒哒...',
    price: 99.99,
    tags: [
      3, 4
    ]
  },
];

Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0, // 临时变量（测试用）

    scrollTop: 0,  // 回到顶部协助
    hideToTopButton: true,    // 是否隐藏回到顶部按钮
    value: '',    // 搜索内容
    conditionMode: 0, // 条件筛选模式
    showSearchTips: true,
    result: null,  // 搜索结果
    browseMode: 0, // 浏览模式，0表格（默认） 1,列表
  
    hotSearchWords: hotSearchWords0,
    historySearchWords: historySearchWords,
  },

  /**
   * 输入框文字变化监听
   */
  onTextChanged(event) {
    this.setData({
      value: event.detail.value,
    })
    console.log(this.data.value)
  },

  /**
   * 清空输入框中的文字
   */
  clearInputBar() {
    this.setData({
      value: '',
    })
  },

  /**
   * 提交搜索
   */
  search() {
    let data = this.data.browseMode == 0 ? utils.list2TableDatas(products) : products;
    this.setData({
      result: data,
      showSearchTips: false,
      result: null,
    });
  },

  /**
   * 刷新
   */
  refresh() {
    let data = this.data.browseMode == 0 ? utils.list2TableDatas(products) : products;
    this.setData({
      result: data,
      showSearchTips: false,
    });
  },

  /**
    * 改变浏览样式
    */
  onBrowseModeTap: function () {
    let mode = (this.data.browseMode + 1) % 2;
    let result = (mode == 0 ? utils.list2TableDatas(this.data.result) : utils.table2ListDatas(this.data.result));
    this.setData({
      browseMode: mode,
      result: result,
    });
  },

  /**
    * 条件筛选
    */
  onConditionBarTap(event) {
    let index = event.currentTarget.dataset.index;
    let conditionMode = index;
    if (index == 0) {
      // 联网操作
      // 综合排序
      console.log('综合排序');
    } else if (index == 1) {
      // 联网操作
      // 销量优先
      console.log('销量优先');
      
    } else if (index == 2) {
      if (this.data.conditionMode == 2 || this.data.condition == 3) {
        conditionMode = (this.data.conditionMode + 1) % 2 + 2;
      } else {
        conditionMode = 2;
      }
      if (conditionMode == 2) {
        // 联网操作
        // 价格低优先
        console.log('价格低优先');
        
      } else {
        // 联网操作
        // 价格高优先
        console.log('价格高优先');
        
      }
    }
    this.setData({
      conditionMode: conditionMode,
      scrollTop: 0,
      hideToTopButton: true,
    })
  },

  /**
   * 页面滑动
   */
  onPageScroll(event) {
    this.setData({
      hideToTopButton: toTopButton.shouldHide(event)
    })
  },

  /**
   * 用户点击某一产品
   */
  onProductTap(event) {
    let target = null;
    if (this.data.browseMode == 0) {
      let index1 = event.currentTarget.dataset.firstIndex;
      let index2 = event.currentTarget.dataset.secondIndex;
      target = this.data.result[index1][index2];
    } else {
      let index = event.currentTarget.dataset.index;
      target = this.data.result[index];
    }
    utils.navigateToPage(target);
  },

  /**
   * 回到页面顶部
   */
  goToTop() {
    this.setData({
      scrollTop: 0,
      hideToTopButton: true,
    })
  },

  onCartTap: cartButton.onCartTap,

  /**
   * 换一组热搜，联网
   */
  changeHotSearchWord: function() {
    let count = ++this.data.count % 3;
    let data = null;
    switch(count) {
      case 0:
        data = hotSearchWords0;
      break;
      case 1:
        data = hotSearchWords1;
      break;
      case 2:
        data = hotSearchWords2;
      break;
    };
    this.setData({
      count: count,
      hotSearchWords: data
    });
  },

  /**
   * 删除历史
   */
  removeHistory: function(){
    this.setData({
      historySearchWords: null
    })
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