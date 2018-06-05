$(function () {
    // 点击加油卡
    $('.jiayouka').on('click',function () {
        location.href = 'jiayouka.html'
    })
    // 点击优惠券
    $('.youhuiquan').on('click',function () {
        location.href = 'youhuiquan.html'
    })
    // 点击订单
    $('.js-order').on('click',function () {
        location.href = 'order.html'
    })
    // 点击消费记录
    $('#xfjl').on('click',function () {
        location.href = 'user-center-xfjl.html'
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