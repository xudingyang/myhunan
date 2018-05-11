$(function () {
    // 如果未注册
    var hadRegistered = false
    // 如果未激活会员卡
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

})