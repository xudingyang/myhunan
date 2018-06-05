$(function () {

    var state = 1
    if (1 === state) {
        // 已支付
        $('.state-had-pay').show()
        $('.state-had-cancel').hide()
        $('.operate-wrapper').show()
    } else {
        // 已过期
        $('.state-had-pay').hide()
        $('.state-had-cancel').show()
        $('.operate-wrapper').hide()
    }

    // 点击退票按钮
    $('.refund-btn').on('click',function () {
        if (confirm('确认退票吗？')) {
            console.log(123);
        }
    })
    // 点击二维码取票
    $('.get-ticket-btn').on('click',function () {
        location.href = 'ticket-qrcode.html'
    })
})