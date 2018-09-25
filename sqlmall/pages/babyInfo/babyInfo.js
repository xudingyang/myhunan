
Page({

  data: {
    gender: '男',
    babyBirthday: '点此填写宝宝生日',
    babyName: ''
  },

  onLoad: function (options) {

    var gender = '女', name = '李小四', babyBirthday = '2018-02-12'

    if ('男' === gender) {
      this.setData({
        gender: '男'        
      })
    } else {
      this.setData({
        gender: '女'
      })
    }
    this.setData({
      babyBirthday: babyBirthday,
      babyName: name
    })
  },

  // 获取性别
  getBabyGender: function (e) {
    if ('boy' === e.detail.value) {
      this.setData({
        gender: '男'
      })
    } else {
      this.setData({
        gender: '女'
      })
    }
  },
  // 获取生日
  getBabyBirthday: function (e) {
    this.setData({
      babyBirthday: e.detail.value
    })
  },
  // 提交绑定按钮
  submitTelphone: function (e) {
    var babyName = e.detail.value.babyname
    var babyBirthday = this.data.babyBirthday;
    var gender = this.data.gender;
    console.log(babyName + '===' + babyBirthday + '=====' + gender)
  }
})