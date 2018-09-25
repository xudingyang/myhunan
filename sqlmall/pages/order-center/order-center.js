Page({

  data: {
    payModalShow: false,          // 选择支付方式，弹出界面
    memberPwdPanelShow: false,    // 会员卡支付，弹出界面
    restMoneyEnough: true,        // 会员卡余额是否足够
    tabAllOrderActive: true,      // 全部订单是否被点击
    notPayActive: false,          // 未付款被点击
    sendingActive: false,         // 待收货被点击
    willSendActive: false,        // 待发货被点击
    // 订单状态： 未支付notpay   已完成finished   待收货sending 待发货willsend  已取消hadcancel
    orders: [
      {
        state: 'notpay',
        orderNumber: '11111111111111111',
        restTime: '18时23分',
        totalMoney: '732.00',
        goodsList: [
          {
            imgUrl: '/images/good/naifen1.jpg',
            name: '就是打开了房间了卡萨点击分类卡萨丁解放路卡萨丁结果来看的说法叫过来看电视剧发过来看见对方立刻感觉两款发动机的九分裤',
            count: 2
          },
          {
            imgUrl: '/images/good/naifen1.jpg',            
            name: '就是打开了房间了卡萨点击分类卡萨丁解放路卡萨丁结果来看的说法叫过来看电视剧发过来看见对方立刻感觉两款发动机的九分裤',
            count: 2
          }
        ],
        giftGoodsList: [
          {
            imgUrl: '/images/good/naifen1.jpg',            
            name: '就是打开了房间了卡萨点击分类卡萨丁解放路卡萨丁结果来看的说法叫过来看电视剧发过来看见对方立刻感觉两款发动机的九分裤',
            count: 1
          }
        ]
      },
      {
        state: 'finished',
        orderNumber: '22222222222222222',
        restTime: '',
        totalMoney: '732.00',        
        goodsList: [
          {
            imgUrl: '/images/good/naifen1.jpg',            
            name: '就是打开了房间了卡萨点击分类卡萨丁解放路卡萨丁结果来看的说法叫过来看电视剧发过来看见对方立刻感觉两款发动机的九分裤',
            count: 2
          },
          {
            imgUrl: '/images/good/naifen1.jpg',            
            name: '就是打开了房间了卡萨点击分类卡萨丁解放路卡萨丁结果来看的说法叫过来看电视剧发过来看见对方立刻感觉两款发动机的九分裤',
            count: 2
          }
        ],
        giftGoodsList: [
     
        ]
      }, 
      {
        state: 'sending',
        orderNumber: '33333333333333333',
        restTime: '',
        totalMoney: '732.00',        
        goodsList: [
          {
            imgUrl: '/images/good/naifen1.jpg',            
            name: '就是打开了房间了卡萨点击分类卡萨丁解放路卡萨丁结果来看的说法叫过来看电视剧发过来看见对方立刻感觉两款发动机的九分裤',
            count: 2
          },
          {
            imgUrl: '/images/good/naifen1.jpg',            
            name: '就是打开了房间了卡萨点击分类卡萨丁解放路卡萨丁结果来看的说法叫过来看电视剧发过来看见对方立刻感觉两款发动机的九分裤',
            count: 2
          }
        ],
        giftGoodsList: [
         
        ]
      }, 
      {
        state: 'willsend',
        orderNumber: '444444444444444444',
        restTime: '18时23分',
        totalMoney: '732.00',     
        refund: 1,           
        goodsList: [
          {
            imgUrl: '/images/good/naifen1.jpg',            
            name: '就是打开了房间了卡萨点击分类卡萨丁解放路卡萨丁结果来看的说法叫过来看电视剧发过来看见对方立刻感觉两款发动机的九分裤',
            count: 2
          },
          {
            imgUrl: '/images/good/naifen1.jpg',            
            name: '就是打开了房间了卡萨点击分类卡萨丁解放路卡萨丁结果来看的说法叫过来看电视剧发过来看见对方立刻感觉两款发动机的九分裤',
            count: 2
          }
        ],
        giftGoodsList: [
        
        ]
      },
      {
        state: 'willsend',
        orderNumber: '444444444444444444',
        restTime: '18时23分',
        totalMoney: '732.00',
        refund: 0,
        goodsList: [
          {
            imgUrl: '/images/good/naifen1.jpg',
            name: '就是打开了房间了卡萨点击分类卡萨丁解放路卡萨丁结果来看的说法叫过来看电视剧发过来看见对方立刻感觉两款发动机的九分裤',
            count: 2
          },
          {
            imgUrl: '/images/good/naifen1.jpg',
            name: '就是打开了房间了卡萨点击分类卡萨丁解放路卡萨丁结果来看的说法叫过来看电视剧发过来看见对方立刻感觉两款发动机的九分裤',
            count: 2
          }
        ],
        giftGoodsList: [

        ]
      },
      {
        state: 'hadcancel',
        orderNumber: '555555555555555555',
        restTime: '',
        totalMoney: '732.00',        
        goodsList: [
          {
            imgUrl: '/images/good/naifen1.jpg',            
            name: '就是打开了房间了卡萨点击分类卡萨丁解放路卡萨丁结果来看的说法叫过来看电视剧发过来看见对方立刻感觉两款发动机的九分裤',
            count: 2
          },
          {
            imgUrl: '/images/good/naifen1.jpg',            
            name: '就是打开了房间了卡萨点击分类卡萨丁解放路卡萨丁结果来看的说法叫过来看电视剧发过来看见对方立刻感觉两款发动机的九分裤',
            count: 2
          }
        ],
        giftGoodsList: [
        
        ]
      }
    ],
    notPayOrders: [
      {
        state: 'notpay',
        orderNumber: '11111111111111111',
        restTime: '18时23分',
        totalMoney: '732.00',
        goodsList: [
          {
            imgUrl: '/images/good/naifen1.jpg',
            name: '就是打开了房间了卡萨点击分类卡萨丁解放路卡萨丁结果来看的说法叫过来看电视剧发过来看见对方立刻感觉两款发动机的九分裤',
            count: 2
          },
          {
            imgUrl: '/images/good/naifen1.jpg',
            name: '就是打开了房间了卡萨点击分类卡萨丁解放路卡萨丁结果来看的说法叫过来看电视剧发过来看见对方立刻感觉两款发动机的九分裤',
            count: 2
          }
        ],
        giftGoodsList: [
          {
            imgUrl: '/images/good/naifen1.jpg',
            name: '就是打开了房间了卡萨点击分类卡萨丁解放路卡萨丁结果来看的说法叫过来看电视剧发过来看见对方立刻感觉两款发动机的九分裤',
            count: 1
          }
        ]
      },
      {
        state: 'notpay',
        orderNumber: '22222222222222222',
        restTime: '',
        totalMoney: '732.00',
        goodsList: [
          {
            imgUrl: '/images/good/naifen1.jpg',
            name: '就是打开了房间了卡萨点击分类卡萨丁解放路卡萨丁结果来看的说法叫过来看电视剧发过来看见对方立刻感觉两款发动机的九分裤',
            count: 2
          },
          {
            imgUrl: '/images/good/naifen1.jpg',
            name: '就是打开了房间了卡萨点击分类卡萨丁解放路卡萨丁结果来看的说法叫过来看电视剧发过来看见对方立刻感觉两款发动机的九分裤',
            count: 2
          }
        ],
        giftGoodsList: [

        ]
      }
    ],
    sendingOrders: [
      {
        state: 'sending',
        orderNumber: '11111111111111111',
        restTime: '18时23分',
        totalMoney: '732.00',
        goodsList: [
          {
            imgUrl: '/images/good/naifen1.jpg',
            name: '就是打开了房间了卡萨点击分类卡萨丁解放路卡萨丁结果来看的说法叫过来看电视剧发过来看见对方立刻感觉两款发动机的九分裤',
            count: 2
          },
          {
            imgUrl: '/images/good/naifen1.jpg',
            name: '就是打开了房间了卡萨点击分类卡萨丁解放路卡萨丁结果来看的说法叫过来看电视剧发过来看见对方立刻感觉两款发动机的九分裤',
            count: 2
          }
        ],
        giftGoodsList: [
          {
            imgUrl: '/images/good/naifen1.jpg',
            name: '就是打开了房间了卡萨点击分类卡萨丁解放路卡萨丁结果来看的说法叫过来看电视剧发过来看见对方立刻感觉两款发动机的九分裤',
            count: 1
          }
        ]
      },
      {
        state: 'sending',
        orderNumber: '33333333333333333',
        restTime: '',
        totalMoney: '732.00',
        goodsList: [
          {
            imgUrl: '/images/good/naifen1.jpg',
            name: '就是打开了房间了卡萨点击分类卡萨丁解放路卡萨丁结果来看的说法叫过来看电视剧发过来看见对方立刻感觉两款发动机的九分裤',
            count: 2
          },
          {
            imgUrl: '/images/good/naifen1.jpg',
            name: '就是打开了房间了卡萨点击分类卡萨丁解放路卡萨丁结果来看的说法叫过来看电视剧发过来看见对方立刻感觉两款发动机的九分裤',
            count: 2
          }
        ],
        giftGoodsList: [

        ]
      }
    ],
    willSendOrders: [
      {
        state: 'willsend',
        orderNumber: '33333333333333333',
        restTime: '',
        totalMoney: '732.00',
        refund: 1,  // 表示 退款中。退款完成后，订单状态变成 已取消
        goodsList: [
          {
            imgUrl: '/images/good/naifen1.jpg',
            name: '就是打开了房间了卡萨点击分类卡萨丁解放路卡萨丁结果来看的说法叫过来看电视剧发过来看见对方立刻感觉两款发动机的九分裤',
            count: 2
          },
          {
            imgUrl: '/images/good/naifen1.jpg',
            name: '就是打开了房间了卡萨点击分类卡萨丁解放路卡萨丁结果来看的说法叫过来看电视剧发过来看见对方立刻感觉两款发动机的九分裤',
            count: 2
          }
        ],
        giftGoodsList: [

        ]
      },
      {
        state: 'willsend',
        orderNumber: '444444444444444444',
        restTime: '18时23分',
        totalMoney: '732.00',
        refund: 0, 
        goodsList: [
          {
            imgUrl: '/images/good/naifen1.jpg',
            name: '就是打开了房间了卡萨点击分类卡萨丁解放路卡萨丁结果来看的说法叫过来看电视剧发过来看见对方立刻感觉两款发动机的九分裤',
            count: 2
          },
          {
            imgUrl: '/images/good/naifen1.jpg',
            name: '就是打开了房间了卡萨点击分类卡萨丁解放路卡萨丁结果来看的说法叫过来看电视剧发过来看见对方立刻感觉两款发动机的九分裤',
            count: 2
          }
        ],
        giftGoodsList: [

        ]
      }
    ],
  },

  onLoad: function (options) {
    var state = options['state']
    if ('notpay' === state) {
      this.clickNotPay()
    } else if ('sending' === state) {
      this.clickSending()
    } else if ('willsend' === state) {
      this.clickWillSend()
    } else if ('all' === state) {
      this.clickAllOrders()
    }
  },
  // 点击订单，跳到详情
  lookOrderDetail: function(e){
    var state = e.currentTarget.dataset.state;
    if (state === 'notpay') {
      wx.navigateTo({
        url: '/pages/order-detail-notpay/order-detail-notpay'
      })
    } else {
      wx.navigateTo({
        url: '/pages/order-detail/order-detail'
      })
    }
  },
  // 未支付订单，点击“去支付”按钮
  payOrder: function (){
    this.setData({
      payModalShow: true
    })
  },
  // 已完成订单、待收货订单、过了退单时间的待发货订单  点击“再次购买”按钮
  buyAgain: function() {
    wx.navigateTo({
      url: '/pages/order-xiadan/order-xiadan'
    })
  },
  // 待发货订单，处于可退单时间内
  cancelOrder: function (e) {
    console.log(e.currentTarget.dataset.orderId)
    var isTimeOut = true  // 退单时间是否过了
    var time = 9
    if (isTimeOut) {
      wx.showModal({
        title: '操作无效',
        content: '下单后超过' + time + '分钟，不可以取消订单',
        showCancel: true,
        cancelText: '取消',
        cancelColor: '#f23030',
        confirmText: '确定',
        confirmColor: ''
      })
    } else {
      wx.showToast({
        title: '',
        icon: '',
        image: '',
        duration: 0,
        mask: true,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    }
  },
  // 删除订单
  deleteOrder: function (e){
    var that = this
    wx.showModal({
      title: '删除订单',
      content: '确定删除该订单吗？',
      showCancel: true,
      cancelText: '取消',
      cancelColor: '',
      confirmText: '确定',
      confirmColor: '',
      success: function(res) {
        if (res.confirm) {
          var orderId = e.currentTarget.dataset.orderId;
          var tmpOrders = that.data.orders.slice()
          that.data.orders.forEach(function (val, indx) {
            if (val.orderNumber === orderId) {
              tmpOrders.splice(indx, 1)
            }
          })
          that.setData({
            orders: tmpOrders
          })
        }
      }
    })
  },
  // 关闭支付界面
  closePayModal: function (){
    this.setData({
      payModalShow: false
    })
  },
  // 微信支付
  wxPay: function () {

  },
  // 会员卡支付
  memberPay: function () {
    if (this.data.restMoneyEnough) {
      this.setData({
        memberPwdPanelShow: true
      })
    } else {
      wx.showModal({
        title: '余额不足',
        content: '您的会员卡余额不足，您可以去充值或者使用微信支付',
        showCancel: true,
        cancelText: '取消',
        cancelColor: '#f23030',
        confirmText: '充值',
        confirmColor: '',
        success: function (res) {
          if (res.confirm) {
            wx.navigateTo({
              url: '/pages/user-chongzhi/user-chongzhi'
            })
          }
        }
      })
    }
  },
  // 输入会员卡密码
  confirmmemberPwd: function (e) {
    var that = this
    wx.showLoading({
      title: '请稍等...',
      mask: true,
      success: function (res) {
        // 发送请求，验证密码 ...

        setTimeout(function () {

          wx.hideLoading()


          var inputPwd = e.detail.value.userpwd
          var userPwd = '123456'
          // 密码正确
          if (inputPwd === userPwd) {
            wx.showToast({
              title: '支付成功',
              icon: 'success',
              duration: 900,
              mask: true
            })
            that.setData({
              memberPwdPanelShow: false
            })
            wx.navigateTo({
              url: '/pages/order-xiadan-success/order-xiadan-success'
            })
          } else {
            wx.showToast({
              title: '密码错误',
              icon: 'none',
              duration: 900,
              mask: true
            })
          }
        }, 2000)
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  // 关闭会员卡密码界面
  closeMemberPwdPanel: function () {
    this.setData({
      memberPwdPanelShow: false
    })
  },

  clickAllOrders: function () {
    this.setData({
      tabAllOrderActive: true,
      notPayActive: false,
      sendingActive: false,
      willSendActive: false
    })
  },
  clickNotPay: function (){
    this.setData({
      tabAllOrderActive: false,
      notPayActive: true,
      sendingActive: false,
      willSendActive: false
    })
  },
  clickSending: function () {
    this.setData({
      tabAllOrderActive: false,
      notPayActive: false,
      sendingActive: true,
      willSendActive: false
    })
  },
  clickWillSend: function () {
    this.setData({
      tabAllOrderActive: false,
      notPayActive: false,
      sendingActive: false,
      willSendActive: true
    })
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    setTimeout(function(){
      wx.stopPullDownRefresh()
    },2000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var array = [
      {
        state: 'finished',
        orderNumber: '232323232323232',
        restTime: '',
        totalMoney: '732.00',
        goodsList: [
          {
            imgUrl: '/images/good/naifen1.jpg',
            name: '就是打开了房间了卡萨点击分类卡萨丁解放路卡萨丁结果来看的说法叫过来看电视剧发过来看见对方立刻感觉两款发动机的九分裤',
            count: 2
          },
          {
            imgUrl: '/images/good/naifen1.jpg',
            name: '就是打开了房间了卡萨点击分类卡萨丁解放路卡萨丁结果来看的说法叫过来看电视剧发过来看见对方立刻感觉两款发动机的九分裤',
            count: 2
          }
        ],
        giftGoodsList: [

        ]
      },
      {
        state: 'willsend',
        orderNumber: '232323232323232',
        restTime: '18时23分',
        totalMoney: '732.00',
        goodsList: [
          {
            imgUrl: '/images/good/naifen1.jpg',
            name: '就是打开了房间了卡萨点击分类卡萨丁解放路卡萨丁结果来看的说法叫过来看电视剧发过来看见对方立刻感觉两款发动机的九分裤',
            count: 2
          },
          {
            imgUrl: '/images/good/naifen1.jpg',
            name: '就是打开了房间了卡萨点击分类卡萨丁解放路卡萨丁结果来看的说法叫过来看电视剧发过来看见对方立刻感觉两款发动机的九分裤',
            count: 2
          }
        ],
        giftGoodsList: [

        ]
      },
      {
        state: 'hadcancel',
        orderNumber: '232323232323232',
        restTime: '',
        totalMoney: '732.00',
        goodsList: [
          {
            imgUrl: '/images/good/naifen1.jpg',
            name: '就是打开了房间了卡萨点击分类卡萨丁解放路卡萨丁结果来看的说法叫过来看电视剧发过来看见对方立刻感觉两款发动机的九分裤',
            count: 2
          },
          {
            imgUrl: '/images/good/naifen1.jpg',
            name: '就是打开了房间了卡萨点击分类卡萨丁解放路卡萨丁结果来看的说法叫过来看电视剧发过来看见对方立刻感觉两款发动机的九分裤',
            count: 2
          }
        ],
        giftGoodsList: [

        ]
      }
    ]
    var tmp = this.data.orders.slice()
    tmp = tmp.concat(array)
    if (this.data.tabAllOrderActive) {
      this.setData({
        orders: tmp
      })
    } else if (this.data.notPayActive) {
      this.setData({
        notPayOrders: tmp
      })
    } else if (this.data.sendingActive) {
      this.setData({
        sendingOrders: tmp
      })
    } else if (this.data.willSendActive) {
      this.setData({
        willSendOrders: tmp
      })
    }
  }
})