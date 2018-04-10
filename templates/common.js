var cartButton = {
  onCartTap: function() {
    console.log('展示购物车');
  }
}

var searchLayout = {
  onSearchLayoutTap: function() {
    wx:wx.navigateTo({
      url: '../../pages/search/index'
    })
  }
}

var toTopButton = {
  shouldHide(event) {
    var hide;
    if (event.detail.scrollTop > 250) {
      hide = false;
    } else {
      hide = true;
    }
    return hide;
  },
}

export { cartButton, toTopButton, searchLayout };