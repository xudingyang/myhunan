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
    // 点击我的手机
    $('#wdsj').on('click',function () {
        if (hadSetPhone) {
            location.href = 'phone-manage.html'
        } else {
            location.href = 'user-register.html'
        }
    })
})