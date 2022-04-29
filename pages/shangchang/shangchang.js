// pages/shangchang/shangchang.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

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

    },

    onItemClick(options) {
        console.log(options)
        // let price = options.currentTarget.dataset.price
        let price = 0.1
        wx.cloud.callFunction({
            name: 'purchase_jt',
            // 下面是向云函数传递的参数
            data: {
                // 用户名
                price: price
            }
        })
            .then(res => {
                console.log('购买成功', res)
            })
            .catch(err => {
                console.log('购买失败', err)
            })
    }
})