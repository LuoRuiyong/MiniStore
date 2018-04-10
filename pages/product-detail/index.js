// pages/product-detail/index.js

const product = {
  desc: '产品介绍，哒哒哒哒哒哒打发大师法第三方阿斯顿发到付哒......',
  originalPrice: '52.00',
  currentPrice: '49.99',
  hasCollected: true,
  inventory: 100,
  pictures: [
    '../../res/nav_icon/01.jpg',
    '../../res/nav_icon/02.jpg',
    '../../res/nav_icon/03.jpg',
    '../../res/nav_icon/04.jpg',
  ],
  tags: [
    {
      mode: 1,
      detail: '7.8折'
    },
    {
      mode: 2,
      detail: '满39减5',
    },
    {
      mode: 3,
      detail: '特价商品',
    },
    {
      mode: 5,
      detail: '新用户专享',
    },
    
  ]
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    quantity: 1,  // 购买商品的数量

    product: product,   // 商品信息
  },

  /**
   * 改变收藏状态
   */
  changeCollectState() {
    let product = this.data.product;
    product.hasCollected = !product.hasCollected;
    this.setData({
      product: product,
    });

    // 联网更新数据库
  },

  // 减少商品数量
  minus() {
    this.setData({
      quantity: this.data.quantity - 1,
    });
  },

  // 增加商品数量
  add() {
    let quantity = 1;
    if (!isNaN(this.data.quantity)) {
      quantity = this.data.quantity + 1;
    }
    this.setData({
      quantity: quantity,
    });
  },

  // 商品数量改变
  onQuantityChanged(event) {
    let quantity = parseInt(event.detail.value);
    if (quantity > product.inventory) {
      quantity = product.inventory;
    }
    this.setData({
      quantity: quantity,
    })
  },

  /**
   * 添加到购物车
   */
  addProductToCart() {
    console.log('添加商品到购物车');
  },

   /**
   * 查看购物车
   */
  browseCart() {
    console.log('查看购物车');
  },

  /**
   * 购买商品
   */
  buyProduct() {
    console.log('购买商品');
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