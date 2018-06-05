$(function () {

    // 如果设置了手机号
    var hadSetPhone = true
    var phone = '13866668888'
    if (hadSetPhone) {
        $('.right-phone').text(phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2'))
    } else {
        $('.right-phone').text('未绑定')
    }
    // 点击优惠券
    $('.youhuiquan').on('click',function () {
        location.href = 'coupon.html'
    })
    // 点击订单
    $('.js-order').on('click',function () {
        location.href = 'order.html'
    })
    // 点击常用乘客
    $('#cyck').on('click',function () {
        location.href = 'passengers.html'
    })
    // 点击个人资料
    $('#grzl').on('click',function () {
        location.href = 'user-center-grzl.html'
    })
    // 点击账户安全
    $('#zhaq').on('click',function () {
        location.href = 'user-center-zhaq.html'
    })
})