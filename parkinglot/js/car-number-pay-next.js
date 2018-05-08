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
        var hadRegister = true
        if (hadRegister) {
            $('.mask').show()
            setTimeout(function () {
                $('.mask').hide()
                location.href = 'car-number-pay-success.html'
            },1000)
        } else {
            location.href = 'user-register.html'
        }
    })
    // 点击他人会员卡支付
    $('.other-idcard-pay').on('click',function () {
        $('.other-pay-modal').show()
    })
    // 点击关闭按钮自
    $('#close_other_modal').on('click',function () {
        $('.other-pay-modal').hide()
    })
    // 点击他人支付按钮
    $('.other-pay-btn').on('click',function () {
        $('.other-pay-modal').hide()
        $('.mask').show()
        setTimeout(function () {
            $('.mask').hide()
            location.href = 'car-number-pay-success.html'
        },1000)
    })


    // 验证按钮的倒计时
    var timer = null
    var DELAYTIME = 90
    var delayTime = DELAYTIME
    $('.green-btn').on('click', function () {
        if ($('#js_tel').val().length != 11) {
            alert('手机号错误')
        } else {
            $('.green-btn').hide()
            $('.gray-btn').show()
            $('.gray-btn').text(delayTime + '秒后重试')

            // 在这里发送验证码请求
            // .......

            timer = setInterval(function () {
                delayTime--
                $('.gray-btn').text(delayTime + '秒后重试')
                if (delayTime < 1) {
                    clearInterval(timer)
                    $('.gray-btn').hide()
                    $('.green-btn').show()
                    delayTime = DELAYTIME
                }
            }, 1000)
        }
    })
})