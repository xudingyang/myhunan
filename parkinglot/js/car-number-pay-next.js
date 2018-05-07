$(function () {
    var state = 3
    if (1 === state) {
        // 未入场
        $('.fail-wrapper').show()
        $('.success-wrapper').hide()
        $('.had-pay-wrapper').hide()
    } else if (2 === state) {
        // 已支付
        $('.fail-wrapper').hide()
        $('.success-wrapper').hide()
        $('.had-pay-wrapper').show()
    } else {
        // 支付
        $('.fail-wrapper').hide()
        $('.success-wrapper').show()
        $('.had-pay-wrapper').hide()
    }
    
    
    // 点击微信支付
    $('.wx-pay').on('click',function () {
        
    })
    // 点击会员卡支付
    $('.idcard-pay').on('click',function () {
        var hadRegister = false
        if (hadRegister) {
            $('.keyboard-modal').show()
        } else {
            location.href = 'user-register.html'
        }
    })


    // 密码输入
    var pwdArr = []  // 存储密码的数组
    var pwdStr = ''  // 字符串形式的密码
    var pwdTabs = $('.pwd-con .pwd')   // 6个显示密码的格子
    var timer2 = null
    // 数字 按钮
    $('.keyboard-container .num').on('click', function () {
        if (pwdArr.length < 6) {
            var dataNum = $(this).data('num')
            if (typeof dataNum === 'number') {
                pwdArr.push(dataNum)
            }
        } else {
            // 若超过6个数字，不做处理
            return
        }
        for (var i = 0; i < pwdArr.length; i++) {
            pwdTabs.eq(i).text('●')
        }
        console.log(pwdArr);
        timer2 = setTimeout(function () {
            if (pwdArr.length === 6) {
                pwdStr = pwdArr.join('')
                // 获取密码，发送请求，判断密码是否正确 .........................

                // 密码是否正确
                var isRight = false
                if (isRight) {
                    location.href = 'car-number-pay-success.html'
                } else {
                    alert('密码错误，请重新输入')
                    pwdArr.length = 0
                    pwdTabs.text('')
                }
            }
        }, 1000)
    })
    // 删除 按钮  ●
    $('.js-del').on('click', function () {
        if (pwdArr.length < 1) {
            return
        }
        pwdArr.pop()
        for (var i = 0; i < pwdArr.length; i++) {
            pwdTabs.eq(i).text('●')
        }
        for (var j = pwdArr.length; j < 6; j++) {
            pwdTabs.eq(j).text('')
        }
    })
    // 取消  按钮
    $('.cancel-pay').on('click',function () {
        $('.keyboard-modal').hide()
        // 复原密码输入框
        pwdArr.length = 0
        pwdTabs.text('')
        pwdStr = ''  // 第一次输入的密码
        clearTimeout(timer2)
    })
})