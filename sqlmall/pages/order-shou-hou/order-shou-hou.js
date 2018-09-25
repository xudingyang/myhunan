
Page({

  data: {
    tabApplyActive: false,
    tabRecordActive: true,
    orders: [
      {
        id: '2323232323232323',
        time: '2018-03-12 23:56:34',
        outOfDate: false,
        goods: [
          { name: '三点发水电费大沙发三点发',count:2},
          { name: '三点发水电费大沙发三点发', count: 2 }
        ],
        giftGoods: [
          { name: '三点发水电费大沙发三点发', count: 2 }          
        ]
      },
      {
        id: '2323232323232323',
        time: '2018-03-12 23:56:34',
        outOfDate: true,
        goods: [
          { name: '三点发水电费大沙发三点发', count: 2 },
          { name: '三点发水电费大沙发三点发', count: 2 }
        ],
        giftGoods: [
        ]
      },
      {
        id: '2323232323232323',
        time: '2018-03-12 23:56:34',
        outOfDate: false,
        goods: [
          { name: '三点发水电费大沙发三点发', count: 2 },
          { name: '三点发水电费大沙发三点发', count: 2 }
        ],
        giftGoods: [
          { name: '三点发水电费大沙发三点发', count: 2 }
        ]
      }
    ],
    records: [
      {
        id: '343434343434',
        mark: '换货',
        state: 'finished',
        time: '2018-03-23 23:34:34',        
        goods: [
          {
            imgUrl: '/images/good/naifen1.jpg',
            name: 'fdsaklfjasklfsldka是的范德萨飞机撒打飞机的萨克拉飞机上打开了房间多撒开了家反倒是拉科技范德萨六块腹肌圣诞快乐见风使舵卡拉福建省都开了房间圣'
          },
          {
            imgUrl: '/images/good/naifen1.jpg',
            name: '拉科技范德萨六块腹肌圣诞快乐见风使舵卡拉福建省都开了房间圣'
          }
        ]
      },
      {
        id: '343434343434',
        mark: '退货',
        state: 'unfinished',
        time: '2018-03-23 23:34:34',
        goods: [
          {
            imgUrl: '/images/good/naifen1.jpg',
            name: '快乐见风使舵卡拉福建省都开了房间圣'
          },
          {
            imgUrl: '/images/good/naifen1.jpg',
            name: 'fdsaklfjasklfsldka是的范德萨飞机撒打飞机的萨克拉飞机上打开了房间多撒开了家反倒是拉科技范德萨六块腹肌圣诞快乐见风使舵卡拉福建省都开了房间圣'
          }
        ]
      },
      {
        id: '343434343434',
        mark: '退货',
        state: 'unfinished',
        time: '2018-03-23 23:34:34',
        goods: [
          {
            imgUrl: '/images/good/naifen1.jpg',
            name: '快乐见风使舵卡拉福建省都开了房间圣'
          }
        ]
      },
      {
        id: '343434343434',
        mark: '退货',
        state: 'unfinished',
        time: '2018-03-23 23:34:34',
        goods: [
          {
            imgUrl: '/images/good/naifen1.jpg',
            name: '快乐见风使舵卡拉福建省都开了房间圣'
          }
        ]
      },
      {
        id: '343434343434',
        mark: '退货',
        state: 'unfinished',
        time: '2018-03-23 23:34:34',
        goods: [
          {
            imgUrl: '/images/good/naifen1.jpg',
            name: '快乐见风使舵卡拉福建省都开了房间圣'
          }
        ]
      }
    ]
  },

  onLoad: function (options) {
  
  },
  applyShouHou: function(){
    wx.navigateTo({
      url: '/pages/order-shou-hou-detail/order-shou-hou-detail'
    })
  },
  clickApply: function(){
    this.setData({
      tabApplyActive: true,
      tabRecordActive: false
    })
  },
  clickRecord: function (){
    this.setData({
      tabApplyActive: false,
      tabRecordActive: true
    })
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
  
  }

})