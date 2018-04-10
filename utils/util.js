

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 跳转到指定页面
 * 附加网络请求链接
 */
var navigateToPage = (target) => {
  wx: wx.navigateTo({
    url: target.page + '?link=' + target.link,
  });
}


/**
 * 商品数据处理，list浏览模式 -> table浏览模式
 * 参数要求
 * products = [
 *   {
 *      产品属性(无限制)
 *   },
 *   ...(不限数量)
 * ]
*/
const COLUMN_COUNT = 2;
var list2TableDatas = (products,columnCount) => {
  if (products == null) {
    return null;
  }
  let newProductData = [];
  let tempArray = [];
  let productData = products;
  let count = columnCount === undefined ? COLUMN_COUNT : columnCount;
  count = count < 0 ? COLUMN_COUNT : count;
  while (productData.length % count != 0 ) {
    productData.push(null);
  }
  for (var index in productData) {
    tempArray.push(productData[index]);
    if (index % count == count-1) {
      newProductData.push(tempArray);
      tempArray = [];
    }
  }
  return newProductData;
};

/**
 * 商品数据处理，table浏览模式 -> list浏览模式
 * 参数要求 
 * category = {
 *   products: [
 *     [
 *        {
 *          产品属性(无限制)
 *        },
 *        ...(不限数量)
 *     ],
 *     ...(不限数量)
 *   ]
 * }
 */
var table2ListDatas = (products) => {
  if (products == null) {
    return null;
  }
  var newProductData = [];
  for (var i in products) {
    for (var j in products[i]) {
      newProductData.push(products[i][j]);
    }
  }
  return newProductData;
};







module.exports = {
  formatTime: formatTime,
  navigateToPage: navigateToPage,
  table2ListDatas: table2ListDatas,
  list2TableDatas: list2TableDatas,
}
